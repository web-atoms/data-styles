import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-layout": {

        "grid2x2": styled.css `
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
        `,

        "grid3x3": styled.css `
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto 1fr auto;
        `,


        "flex": styled.css `
            display: flex;
            align-items: center;
            justify-content: start;
            gap: ${vars.spacing};
        `,

        "flex-center": styled.css `
            display: flex;
            justify-items: center;
            align-items: center;
            justify-content: center;
            gap: ${vars.spacing};
        `
    }
});
