import styled from "../styled";

styled.add({
    "data-flex": {
        "*": styled.css `flex: attr(data-flex) ;`,
        "stretch-full": styled.css `flex: 1 1 100% ;`,
        "stretch-half": styled.css `flex: 1 1 50% ;`,
        "stretch-quarter": styled.css `flex: 1 1 25% ;`,
        "stretch-three-fourth": styled.css `flex: 1 1 75% ;`,
    }
});
