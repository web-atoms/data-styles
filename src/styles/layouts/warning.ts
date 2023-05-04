import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
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
    }
})