import styled from "../styled";

styled.add({
    "data-font-weight": {
        "*": styled.css `font-weight: attr(data-font-weight) ;`,
        "bold": styled.css `font-weight: bold ;`,
        "normal": styled.css `font-weight: normal ;`,
        "bolder": styled.css `font-weight: bolder ;`,
        "lighter": styled.css `font-weight: lighter ;`,
    }
});
