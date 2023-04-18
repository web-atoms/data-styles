import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-background-color": {
        "*": styled.css `background-color: attr(data-background-color) ;`,
        "red": styled.css `background-color: red ;`,
        "blue": styled.css `background-color: blue ;`,
        "green": styled.css `background-color: green ;`,
        "lightgreen": styled.css `background-color: lightgreen ;`,
        "lightyellow": styled.css `background-color: lightyellow ;`,
        "gold": styled.css `background-color: gold ;`,
        "goldenrod": styled.css `background-color: goldenrod ;`,
        "fuchsia": styled.css `background-color: fuchsia ;`,
        "black": styled.css `background-color: black ;`,
        "white": styled.css `background-color: white ;`,
        "accent": styled.css `background-color: ${vars.accentColor} ;`,
    }
});