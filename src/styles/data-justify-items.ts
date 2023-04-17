import styled from "../styled";

styled.add({
    "data-justify-items": {
        "*": styled.css `align-items: attr(data-justify-items) !important;`,
        "start": styled.css `justify-items: start !important;`,
        "self-start": styled.css `justify-items: self-start !important;`,
        "end": styled.css `justify-items: end !important;`,
        "self-end": styled.css `justify-items: self-end !important;`,
        "center": styled.css `justify-items: center !important;`,
        "stretch": styled.css `justify-items: stretch !important;`,
        "normal": styled.css `justify-items: normal !important;`,
        "baseline": styled.css `justify-items: baseline !important;`,
    }
});
