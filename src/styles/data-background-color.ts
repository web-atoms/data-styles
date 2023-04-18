import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-background-color": {
        "*": styled.css `color: attr(data-background-color) ;`,
        "red": styled.css `color: red ;`,
        "blue": styled.css `color: blue ;`,
        "green": styled.css `color: green ;`,
        "lightgreen": styled.css `color: lightgreen ;`,
        "lightyellow": styled.css `color: lightyellow ;`,
        "gold": styled.css `color: gold ;`,
        "goldenrod": styled.css `color: goldenrod ;`,
        "fuchsia": styled.css `color: fuchsia ;`,
        "black": styled.css `color: black ;`,
        "white": styled.css `color: white ;`,
        "accent": styled.css `color: ${vars.accentColor} ;`,
    }
});