import styled from "../styled";
import vars from "../vars";

styled.add({

    "data-position": {
        "sticky": styled.css `
            position: sticky;
        `,
        "sticky-top": styled.css `
            position: sticky;
            top: ${vars.spacing};
        `,
        "sticky-bottom": styled.css `
            position: sticky;
            bottom: ${vars.spacing};
        `,
        "static": styled.css `
            position: static;
        `,
        "absolute": styled.css `
            position: absolute;
        `,
        "absolute-fill": styled.css `
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        `,
        "relative": styled.css `
            position: relative;
        `,
}

}, "high");
