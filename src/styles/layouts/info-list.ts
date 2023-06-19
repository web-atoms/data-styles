import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "info-list": styled.css `
            display: flex;
            align-items: center;
            justify-items: center;
            flex-direction: column;

            padding: ${vars.spacing};

            & > * {
                border: solid 1px lightgray;
                border-bottom: none;
                padding: ${vars.spacing};
                min-width: 200px;
                width: 900px;
                display: grid;
                grid-template-columns: auto auto 1fr auto auto;
                grid-template-rows: auto auto;
                gap: ${vars.spacing};
                align-items: center;

                &:hover {
                    background-color: #80808080;
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
                    place-self: center;
                }
                & > .title-icon, & > [data-element=title-icon] {
                    grid-column: 2;
                    grid-row: 1;
                    place-self: center;
                }
                & > .description-icon, & > [data-element=description-icon] {
                    grid-column: 2;
                    grid-row: 2;
                    place-self: center;
                }
                & > .center-title, & > [data-element=center-title] {
                    grid-column: 3;
                    grid-row: 1 / span 2;
                    place-self: start;
                    align-self: center;
                    font-weight: bold;
                }
                & > .title, & > [data-element=title] {
                    grid-column: 3;
                    grid-row: 1;
                    place-self: start;
                    font-weight: bold;
                }
                & > .description, & > [data-element=description] {
                    grid-column: 3;
                    grid-row: 2;
                    place-self: left;
                    font-size: 0.75em;
                }
                & > .action, & > [data-element=action] {
                    grid-column: 4 / span 2;
                    grid-row: 1 / span 2;
                    place-self: center;
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

            @media only screen and (max-width: 600px) {
                & > * {
                    width: 100%;
                }
            }

        `
    }
}, "low");