import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "info-table": styled.css `
            display: flex;
            flex-direction: column;
            gap: ${vars.spacing};
            padding: ${vars.spacing};
            align-items: center;
            & > * {
                display: grid;
                grid-template-columns: auto auto 1fr auto auto auto;
                grid-template-rows: auto auto;
                padding: ${vars.spacing};
                & > .icon, & > [data-element=icon] {
                    grid-row: 1;
                    grid-column: 1;
                    align-self: center;
                    justify-self: center;                   
                }
                & > .title-icon, & > [data-element=title-icon] {
                    grid-row: 1;
                    grid-column: 2;
                    align-self: center;
                    justify-self: center;
                    margin-left: 5px;
                    margin-right: 5px;
                }
                & > .description-icon, & > [data-element=description-icon] {
                    grid-row: 2;
                    grid-column: 2;
                    align-self: center;
                    justify-self: center;
                    margin-left: 5px;
                    margin-right: 5px;
                }
                & > .title, & > [data-element=title] {
                    grid-row: 1;
                    grid-column: 3 / span 2;
                    align-self: center;
                    justify-self: stretch;
                    margin-left: 5px;
                    margin-right: 5px;
                }
                & > .description, & > [data-element=description] {
                    grid-row: 2;
                    grid-column: 2;
                    align-self: center;
                    justify-self: stretch;
                    margin-left: 5px;
                    margin-right: 5px;
                }
                & > .title-cell-2, & > [data-element=title-cell-2] {
                    grid-row: 1;
                    grid-column: 5;
                    align-self: center;
                    justify-self: self-end;
                    margin-left: 5px;
                    margin-right: 5px;
                }
                & > .description-cell-2, & > [data-element=description-cell-2] {
                    grid-row: 1;
                    grid-column: 4 / span 2;
                    align-self: center;
                    justify-self: self-end;
                    margin-left: 5px;
                    margin-right: 5px;
                }
                & > .title-cell-end, & > [data-element=title-cell-end] {
                    grid-row: 1;
                    grid-column: 6;
                    align-self: center;
                    justify-self: self-end;
                    margin-left: 5px;
                    margin-right: 5px;
                }
                & > .description-cell-end, & > [data-element=description-cell-end] {
                    grid-row: 1;
                    grid-column: 6;
                    align-self: center;
                    justify-self: self-end;
                    margin-left: 5px;
                    margin-right: 5px;
                }
            }
        `
    }
}, "low");