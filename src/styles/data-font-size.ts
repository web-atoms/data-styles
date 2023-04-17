import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-font-size": {
        "*": styled.css `font-size: attr(data-font-size) !important;`,
        "small": styled.css `font-size: ${vars.fontSizeSmall} !important;`,
        "medium": styled.css `font-size: medium !important;`,
        "large": styled.css `font-size: large !important;`,
    }
});
