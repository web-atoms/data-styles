import { writeFileSync, readFileSync, readdirSync } from "fs";
import { join, parse } from "path";
import styled, { IStyleFragments } from "./styled";

const buildAllStyles = (start) => {

    for(const f of readdirSync(start, { withFileTypes: true })) {
        const name = join(start, f.name);
        if(f.isDirectory()) {
            buildAllStyles(name);
            continue;
        }
        const parsedPath = parse(name);
        if (parsedPath.ext !== ".js") {
            continue;
        }
        const file = join(parsedPath.dir, parsedPath.name );
        console.log(`Loading ${file}`);
        require(file);
    }

};

buildAllStyles(join( __dirname, "styles"));

const encodeKey = (key: string) => {
    if(/^[a-z][a-z\-0-9]*$/i.test(key)) {
        return key;
    }
    return JSON.stringify(key);
};

const buildCssStyle = (k: string, o: IStyleFragments) => {
    let r = "";
    for (const key in o) {
        if (Object.hasOwnProperty.call(o, key)) {
            const element = o[key];
            if (key === "*") {
                // since attr is experimental
                // we are not adding it now
                // r += `[${k}] ${element}\n`;
                continue;    
            }
            const encodedKey = encodeKey(key);
            if (k.endsWith("]")) {
                r += element.expand(`${k.substring(0, k.length - 1)}=${encodedKey}]`) + "\n";
                continue;
            } 
            r += element.expand(`[${k}=${encodedKey}]`) + "\n";
            // r += `[${k}=${key}] { ${element} }\n`;
        }
    }
    return r;
};

const outputPath = (name) => join(__dirname, ".." , name);

// build css...
const buildCss = () => {
    let start = "";
    const allStyles = styled.styles;
    for (const iterator of allStyles) {
        for (const key in iterator) {
            if (Object.prototype.hasOwnProperty.call(iterator, key)) {
                const element = iterator[key];
                start += buildCssStyle(key, element);
            }
        }
    }
    writeFileSync(outputPath("data-styles.css"), start, "utf-8");
};


// build .d.ts
const buildTs = () => {
    let start = "";

    const map = new Map<string, string[]>();

    const allStyles = styled.styles;
    for (const style of allStyles) {
        for (const key in style) {
            if (Object.prototype.hasOwnProperty.call(style, key)) {
                if (key.endsWith("]")) {
                    continue;
                }
                const element = style[key];
                let list = map.get(key);
                if (!list) {
                    list = [];
                    map.set(key, list);
                }
                for (const [key, value] of Object.entries(element)) {                    
                    if (key === "*") {
                        continue;
                    }
                    const sf = value;
                    const text = value.helpText
                        ? `/** ${value.helpText} */\n${JSON.stringify(key)}`
                        : `${JSON.stringify(key)}`;
                    list.push(text);
                }
                // list.push(... Object.keys(element)
                //     .filter((x) => x !== "*")
                //     .map((x) => JSON.stringify(x))) as string[]);                
            }
        }
    }

    for (const [key, value] of map) {
        start += `
        ${JSON.stringify(key)}?: ${value.join(" | ")},`;
    }

    writeFileSync(outputPath("data-styles.d.ts"), `
declare namespace JSX {
    interface IntrinsicAttributes { ${start}
    }
}
`, "utf-8");
};

const buildJS = () => {

    let text = readFileSync(outputPath("data-styles.css"), "utf-8");

    text = text.replace(/\`/, "``");

    text = "`" + text + "`";

    writeFileSync(outputPath("data-styles.js"), `
System.register([], function(_export, _context) {
    return {
        setters: [],
        execute: function() {
            const style = document.createElement("style");
            style.id = "data-styles";
            style.src = _context.meta.resolve("./data-styles.css");
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
