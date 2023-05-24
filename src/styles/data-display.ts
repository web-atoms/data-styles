import styled from "../styled";

styled.add({
    "data-display": {
        "*": styled.css `color: attr(data-display) ;`,
        "flex": styled.css `display: flex ;`,
        "grid": styled.css `display: grid ;`,
        "inline-grid": styled.css `display: inline-grid ;`,
        "inline-flex": styled.css `display: inline-flex ;`,
        "vertical-flex": styled.css `
            display: flex ;
            flex-direction: column;
        `,
        "none": styled.css `display: none;`
    }
});
