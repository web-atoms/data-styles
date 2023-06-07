import styled from "../../styled";
import vars from "../../vars";

const toolbarButton = styled.css `
    border: solid 1px transparent;
    padding: ${vars.spacingSmall};
    &:hover {
        border-color: ${vars.accentColor}
    }
`;

styled.add({
    "data-layout": {
        "toolbar-button": toolbarButton
    },
    "button[data-layout]": {
        "toolbar-button": toolbarButton
    }
}, "low");