import styled from "../../styled";

styled.add({
    "data-grid-layout": {
        "all-center": styled.css `
            display: grid;
            align-items: center;
            justify-items: center;
            & > * {
                grid-row: 1;
                grid-column: 1;
            }
            `,
        "all-fill": styled.css `
            display: grid;
            align-items: stretch;
            justify-items: stretch;
            & > * {
                grid-row: 1;
                grid-column: 1;
            }
        `,
    }
});