const { writeFileSync } = require("fs");

const styled = {
    css: (t, a) => {
        let r = "";
        for (let index = 0; index < t.length; index++) {
            const element = t[index];
            r += element;
        }
        return r;
    }
};


const styles = {
    "data-font-weight": {
        "*": styled.css `font-weight: attr(data-font-weight) !important;`,
        "bold": styled.css `font-weight: bold !important;`,
        "normal": styled.css `font-weight: normal !important;`,
        "bolder": styled.css `font-weight: bolder !important;`,
        "lighter": styled.css `font-weight: lighter !important;`,
    },
    "data-font-style": {
        "*": styled.css `font-weight: attr(data-font-style) !important;`,
        "italic": styled.css `font-style: italic !important;`,
        "normal": styled.css `font-style: normal !important;`,
        "oblique": styled.css `font-style: oblique !important;`,
    },
    "data-text-align": {
        "*": styled.css `font-weight: attr(data-text-align) !important;`,
        "left": styled.css `text-align: left !important;`,
        "right": styled.css `text-align: right !important;`,
        "center": styled.css `text-align: center !important;`,
        "justify": styled.css `text-align: justify !important;`,
    }
};

const buildCssStyle = (k, o) => {
    let r = "";
    for (const key in o) {
        if (Object.hasOwnProperty.call(o, key)) {
            const element = o[key];
            if (key === "*") {
                r += `[${k}] { ${element} }\n`;
                continue;    
            }
            r += `[${k}=${key}] { ${element} }\n`;
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
    writeFileSync("./data-styles.css", start);
};


// build .d.ts
const buildTs = () => {
    let start = "";
    for (const key in styles) {
        if (Object.hasOwnProperty.call(styles, key)) {
            const element = styles[key];
            start += buildCssStyle(element);
        }
    }
    writeFileSync("./index.d.ts", start);
};

buildCss();

buildTs();

console.log(`Build success`);
