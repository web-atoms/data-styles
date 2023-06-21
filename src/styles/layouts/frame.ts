import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "frame": styled.css `
            border: solid 1px;
            border-color: ${vars.borderColor};
            padding: ${vars.spacingLarge};
            border-radius: ${vars.spacingLarge};
            box-shadow: 0 0 10px 1px rgb(0 0 0 / 25%);
        `,
        "frame-vertical-flex": styled.css `
            border: solid 1px;
            border-color: ${vars.borderColor};
            padding: ${vars.spacingLarge};
            border-radius: ${vars.spacingLarge};
            box-shadow: 0 0 10px 1px rgb(0 0 0 / 25%);
            display: flex;
            flex-direction: column;
            gap: ${vars.spacing};
        `
    
    }
}, "low");