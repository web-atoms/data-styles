import styled from "../styled";

styled.add({
    "data-fade": {
        "bottom": styled.css `
            position: relative !important;
        `.and(":after", styled.css `
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom : 0;
            content: "";
            margin: 10;
            pointer-events: none;
            background: linear-gradient(to top, rgba(255,255,255, 1) 1px, rgba(255,255,255, 0) 16px );
        `),
    }
});
