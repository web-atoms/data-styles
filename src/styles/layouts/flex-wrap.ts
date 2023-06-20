import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        
        "flex-wrap": styled.css `
            display: flex;
            gap: ${vars.spacing};
            align-items: center;
            flex-wrap: wrap;
            padding: ${vars.spacing};
        `,
    }
}, "low")