import styled from "../styled";

styled.add({
    "data-text-decoration": {
        "*": styled.css `text-decoration: attr(data-text-decoration) ;`,
        "underline": styled.css `text-decoration: underline ;`,
        "overline": styled.css `text-decoration: overline ;`,
        "strike-through": styled.css `text-decoration: line-through ;`,
        "line-through": styled.css `text-decoration: line-through ;`,
        "wavy": styled.css `text-decoration: wavy ;`,
    }
});
