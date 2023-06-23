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
    varFunc.key = name;
    varFunc.value = def;
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

    noteColor: "#ffffe0",
    noteTextColor: "",

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

    linkColor: "blue",

    size: {
        extraSmall: "20rem",
        small: "24rem",
        medium: "28rem",
        large: "32rem",
        extraLarge: "36rem",
        extraLarge2: "42rem",
        extraLarge3: "48rem",
        extraLarge4: "56rem",
        extraLarge5: "64rem",
        extraLarge6: "72rem",
        extraLarge7: "80rem",
        full : "100%",
        prose: "65ch",
    },
    
    screen: {
        small: "640px",
        medium: "768px",
        large: "1024px",
        extraLarge: "1280px",
        extraLarge2: "1536px"
    }

};

const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);


const prepareVars = (start, prefix = "") => {

    for (const key in start) {
        if (Object.prototype.hasOwnProperty.call(start, key)) {
            const element = start[key];
            if (typeof element === "string") {
                start[key] = prepareVar( prefix + camelToSnakeCase(key), element);
                continue;
            }
            prepareVars(element, key + "-");
        }
    }
}

prepareVars(vars);

export default vars;
