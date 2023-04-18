import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-layout": {

        "row": styled.css `
            display: flex;
            align-items: center;
            align-content: center;
            gap: ${vars.spacing};
        `.child("*", styled.css `flex: 0 0 auto;`),

        "command-row": styled.css `
            display: flex;
            align-items: center;
            align-content: center;
            background-color: ${vars.commandBgColor};
            border-radius: 9999px;
            padding: 7px;
            gap: ${vars.spacing};
        `.child("*", styled.css `flex: 0 0 auto;`)
            .nested("button", styled.css `
                background-color: ${vars.accentColor};
                color: ${vars.accentTextColor};
            `.and(":hover", styled.css `
                background-color: ${vars.accentColor};
                color: ${vars.accentTextColor};
            `
        )),
    
        "sticky-command-row": styled.css `
            position: sticky;
            bottom: ${vars.spacing};
            display: flex;
            align-items: center;
            align-content: center;
            background-color: ${vars.commandBgColor};
            border-radius: 9999px;
            padding: 7px;
            gap: ${vars.spacing};
        `.child("*", styled.css `flex: 0 0 auto;`)
            .nested("button", styled.css `
                background-color: ${vars.accentColor};
                color: ${vars.accentTextColor};
            `.and(":hover", styled.css `
                background-color: ${vars.accentColor};
                color: ${vars.accentTextColor};
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
            gap: ${vars.spacing};
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
            gap: ${vars.spacing};
            flex-wrap: wrap;
        `,

        "flex": styled.css `
            display: flex;
            align-items: center;
            justify-content: start;
            gap: ${vars.spacing};
        `,

        "flex-center": styled.css `
            display: flex;
            justify-items: center;
            align-items: center;
            justify-content: center;
            gap: ${vars.spacing};
        `
    }
});
