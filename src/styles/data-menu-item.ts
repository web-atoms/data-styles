import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-layout": {
        "menu-item": styled.css `
            display: flex;
            flex-direction: row;
            align-items: center;
            align-content: center;
            cursor: pointer;
            border-radius: ${vars.spacing};
            border-width: 1px;
            border-color: transparent;
            gap: ${vars.spacing};
        `.child("*", styled.css `
            flex: 0 0 auto;
        `)
        .and(":hover", styled.css `
            border-color: ${vars.borderColor};
        `)
        .and("[data-selected=true]", styled.css `
            font-weight: bold;
            border-left-color: ${vars.accentBgColor};
            border-left-width: medium;
        `)
        
    }
});