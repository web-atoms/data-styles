module.exports = {
    "data-font-size": {
        "*": styled.css `font-size: attr(data-font-size) !important;`,
        "small": styled.css `font-size: var(--font-size-small, 0.8125em) !important;`,
        "medium": styled.css `font-size: medium !important;`,
        "large": styled.css `font-size: large !important;`,
    }
};