import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "row": styled.css `

            display: flex;
            align-items: center;
            align-content: center;
            gap: ${vars.spacing};

            & > *:not([data-flex]) {
                flex: 0 0 auto;
            }
            `,

        "header-row": styled.css `

            display: flex;
            align-items: center;
            gap: ${vars.spacing};
            padding: ${vars.spacing};

            & > *:not([data-flex]) {
                flex: 0 0 auto;
            }
        `.help("Flex row with padding"),

        "command-row": styled.css `

            display: flex;
            align-items: center;
            align-content: center;
            background-color: ${vars.commandBgColor};
            border-radius: 9999px;
            padding: ${vars.spacingMedium};
            gap: ${vars.spacing};

            & > *:not([data-flex]) {
                flex: 0 0 auto;
            }

            & button {
                background-color: ${vars.accentColor};
                color: ${vars.accentTextColor};
                border-radius: 9999px;
                padding: ${vars.spacingSmall};
                padding-left: ${vars.spacing};
                padding-right: ${vars.spacing};
            }
        `,

        "sticky-command-row": styled.css `

            position: sticky;
            display: flex;
            align-items: center;
            align-content: center;
            background-color: ${vars.commandBgColor};
            border-radius: 9999px;
            padding: ${vars.spacingMedium};
            gap: ${vars.spacing};
            bottom: 0;
            
            & > *:not([data-flex]) {
                flex: 0 0 auto;
            }

            & button {
                background-color: ${vars.accentColor};
                color: ${vars.accentTextColor};
                border-radius: 9999px;
                padding: ${vars.spacingSmall};
                padding-left: ${vars.spacing};
                padding-right: ${vars.spacing};
            }            
        `,        
    }
}, "low");
