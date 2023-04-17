import styled from "../styled";
import vars from "../vars";

styled.add({
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
            background-color: ${vars.commandBgColor};
            border-radius: 9999px;
            padding: 7px;
        `.child("*", styled.css `flex: 0 0 auto;`)
        .nested("button", styled.css `
                background-color: ${vars.accentBgColor};
                color: ${vars.accentColor};
            `.and(":hover", styled.css `
                background-color: ${vars.accentBgColor};
            `
        )),
    
        "warning": styled.css `
            margin: ${vars.spacingMedium};
            padding: ${vars.spacingMedium};
            border-radius: ${vars.spacingMedium};
            background-color: ${vars.warningColor};
            border: solid 1px darkgray;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `,

        "grid2x2": styled.css `
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
        `,

        "grid3x3": styled.css `
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto 1fr auto;
        `,

        "flex-wrap": styled.css `
            display: flex;
            gap: var( --spacing, 5px);
            flex-wrap: wrap;
        `,

        "flex": styled.css `
            display: flex;
            align-items: center;
            justify-content: start;
        `,

        "flex-center": styled.css `
            display: flex;
            justify-items: center;
            align-items: center;
        `
    }
});
