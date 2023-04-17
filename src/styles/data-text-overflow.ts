import styled from "../styled";

styled.add({
    "data-text-overflow": {
        "*": styled.css `text-overflow: attr(data-text-overflow) ;`,
        "ellipsis": styled.css `
            text-overflow: ellipsis ;
            min-width: 0;
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
        `
    }
});
