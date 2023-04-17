module.exports = {
    "data-text-overflow": {
        "*": styled.css `text-overflow: attr(data-text-overflow) !important;`,
        "ellipsis": styled.css `
            text-overflow: ellipsis !important;
            min-width: 0;
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
        `
    }
};