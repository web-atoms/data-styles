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
            border-style: solid;
            border-radius: ${vars.spacing};
            border-width: 1px;
            border-color: transparent;
            gap: ${vars.spacing};
            padding: ${vars.spacing};
        `.child("*", styled.css `
            flex: 0 0 auto;
        `)
        .and(":hover", styled.css `
            border-color: ${vars.borderColor};
        `)
        .and("[data-selected=true]", styled.css `
            font-weight: bold;
            border-left-color: ${vars.accentColor};
            border-left-width: medium;
        `)
        .child("i", styled.css `
            color: ${vars.accentColor};
        `)
        .child("[data-element=icon]", styled.css `
            color: ${vars.accentColor};
        `)
        
    }
});