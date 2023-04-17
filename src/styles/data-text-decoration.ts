import styled from "../styled";

styled.add({
    "data-text-decoration": {
        "*": styled.css `text-decoration: attr(data-text-decoration) !important;`,
        "underline": styled.css `text-decoration: underline !important;`,
        "overline": styled.css `text-decoration: overline !important;`,
        "strike-through": styled.css `text-decoration: line-through !important;`,
        "line-through": styled.css `text-decoration: line-through !important;`,
        "wavy": styled.css `text-decoration: wavy !important;`,
    }
});
