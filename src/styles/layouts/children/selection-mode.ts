import styled from "../../../styled";
import vars from "../../../vars";

styled.add({
    "data-list-selection": {
        "default": styled.css `
        
        & > [data-item-index], & > [data-element=items-presenter] > [data-item-index] {
                &:hover {
                    background-color: ${vars.hoverColor};
                    color: ${vars.hoverTextColor};
                }

                &[data-selected-item=true] {
                    background-color: ${vars.selectionColor};
                    color: ${vars.selectionTextColor};
                    &:hover {
                        background-color: ${vars.hoverColor};
                        color: ${vars.hoverTextColor};
                    }
                }

                & > a {
                    text-decoration: none;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        `
    }
}, "low");