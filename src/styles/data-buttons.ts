import styled from "../styled";
import vars from "../vars";

styled.add({

    "data-layout": {
        "icon-button": styled.css `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${vars.spacing};
            padding: ${vars.spacingSmall};
            padding-left: ${vars.spacing};
            padding-right: ${vars.spacing};
            cursor: pointer;
        `
    }

});
