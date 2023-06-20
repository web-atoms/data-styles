import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "card": styled.css `
        display: grid;
        grid-template-rows: 25px 25px 1fr;
        grid-template-columns: auto auto 1fr auto auto;
        gap: ${vars.spacing};
        justify-items: stretch;
        align-items: center;

        background-color: ${vars.headerColor};


        border: solid 1px lightgray;
        border-radius: ${vars.spacingLarge};

        & > * {
            padding: ${vars.spacing};
        }

        & > .icon, & > [data-element=icon] {
            grid-row: 1 / span 2;
            grid-column: 1;
            max-height: 50px;
            justify-self: center;
            cursor: pointer;
            color: ${vars.headerTextColor};
        }

        & > .title-icon, & > [data-element=title-icon] {
            grid-row: 1;
            grid-column: 2;
            justify-self: center;
            cursor: pointer;
            color: ${vars.headerTextColor};
        }
        & > .description-icon, & > [data-element=description-icon] {
            grid-row: 2;
            grid-column: 2;
            justify-self: center;
            color: ${vars.headerTextColor};
        }
        & > .title, & > [data-element=title] {
            grid-row: 1;
            grid-column: 3;
            cursor: pointer;
            color: ${vars.headerTextColor};
            &:hover {
                text-decoration: underline;
            }
        }
        & > .description, & > [data-element=description] {
            grid-row: 2;
            grid-column: 3;
            color: ${vars.headerTextColor};
        }
        & > .action, & > [data-element=action] {
            grid-row: 1 / span 2;
            grid-column: 4 / span 2;
            color: ${vars.headerTextColor};
            cursor: pointer;
        }
        & > .title-action, & > [data-element=title-action] {
            grid-row: 1;
            cursor: pointer;
            color: ${vars.headerTextColor};
        }
        & > .description-action, & > [data-element=description-action] {
            grid-row: 2;
            cursor: pointer;
            color: ${vars.headerTextColor};
        }
        & > .details, & > [data-element=details] {
            grid-row: 3;
            grid-column: 1 / span 5;
            display: flex;
            flex-direction: column;
            background-color: ${vars.defaultColor};
            color: ${vars.defaultTextColor};
            border-bottom-left-radius: ${vars.spacingLarge};
            border-bottom-right-radius: ${vars.spacingLarge};
            gap: ${vars.spacing};
        }
    `
    }
}, "low");
