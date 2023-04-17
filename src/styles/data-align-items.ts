import styled from "../styled";

styled.add({
    "data-align-items": {
        "*": styled.css `align-items: attr(data-align-items) ;`,
        "start": styled.css `align-items: start ;`,
        "self-start": styled.css `align-items: self-start ;`,
        "end": styled.css `align-items: end ;`,
        "self-end": styled.css `align-items: self-end ;`,
        "center": styled.css `align-items: center ;`,
        "stretch": styled.css `align-items: stretch ;`,
        "normal": styled.css `align-items: normal ;`,
        "baseline": styled.css `align-items: baseline ;`,
    }
});
