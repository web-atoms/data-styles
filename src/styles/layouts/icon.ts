import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "icon": styled.css `
            border: none;
            background-color: transparent;
            color: inherit;
            padding: ${vars.spacing}
        `,
    }
}, "low");