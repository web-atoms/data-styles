import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-layout": {
        "note": styled.css `
        margin: ${vars.spacing};
        padding: ${vars.spacingLarge};
        border-radius: ${vars.spacingLarge};
        background-color: ${vars.noteColor};
        color: ${vars.noteTextColor};
        box-shadow: rgba(50, 50, 105, 0.07) 0px 2px 5px 0px, rgba(0, 0, 0, 0.03) 0px 1px 1px 0px;
        border: solid 1px rgba(0, 0, 0, 0.05);
    `
    }
});
