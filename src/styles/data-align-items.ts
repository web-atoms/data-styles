import styled from "../styled";

styled.add({
    "data-align-items": {
        "*": styled.css `align-items: attr(data-align-items) !important;`,
        "start": styled.css `align-items: start !important;`,
        "self-start": styled.css `align-items: self-start !important;`,
        "end": styled.css `align-items: end !important;`,
        "self-end": styled.css `align-items: self-end !important;`,
        "center": styled.css `align-items: center !important;`,
        "stretch": styled.css `align-items: stretch !important;`,
        "normal": styled.css `align-items: normal !important;`,
        "baseline": styled.css `align-items: baseline !important;`,
    }
});
