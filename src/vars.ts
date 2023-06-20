export type IVar = string;

const prepareVar = (name, def) => {
    const n = `--${name}`;
    function varFunc (d) {
        if (d) {
            return `var(${n}, ${d})`;
        }
        return `var(${n}, ${def})`
    }

    varFunc.toString = () => `var(${n}, ${def})`;
    return varFunc;
};

const vars = {
    spacing: "5px",
    spacingSmall: "2px",
    spacingMedium: "7px",
    spacingLarge: "10px",

    thin: "3px",
    thinner: "2px",
    thinnest: "1px",
    thick: "4px",
    thicker: "5px",
    thickest: "6px",

    defaultColor: "canvas",
    defaultTextColor: "canvastext",

    borderColor: "lightgray",

    headerColor: "#80808030",
    headerTextColor: "",

    accentColor: "blue",
    accentTextColor: "white",

    warningColor: "#FFC107",
    warningTextColor: "darkgray",

    selectionColor: "highlight",
    selectionTextColor: "highlightText",

    hoverColor: "#80808020",
    hoverTextColor: "",

    stopColor: "red",
    stopTextColor: "white",

    goColor: "green",
    goTextColor: "white",

    acceptColor: "blue",
    acceptTextColor: "white",

    rejectColor: "red",
    rejectTextColor: "white",

    fontSizeSmall: "0.8125em",

    commandBgColor: "#F0F0F0",

    menuBgColor: "#808080",
    menuColor: "#F0F0F0",

    linkColor: "blue"

};

const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

for (const key in vars) {
    if (Object.prototype.hasOwnProperty.call(vars, key)) {
        const element = vars[key];
        vars[key] = prepareVar( camelToSnakeCase(key), element);
    }
}

export default vars;
