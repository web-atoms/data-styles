import styled from "../styled";

styled.add({
    "data-flex": {
        "*": styled.css `flex: attr(data-flex) !important;`,
        "stretch-full": styled.css `flex: 1 1 100% !important;`,
        "stretch-half": styled.css `flex: 1 1 50% !important;`,
        "stretch-quarter": styled.css `flex: 1 1 25% !important;`,
        "stretch-three-fourth": styled.css `flex: 1 1 75% !important;`,
    }
});
