import styled from "../../styled";
import vars from "../../vars";

const toolbarButton = styled.css `
    border: solid 1px transparent;
    padding: ${vars.spacingSmall};
    padding-left: ${vars.spacing};
    padding-right: ${vars.spacing};
    background-color: transparent;
    cursor: pointer;
    &:hover {
        border-color: ${vars.accentColor};
        color: ${vars.accentColor};
    }
`;

const toolbarButtonAnchor = styled.css `
    border: solid 1px transparent;
    padding: ${vars.spacingSmall};
    padding-left: ${vars.spacing};
    padding-right: ${vars.spacing};
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        border-color: ${vars.accentColor};
        text-decoration: underline;
        color: ${vars.accentColor};
    }
`;

styled.add({
    "data-layout": {
        "toolbar-button": toolbarButton
    },
    "button[data-layout]": {
        "toolbar-button": toolbarButton
    },
    "a[data-layout]": {
        "toolbar-button": toolbarButtonAnchor
    }
}, "low");