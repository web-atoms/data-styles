import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-layout": {
        "menu-item": styled.css `
            display: grid;
            grid-template-columns: auto 1fr auto auto;
            grid-template-rows: 1fr auto;
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
                background-color: #A0A0A025;
            }

            &[data-selected=true] {
                font-weight: bold;
                background-color: ${vars.selectionColor};
                color: ${vars.selectionTextColor};
            }

            & > i, & > img {
                color: ${vars.accentColor};
                min-width: 40px;
                padding: 5px;
                padding-left: 10px;
                padding-right: 10px;
                text-align: center;
                grid-row: 1 / span 2;
                grid-column: 1;
            }

            & > span, & > div, & > label {
                grid-row: 1;
                grid-column: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            & > small {
                grid-row: 2;
                grid-column: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            & > [data-element=icon] {
                grid-row: 1 / span 2;
                grid-column: 1;
                color: ${vars.accentColor};
            }

            & > [data-element=badge] {
                grid-row: 1 / span 2;
                grid-column: 3;
                margin-left: ${vars.spacing};
                color: ${vars.accentColor};
            }
            & > [data-element=pin] {
                grid-row: 1 / span 2;
                grid-column: 4;
                margin-left: ${vars.spacing};
                color: ${vars.accentColor};
            }
        `        
    }
}, "low");
