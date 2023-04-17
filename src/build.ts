import { writeFileSync, readFileSync, readdirSync } from "fs";
import { join, parse } from "path";
import styled, { IStyleFragments } from "./styled";

const allStyles = styled.styles;

const buildAllStyles = (start, styles) => {

    for(const f of readdirSync(start, { withFileTypes: true })) {
        const name = join(start, f.name);
        if(f.isDirectory()) {
            buildAllStyles(name, styles);
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

buildAllStyles(join( __dirname, "styles"), allStyles);

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
            r += element.expand(`[${k}=${key}]`) + "\n";
            // r += `[${k}=${key}] { ${element} }\n`;
        }
    }
    return r;
};

const outputPath = (name) => join(__dirname, ".." , name);

// build css...
const buildCss = () => {
    let start = "";
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
    for (const style of allStyles) {
        for (const key in style) {
            if (Object.prototype.hasOwnProperty.call(style, key)) {
                const element = style[key];
                const list = Object.keys(element).filter((x) => x !== "*").map(JSON.stringify as any);
                start += `
        ${ JSON.stringify(key)}?: ${list.join(" | ")},`;
                
                }
        }
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
