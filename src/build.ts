import { writeFileSync, readFileSync, readdirSync } from "fs";
import { join, parse } from "path";
import styled from "./styled";

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
        require(join(parsedPath.dir, parsedPath.name ));
    }

};

buildAllStyles(join( __dirname, "styles"), allStyles);

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
    for (const key in allStyles) {
        if (Object.hasOwnProperty.call(allStyles, key)) {
            const element = allStyles[key];
            start += buildCssStyle(key, element);
        }
    }
    writeFileSync("../data-styles.css", start, "utf-8");
};


// build .d.ts
const buildTs = () => {
    let start = "";
    for (const key in allStyles) {
        if (Object.hasOwnProperty.call(allStyles, key)) {
            const element = allStyles[key];
            const list = Object.keys(element).filter((x) => x !== "*").map(JSON.stringify as any);
            start += `
        ${ JSON.stringify(key)}?: ${list.join(" | ")},`;
}
    }
    writeFileSync("../data-styles.d.ts", `
declare namespace JSX {
    interface IntrinsicAttributes { ${start}
    }
}
`, "utf-8");
};

const buildJS = () => {

    let text = readFileSync("../data-styles.css", "utf-8");

    text = text.replace(/\`/, "``");

    text = "`" + text + "`";

    writeFileSync("../data-styles.js", `
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
