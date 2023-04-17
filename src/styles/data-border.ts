import styled from "../styled";
import vars from "../vars";

styled.add({

    "data-border": {
        "*": styled.css `border: attr(data-border);`,
        "none": styled.css `border: none;`,
        "frame": styled.css `
            border: solid 1px;
            border-color: ${vars.borderColor};
            padding: ${vars.spacing};
            border-radius: ${vars.spacing};
        `,
        "accent-frame": styled.css `
            border: solid 1px;
            border-color: ${vars.accentBgColor};
            padding: ${vars.spacing};
            border-radius: ${vars.spacing};
        `
    },
    "data-border-style": {
        "*": styled.css `border-style: attr(data-border-style) ;`,
        "solid": styled.css `border-style: solid ;`,
        "dashed": styled.css `border-style: dashed ;`,
        "dotted": styled.css `border-style: dotted ;`,
        "double": styled.css `border-style: double ;`,
        "groove": styled.css `border-style: groove ;`,
        "inset": styled.css `border-style: inset ;`,
        "none": styled.css `border-style: none ;`,
        "outset": styled.css `border-style: outset ;`,
        "ridge": styled.css `border-style: ridge ;`,
    },

    "data-border-width": {
        "*": styled.css `border-width: attr(data-border-width) ;`,
        "thin": styled.css `border-width: ${vars.thin} ;`,
        "thick": styled.css `border-width: ${vars.thick} ;`,
        "thinner": styled.css `border-width: ${vars.thinner} ;`,
        "thicker": styled.css `border-width: ${vars.thicker} ;`,
        "thinnest": styled.css `border-width: ${vars.thinnest} ;`,
        "thickest": styled.css `border-width: ${vars.thickest} ;`,
    },

    "data-border-color": {
        "*": styled.css `border-color: attr(data-border-color) ;`,
        "accent": styled.css `border-color: ${vars.accentBgColor} ;`,
    },
    
    "data-border-radius": {
        "*": styled.css `border-radius: attr(data-border-radius) ;`,
        "full": styled.css `border-radius: 9999px ;`,
    },

    "data-border-left-style": {
        "*": styled.css `border-left-style: attr(data-border-left-style) ;`,
        "solid": styled.css `border-left-style: solid ;`,
        "dashed": styled.css `border-left-style: dashed ;`,
        "dotted": styled.css `border-left-style: dotted ;`,
        "double": styled.css `border-left-style: double ;`,
        "groove": styled.css `border-left-style: groove ;`,
        "inset": styled.css `border-left-style: inset ;`,
        "none": styled.css `border-left-style: none ;`,
        "outset": styled.css `border-left-style: outset ;`,
        "ridge": styled.css `border-left-style: ridge ;`,
    },

    "data-border-left-width": {
        "*": styled.css `border-left-width: attr(data-border-left-width) ;`,
        "thin": styled.css `border-left-width: ${vars.thin} ;`,
        "thick": styled.css `border-left-width: ${vars.thick} ;`,
        "thinner": styled.css `border-left-width: ${vars.thinner} ;`,
        "thicker": styled.css `border-left-width: ${vars.thicker} ;`,
        "thinnest": styled.css `border-left-width: ${vars.thinnest} ;`,
        "thickest": styled.css `border-left-width: ${vars.thickest} ;`,
    },

    "data-border-left-color": {
        "*": styled.css `border-left-color: attr(data-border-left-color) ;`,
        "accent": styled.css `border-left-color: ${vars.accentBgColor} ;`,
    },    

    "data-border-right-style": {
        "*": styled.css `border-right-style: attr(data-border-right-style) ;`,
        "solid": styled.css `border-right-style: solid ;`,
        "dashed": styled.css `border-right-style: dashed ;`,
        "dotted": styled.css `border-right-style: dotted ;`,
        "double": styled.css `border-right-style: double ;`,
        "groove": styled.css `border-right-style: groove ;`,
        "inset": styled.css `border-right-style: inset ;`,
        "none": styled.css `border-right-style: none ;`,
        "outset": styled.css `border-right-style: outset ;`,
        "ridge": styled.css `border-right-style: ridge ;`,
    },

    "data-border-right-width": {
        "*": styled.css `border-right-width: attr(data-border-right-width) ;`,
        "thin": styled.css `border-right-width: ${vars.thin} ;`,
        "thick": styled.css `border-right-width: ${vars.thick} ;`,
        "thinner": styled.css `border-right-width: ${vars.thinner} ;`,
        "thicker": styled.css `border-right-width: ${vars.thicker} ;`,
        "thinnest": styled.css `border-right-width: ${vars.thinnest} ;`,
        "thickest": styled.css `border-right-width: ${vars.thickest} ;`,
    },

    "data-border-right-color": {
        "*": styled.css `border-right-color: attr(data-border-right-color) ;`,
        "accent": styled.css `border-right-color: ${vars.accentBgColor} ;`,
    },
    "data-border-top-style": {
        "*": styled.css `border-top-style: attr(data-border-top-style) ;`,
        "solid": styled.css `border-top-style: solid ;`,
        "dashed": styled.css `border-top-style: dashed ;`,
        "dotted": styled.css `border-top-style: dotted ;`,
        "double": styled.css `border-top-style: double ;`,
        "groove": styled.css `border-top-style: groove ;`,
        "inset": styled.css `border-top-style: inset ;`,
        "none": styled.css `border-top-style: none ;`,
        "outset": styled.css `border-top-style: outset ;`,
        "ridge": styled.css `border-top-style: ridge ;`,
    },

    "data-border-top-width": {
        "*": styled.css `border-top-width: attr(data-border-top-width) ;`,
        "thin": styled.css `border-top-width: ${vars.thin} ;`,
        "thick": styled.css `border-top-width: ${vars.thick} ;`,
        "thinner": styled.css `border-top-width: ${vars.thinner} ;`,
        "thicker": styled.css `border-top-width: ${vars.thicker} ;`,
        "thinnest": styled.css `border-top-width: ${vars.thinnest} ;`,
        "thickest": styled.css `border-top-width: ${vars.thickest} ;`,
    },

    "data-border-top-color": {
        "*": styled.css `border-top-color: attr(data-border-top-color) ;`,
        "accent": styled.css `border-top-color: ${vars.accentBgColor} ;`,
    },    

    "data-border-bottom-style": {
        "*": styled.css `border-bottom-style: attr(data-border-bottom-style) ;`,
        "solid": styled.css `border-bottom-style: solid ;`,
        "dashed": styled.css `border-bottom-style: dashed ;`,
        "dotted": styled.css `border-bottom-style: dotted ;`,
        "double": styled.css `border-bottom-style: double ;`,
        "groove": styled.css `border-bottom-style: groove ;`,
        "inset": styled.css `border-bottom-style: inset ;`,
        "none": styled.css `border-bottom-style: none ;`,
        "outset": styled.css `border-bottom-style: outset ;`,
        "ridge": styled.css `border-bottom-style: ridge ;`,
    },

    "data-border-bottom-width": {
        "*": styled.css `border-bottom-width: attr(data-border-bottom-width) ;`,
        "thin": styled.css `border-bottom-width: ${vars.thin} ;`,
        "thick": styled.css `border-bottom-width: ${vars.thick} ;`,
        "thinner": styled.css `border-bottom-width: ${vars.thinner} ;`,
        "thicker": styled.css `border-bottom-width: ${vars.thicker} ;`,
        "thinnest": styled.css `border-bottom-width: ${vars.thinnest} ;`,
        "thickest": styled.css `border-bottom-width: ${vars.thickest} ;`,
    },

    "data-border-bottom-color": {
        "*": styled.css `border-bottom-color: attr(data-border-bottom-color) ;`,
        "accent": styled.css `border-bottom-color: ${vars.accentBgColor} ;`,
    },    

    "data-border-top-left-radius": {
        "*": styled.css `border-top-left-radius: attr(data-border-top-left-radius) ;`,
        "full": styled.css `border-top-left-radius: 9999px ;`,
    },

    "data-border-bottom-left-radius": {
        "*": styled.css `border-bottom-left-radius: attr(border-bottom-left-radius) ;`,
        "full": styled.css `border-bottom-left-radius: 9999px ;`,
    },

    "data-border-top-right-radius": {
        "*": styled.css `border-top-right-radius: attr(data-border-top-right-radius) ;`,
        "full": styled.css `border-top-right-radius: 9999px ;`,
    },

    "data-border-bottom-right-radius": {
        "*": styled.css `border-bottom-right-radius: attr(border-bottom-right-radius) ;`,
        "full": styled.css `border-bottom-right-radius: 9999px ;`,
    },

});