import styled from "../styled"

styled.add({
    "data-text-align": {
        "*": styled.css `font-weight: attr(data-text-align) ;`,
        "left": styled.css `text-align: left ;`,
        "right": styled.css `text-align: right ;`,
        "center": styled.css `text-align: center ;`,
        "justify": styled.css `text-align: justify ;`,
    }
});
