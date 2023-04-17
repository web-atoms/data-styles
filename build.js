const { writeFileSync, readFileSync, readdirSync } = require("fs");
const { join, parse } = require("path");

class StyleFragment {

    static newStyle( { selector = "", content = "", children = void 0}) {
        return new StyleFragment( { selector, content, children })
    }

    constructor({ selector, content, children }) {
        this.selector = selector;
        this.content = content;
        this.children = children;
    }

    expand(selector) {
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
    css: (t, a) => {
        let r = "";
        for (let index = 0; index < t.length; index++) {
            const element = t[index];
            r += element;
        }
        return StyleFragment.newStyle( { content: r });
    }
};

global.styled = styled;


const styles = {
};

const buildAllStyles = (start, styles) => {

    for(const f of readdirSync(start, { withFileTypes: true })) {
        const name = join(start, f.name);
        if(f.isDirectory()) {
            buildAllStyles(name, styles);
            continue;
        }
        const parsedPath = parse(name);
        const x = require("./" + join(parsedPath.dir, parsedPath.name ));
        for (const key in x) {
            if (Object.hasOwnProperty.call(x, key)) {
                const element = x[key];
                styles[key] = element;
            }
        }
    }

};

buildAllStyles("./styles", styles);

const buildCssStyle = (k, o) => {
    let r = "";
    for (const key in o) {
        if (Object.hasOwnProperty.call(o, key)) {
            const element = o[key];
            if (key === "*") {
                r += `[${k}] ${element}\n`;
                continue;    
            }
            r += element.expand(`[${k}=${key}]`) + "\n";
            // r += `[${k}=${key}] { ${element} }\n`;
        }
    }
    return r;
};

// build css...
const buildCss = () => {
    let start = "";
    for (const key in styles) {
        if (Object.hasOwnProperty.call(styles, key)) {
            const element = styles[key];
            start += buildCssStyle(key, element);
        }
    }
    writeFileSync("./data-styles.css", start, "utf-8");
};


// build .d.ts
const buildTs = () => {
    let start = "";
    for (const key in styles) {
        if (Object.hasOwnProperty.call(styles, key)) {
            const element = styles[key];
            const list = Object.keys(element).filter((x) => x !== "*").map(JSON.stringify);
            start += `
        ${ JSON.stringify(key)}?: ${list.join(" | ")},`;
}
    }
    writeFileSync("./data-styles.d.ts", `
declare namespace JSX {
    interface IntrinsicAttributes { ${start}
    }
}
`, "utf-8");
};

const buildJS = () => {

    let text = readFileSync("./data-styles.css", "utf-8");

    text = text.replace(/\`/, "``");

    text = "`" + text + "`";

    writeFileSync("./data-styles.js", `
System.register([], function(_export, _context) {
    return {
        setters: [],
        execute: function() {
            const t = ${text};
            const style = document.createElement("style");
            style.id = "data-styles";
            style.textContent = t;
            document.head.appendChild(style);       
        }
    };
});
    `, "utf-8");

};

buildCss();

buildTs();

buildJS();

console.log(`Build success`);
