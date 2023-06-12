import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "separator": styled.css `
            display: inline-block;
            height: 1ch;
            width: 1px;
            border-right: solid 1px ${vars.borderColor};
            margin-left: ${vars.spacing};
            margin-right: ${vars.spacing};
        `
    }
});