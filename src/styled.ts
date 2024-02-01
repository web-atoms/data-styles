function *divide (text: string) {
    const regex = /^(([^\{\n]+\{[\t\x20]*)|([^\n\}]*\}[^\S\n\r]*))$/gm;
    let m;
    let sentOnce = false;
    let lastIndex = 0;
    let lastMatch: string;
    while((m = regex.exec(text)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        const match = m[0];
        if(!sentOnce) {
            // send first text ..
            // send current ..
            sentOnce = true;
            yield text.substring(lastIndex, m.index);
            lastIndex = m.index + match.length;
            lastMatch = match;
            continue;
        }

        if (lastMatch.includes("}")) {
            yield [lastMatch.trim()];
            lastIndex = m.index + match.length;
            lastMatch = match;
            continue;
        }

        yield [lastMatch, text.substring(lastIndex, m.index), match];
        lastIndex = m.index + match.length;
        lastMatch = match;
    }

    if(lastMatch?.includes("}")) {
        yield [lastMatch.trim()];
    }
};

class StyleFragment {

    static newStyle( { selector = "", content = ""}) {
        return new StyleFragment( { selector, content})
    }

    private selector: string;
    private content: string;
    public helpText: string;

    constructor({ selector, content }) {
        this.selector = selector;
        this.content = content;
    }

    expand(selector?) {
        selector ??= this.selector;

        let en = divide(this.content);

        let parts = en.next();

        if (parts.done) {
            if (!this.content) {
                return "";
            }
            return `${selector} {\n${this.content}\n}`;
        }

        const first = parts.value as string;

        let content = first?.trim()
            ? `${selector} {\n${first}\n}\n`
            : "";

        let selectorStack = [];

        while (!(parts = en.next()).done) {
            const [key, value] = parts.value as string[];

            if (key.endsWith("}")) {
                selector = selectorStack.pop();
                if (selector === "@") {
                    content += "\n}\n";
                    selector = selectorStack.pop();
                }
                continue;
            }

            let keySelector = key.replace("{", "");

            const isMedia = /\@/.test(keySelector);

            const replace = !isMedia;

            const replaced = replace
                ? selector.split(",").map((x) => keySelector.replace(/\&/g, x).trim()).join(",")
                : keySelector;

            // const replaced = keySelector.replace(/\&/g, selector).trim();
            // push stack...
            selectorStack.push(selector);
            selector = replace ? replaced : selector;
            if (isMedia) {
                selectorStack.push("@");
            }

            // only add rule if it is not empty...
            if (value?.trim()) {
                content += `${replaced} {\n${value}\n}\n`;
            } else {
                if (isMedia) {
                    content += `${replaced} {\n`;
                }
            }
        }

        return content;
    }

    toString() {
        return this.expand();
    }
    help (text) {
        this.helpText = text;
        return this;
    }
}

export type IStyleFragments = {
    [key: string]: StyleFragment;
};

export type IStyleFragmentSet = {
    [key: string]: IStyleFragments;
}

const styles: IStyleFragmentSet[] = [];
const lowestStyles: IStyleFragmentSet[] = [];
const lowStyles: IStyleFragmentSet[] = [];
const highStyles: IStyleFragmentSet[] = [];

const styled = {

    get styles() {
        return [ ... lowestStyles, ... lowStyles, ... styles, ... highStyles];
    },

    css: (t: TemplateStringsArray, ... a: any[]) => {
        let r = "";
        for (let index = 0; index < t.length; index++) {
            const element = t[index];
            r += element;
            if (index < a.length) {
                r += a[index];
            }
        }
        return StyleFragment.newStyle( { content: r });
    },

    add(x: IStyleFragmentSet, priority: "high" | "normal" | "low" | "lowest" = "normal") {
        if (priority === "lowest") {
            lowestStyles.push(x);
            return;
        }
        if (priority === "low") {
            lowStyles.push(x);
            return;
        }
        if (priority === "high") {
            highStyles.push(x);
            return;
        }
        styles.push(x);
    },
};

export default styled;

export type IStyleValue = string | { name: string, value: string };

export const pair = (name: string , value?: string ) => ( !value ? (value=name, name = name.replace(" ", "-")) : (name), { name, value });

export const createSet = (name: string, values: IStyleValue[], appendGlobals = true) => {
    const r = {
        "*": styled.css `${name}: attr(${"data-" + name});`
    };
    values.push(... ["inherit", "initial", "revert", "revert-layer", "unset"]);
    for (const iterator of values) {
        if (typeof iterator === "string") {
            r[iterator] = styled.css `\t${name}: ${iterator};`;
            continue;
        }
        r[iterator.name] = styled.css `\t${name}: ${iterator.value};`;
    }
    return r as any;
};
