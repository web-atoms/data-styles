module.exports = {
    "data-layout": {
        "row": styled.css `
            display: flex;
            align-items: center;
            align-content: center;
        `.child("*", styled.css `flex: 0 0 auto;`),

        "command-row": styled.css `
            display: flex;
            align-items: center;
            align-content: center;
            background-color: var(--command-bg-color, #F0F0F0);
            border-radius: 9999px;
            padding: 7px;
        `.child("*", styled.css `flex: 0 0 auto;`)
        .nested("button", styled.css `
            background-color: var(--accent-color, blue);
            color: var(--accent-text-color, white);
        `.and(":hover", styled.css `
            background-color: var(--accent-color, blue);
        `)),
    }
};