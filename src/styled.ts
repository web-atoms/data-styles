class StyleFragment {

    static newStyle( { selector = "", content = "", children = void 0}) {
        return new StyleFragment( { selector, content, children })
    }

    private selector: string;
    private content: string;
    private children: StyleFragment[];
    public helpText: string;

    constructor({ selector, content, children }) {
        this.selector = selector;
        this.content = content;
        this.children = children;
    }

    expand(selector?) {
        selector ??= this.selector;
        let content = `${selector} {${this.content}}`;
        if (this.children) {
            for (const iterator of this.children) {
                content += "\n";
                content += iterator.expand(selector + iterator.selector);
            }
        }
        return content;
    }

    toString() {
        return this.expand();
    }

    and (selector, sf ) {
        sf.selector = selector;
        this.children ??= [];
        this.children.push(sf);
        return this;
    }

    child (selector, sf ) {
        sf.selector = " > " + selector;
        this.children ??= [];
        this.children.push(sf);
        return this;
    }
    nested (selector, sf ) {
        sf.selector = " " + selector;
        this.children ??= [];
        this.children.push(sf);
        return this;
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

const styled = {

    get styles() {
        return styles;
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

    add(x: IStyleFragmentSet) {
        styles.push(x);
    },
};

export default styled;

export type IStyleValue = string | { name: string, value: string };

export const pair = (name: string , value?: string ) => ( !value ? (value=name, name = name.replace(" ", "-")) : (name), { name, value });

export const createSet = (name: string, values: IStyleValue[]) => {
    const r = {
        "*": styled.css `${name}: attr(${"data-" + name});`
    };
    for (const iterator of values) {
        if (typeof iterator === "string") {
            r[iterator] = styled.css `${name}: ${iterator};`;
            continue;
        }
        r[iterator.name] = styled.css `${name}: ${iterator.value};`;
    }
    return r as any;
};
