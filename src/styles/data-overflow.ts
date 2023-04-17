import styled from "../styled";

styled.add({
    "data-overflow": {
        "*": styled.css `overflow: attr(data-overflow);`,
        "hidden": styled.css `overflow: hidden;`,
        "auto": styled.css `overflow: auto;`,
        "scroll": styled.css `overflow: scroll;`,
        "visible": styled.css `overflow: visible;`,
    },
    "data-overflow-x": {
        "*": styled.css `overflow-x: attr(data-overflow-x);`,
        "hidden": styled.css `overflow-x: hidden;`,
        "auto": styled.css `overflow-x: auto;`,
        "scroll": styled.css `overflow-x: scroll;`,
        "visible": styled.css `overflow-x: visible;`,
    },
    "data-overflow-y": {
        "*": styled.css `overflow-y: attr(data-overflow-y);`,
        "hidden": styled.css `overflow-y: hidden;`,
        "auto": styled.css `overflow-y: auto;`,
        "scroll": styled.css `overflow-y: scroll;`,
        "visible": styled.css `overflow-y: visible;`,
    }
});
