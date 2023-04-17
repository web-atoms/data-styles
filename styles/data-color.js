module.exports = {
    "data-color": {
        "*": styled.css `color: attr(data-color) !important;`,
        "red": styled.css `color: red !important;`,
        "blue": styled.css `color: blue !important;`,
        "green": styled.css `color: green !important;`,
        "lightgreen": styled.css `color: lightgreen !important;`,
        "lightyellow": styled.css `color: lightyellow !important;`,
        "gold": styled.css `color: gold !important;`,
        "goldenrod": styled.css `color: goldenrod !important;`,
        "fuchsia": styled.css `color: fuchsia !important;`,
        "black": styled.css `color: black !important;`,
        "white": styled.css `color: white !important;`,
        "accent": styled.css `color: var(--accent-color, white) !important;`,
    }
};