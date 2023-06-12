import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "link": styled.css `
            border: none;
            text-decoration: none;
            color: ${vars.linkColor};
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 5px;
            &:hover {
                text-decoration: underline;
            }
        `
    }
}, "low");