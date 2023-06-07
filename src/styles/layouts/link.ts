import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "link": styled.css `
            border: none;
            text-decoration: none;
            color: ${vars.linkColor};
            &:hover {
                text-decoration: underline;
            }
        `
    }
}, "low");