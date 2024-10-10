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


            & > *, & > button, & > button[data-layout] {
                padding: ${vars.spacing};
                display: table-cell;
                vertical-align: top;
            }
 

            & > br {
                display: none;
            }

            & > button {
                margin: ${vars.spacing};
            }

            &:not(header,footer):hover {
                background-color: ${vars.hoverColor};
                color: ${vars.hoverTextColor};
            }

            &[data-selected-item]:not(header,footer) {
                background-color: ${vars.selectionColor};
                color: ${vars.selectionTextColor};
            }


            &:not(header):not(footer):not(menu) > * {
                max-width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            & > input:first-child:checked ~ * {
                font-weight: bold;
            }

            & > a {
                text-decoration: none;
            }
        }



        & > header {
            display: table-caption;
            gap: ${vars.spacing};
            flex-direction: row;
            align-items: center;
        }

        & > footer {
            display: table-caption;
            caption-side: bottom;
            gap: ${vars.spacing};
            flex-direction: row;
            align-items: center;
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
                    max-width: 200px;
                    overflow: hidden;
                    text-overflow: ellipsis;
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
