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

            &:hover {
                border-color: ${vars.borderColor};
            }

            &[data-selected=true] {
                font-weight: bold;
                border-left-color: ${vars.accentColor};
                border-left-width: medium;
            }

            & > * {
                flex: 0 0 auto;
            }

            & > i {
                color: ${vars.accentColor};
                min-width: 40px;
                padding: 5px;
                padding-left: 10px;
                padding-right: 10px;
                text-align: center;
            }

            & > [data-element=icon] {
                color: ${vars.accentColor};
            }

        `        
    }
}, "low");
