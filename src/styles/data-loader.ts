import styled from "../styled";

styled.add({
    "data-layout": {
        "center-all": styled.css `
            width: 100%;
            height: 100%;
            flex: 1 1 100%;
            align-self: stretch;
            justify-self: stretch;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;

            & > * {
                grid-row: 1;
                grid-column: 1;
                align-self: center;
                justify-self: center;
            }
        `
    }
})