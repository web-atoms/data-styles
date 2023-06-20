import styled from "../../styled";
import vars from "../../vars";

const list = styled.css `
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;

    padding: ${vars.spacing};

    & > * {
        border: solid 1px lightgray;
        border-bottom: none;
        padding: ${vars.spacing};
        display: grid;
        grid-template-columns: auto auto 1fr auto auto;
        grid-template-rows: auto auto;
        gap: ${vars.spacing};
        align-items: center;

        &[data-selected=true] {
            background-color: ${vars.selectionColor};
            color: ${vars.selectionTextColor};
        }

        & > a {
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }

        &:hover {
            background-color: #80808020;
        }

        &:first-child {
            border-top-left-radius: ${vars.spacing};
            border-top-right-radius: ${vars.spacing};
        }

        &:last-child {
            border-bottom-left-radius: ${vars.spacing};
            border-bottom-right-radius: ${vars.spacing};
            border-bottom: solid 1px lightgray;
        }

        & > .icon, & > [data-element=icon] {
            grid-column: 1;
            grid-row: 1;
            justify-self: center;
        }
        & > .title-icon, & > [data-element=title-icon] {
            grid-column: 2;
            grid-row: 1;
            justify-self: center;
            cursor: pointer;
        }
        & > .description-icon, & > [data-element=description-icon] {
            grid-column: 2;
            grid-row: 2;
            justify-self: center;
        }
        & > .center-title, & > [data-element=center-title] {
            grid-column: 3;
            grid-row: 1 / span 2;
            justify-self: start;
            align-self: center;
            font-weight: bold;
        }
        & > .title, & > [data-element=title] {
            grid-column: 3;
            grid-row: 1;
            justify-self: start;
            font-weight: bold;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
        & > .description, & > [data-element=description] {
            grid-column: 3;
            grid-row: 2;
            justify-self: left;
            font-size: 0.825em;
        }
        & > .action, & > [data-element=action] {
            grid-column: 4 / span 2;
            grid-row: 1 / span 2;
            justify-self: center;
        }
        & > .action-top-left, & > [data-element=action-top-left] {
            grid-column: 4;
            grid-row: 1;
            justify-self: start;
        }
        & > .action-top-right, & > [data-element=action-top-right] {
            grid-column: 5;
            grid-row: 1;
            justify-self: end;
        }
        & > .action-bottom-left, & > [data-element=action-bottom-left] {
            grid-column: 4;
            grid-row: 2;
            justify-self: start;
        }
        & > .action-bottom-right, & > [data-element=action-bottom-right] {
            grid-column: 5;
            grid-row: 2;
            justify-self: end;
        }
    }
`;

styled.add({
    "data-layout": {
        list,
        "main-list": styled.css `
        ${list}

        & > * {
            min-width: 200px;
            width: 900px;

        }

        @media only screen and (max-width: 600px) {
            & > * {
                width: 100%;
            }
        }
        `.help("Main list occupies more than half of the page and to be used as the only list on page")
    }
}, "low");