export type IVar = string;

const prepareVar = (name, def) => {
    const n = `--${name}`;
    return (d) => {
        if (d) {
            return `var(${n}, ${d})`;
        }
        return `var(${n}, ${def})`
    }
};

const vars = {
    spacing: "5px",
    spacingMedium: "7px",
    spacingLarge: "10px",

    accentBgColor: "blue",
    accentColor: "white",
    warningColor: "#FFC107",

    fontSizeSmall: "0.8125em",

    commandBgColor: "#F0F0F0"

};

const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

for (const key in vars) {
    if (Object.prototype.hasOwnProperty.call(vars, key)) {
        const element = vars[key];
        vars[key] = prepareVar( camelToSnakeCase(key), element);
    }
}

export default vars;
