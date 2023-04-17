import styled from "../styled";

styled.add({
    "data-font-weight": {
        "*": styled.css `font-weight: attr(data-font-weight) !important;`,
        "bold": styled.css `font-weight: bold !important;`,
        "normal": styled.css `font-weight: normal !important;`,
        "bolder": styled.css `font-weight: bolder !important;`,
        "lighter": styled.css `font-weight: lighter !important;`,
    }
});
