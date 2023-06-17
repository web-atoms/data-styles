
import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        
        "flex-csv": styled.css `
            display: flex;
            gap: ${vars.spacing};
            align-items: center;
            flex-wrap: wrap;
            & > span, & > div, & > [data-append=comma] {
                &:not(:empty):not(:last-child)::after {
                    content: ","
                }
            }
        `,
    }
}, "low")