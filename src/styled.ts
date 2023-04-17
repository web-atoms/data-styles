class StyleFragment {

    static newStyle( { selector = "", content = "", children = void 0}) {
        return new StyleFragment( { selector, content, children })
    }

    private selector: string;
    private content: string;
    private children: StyleFragment[];

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
}

const styled = {

    styles: {},

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

    add(x) {
        for (const key in x) {
            if (Object.prototype.hasOwnProperty.call(x, key)) {
                const element = x[key];
                this.styles[key] = element;
            }
        }
    }
};

export default styled;
