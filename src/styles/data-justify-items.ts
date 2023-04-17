import styled from "../styled";

styled.add({
    "data-justify-items": {
        "*": styled.css `align-items: attr(data-justify-items) ;`,
        "start": styled.css `justify-items: start ;`,
        "self-start": styled.css `justify-items: self-start ;`,
        "end": styled.css `justify-items: end ;`,
        "self-end": styled.css `justify-items: self-end ;`,
        "center": styled.css `justify-items: center ;`,
        "stretch": styled.css `justify-items: stretch ;`,
        "normal": styled.css `justify-items: normal ;`,
        "baseline": styled.css `justify-items: baseline ;`,
    }
});
