import styled from "../../../styled";
import vars from "../../../vars";

styled.add({
    "data-layout": {
        "data-grid": styled.css `
        display: table;
        padding: ${vars.spacing};

        & > * {
            display: table-row;
            padding: ${vars.spacing};


            & > * {
                padding: ${vars.spacing};
                display: table-cell;
            }

            & > br {
                display: none;
            }

            & > button {
                margin: ${vars.spacing};
            }
        }

        @media only screen and (max-width: 500px) {

            & > * {
                display: flex;
                gap: ${vars.spacing};
                align-items: center;
                justify-items: stretch;
                position: relative;
                flex-wrap: wrap;
                & > * {
                    display: inline-block;
                }

                & > br {
                    display: block;
                    content: "";
                    flex: 1 1 100%;
                    width: 100%;
                    height: 0;
                    margin: -10px;
                }

                & > input[type=checkbox]:first-child {
                    position: absolute;
                    left: 10px;
                    top: 10px;
                    justify-self: start;
                    flex: 1 1 100%;
                    & + * {
                        margin-left: 30px;
                        flex: 1 1 100%;
                    }
                }
            }

            &[data-cells="2"] > * {
                display: grid;
                gap: ${vars.spacing};
                align-items: center;
                justify-items: stretch;
                grid-auto-flow: row;
                position: relative;
                & > * {
                    display: inline-block;
                }

                & > input[type=checkbox]:first-child {
                    grid-column: 1;
                    grid-row: 1;
                    margin-left: 10px;
                    justify-self: start;
                    & + * {
                        grid-column: 1 / span 2;
                        grid-row: 1;
                        margin-left: 30px;
                    }
                }
            }
        }

    `
    }
}, "low");
