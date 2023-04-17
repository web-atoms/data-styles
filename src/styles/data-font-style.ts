import styled from "../styled"

styled.add({
    "data-font-style": {
        "*": styled.css `font-weight: attr(data-font-style) ;`,
        "italic": styled.css `font-style: italic ;`,
        "normal": styled.css `font-style: normal ;`,
        "oblique": styled.css `font-style: oblique ;`,
    }
});
