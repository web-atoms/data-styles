import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-layout": {

        "vertical-flex": styled.css `
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: ${vars.spacing};
        ` ,

        "vertical-flex-center-items": styled.css `
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: ${vars.spacing};
        ` ,

        "vertical-flex-stretch-items": styled.css `
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-items: stretch;
            padding: ${vars.spacingMedium};
            gap: ${vars.spacing};
        `.child("*", styled.css `
            width: 100%;
        `)
    }
})