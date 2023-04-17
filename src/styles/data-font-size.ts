import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-font-size": {
        "*": styled.css `font-size: attr(data-font-size) ;`,
        "small": styled.css `font-size: ${vars.fontSizeSmall} ;`,
        "medium": styled.css `font-size: medium ;`,
        "large": styled.css `font-size: large ;`,
    }
});
