module.exports = {
    "data-display": {
        "*": styled.css `color: attr(data-display) !important;`,
        "flex": styled.css `display: flex !important;`,
        "grid": styled.css `display: grid !important;`,
        "inline-grid": styled.css `display: inline-grid !important;`,
        "inline-flex": styled.css `display: inline-flex !important;`,
        "vertical-flex": styled.css `
            display: flex !important;
            flex-direction: column;
        `,
    }
};