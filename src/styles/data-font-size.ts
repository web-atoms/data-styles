import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-font-size": {
        "*": styled.css `font-size: attr(data-font-size) ;`,
        "small": styled.css `font-size: small;`,
        "smaller": styled.css `font-size: smaller;`,
        "medium": styled.css `font-size: medium ;`,
        "large": styled.css `font-size: large ;`,
        "larger": styled.css `font-size: larger ;`,
        "x-small": styled.css `font-size: x-small;`,
        "xx-small": styled.css `font-size: xx-small;`,
        "x-large": styled.css `font-size: x-large;`,
        "xx-large": styled.css `font-size: xx-large;`,
    }
}, "high");
