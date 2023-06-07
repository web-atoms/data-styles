import styled from "../../styled";
import vars from "../../vars";

styled.add({
    "data-filter": {
        "drop-shadow": styled.css `filter: drop-shadow(2px 4px 6px black);`,
        "drop-shadow-white": styled.css `filter: drop-shadow(2px 4px 6px white);`,
        "drop-shadow-accent": styled.css `filter: drop-shadow(2px 4px 6px ${vars.accentColor});`,
    }
}, "normal");