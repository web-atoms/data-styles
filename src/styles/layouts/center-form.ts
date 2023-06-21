import styled from "../../styled";
import vars from "../../vars";

styled.add({

    "data-layout": {
        "center-page-900px": styled.css `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${vars.spacing};

        & > * {

            min-width: 200px;
            width: 900px;

            @media only screen and (max-width: 900px) {
                & {
                    width: 100%;
                }
            }
        }


        `.help("Creates layout with content centered with vertical flex with gap. The content will stretch in mobile.")
    }

}, "low");
