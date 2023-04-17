import styled from "../styled";
import vars from "../vars";

styled.add({

    "data-border": {
        "*": styled.css `border: attr(data-border);`,
        "none": styled.css `border: none;`,
        "frame": styled.css `
            border: solid 1px;
            border-color: ${vars.accentBgColor};
            padding: ${vars.spacing};
            border-radius: ${vars.spacing};
        `
    },
    "data-border-style": {
        "*": styled.css `border-style: attr(data-border-style) !important;`,
        "solid": styled.css `border-style: solid !important;`,
        "dashed": styled.css `border-style: dashed !important;`,
        "dotted": styled.css `border-style: dotted !important;`,
        "double": styled.css `border-style: double !important;`,
        "groove": styled.css `border-style: groove !important;`,
        "inset": styled.css `border-style: inset !important;`,
        "none": styled.css `border-style: none !important;`,
        "outset": styled.css `border-style: outset !important;`,
        "ridge": styled.css `border-style: ridge !important;`,
    },

    "data-border-width": {
        "*": styled.css `border-width: attr(data-border-width) !important;`,
        "thin": styled.css `border-width: ${vars.thin} !important;`,
        "thick": styled.css `border-width: ${vars.thick} !important;`,
        "thinner": styled.css `border-width: ${vars.thinner} !important;`,
        "thicker": styled.css `border-width: ${vars.thicker} !important;`,
        "thinnest": styled.css `border-width: ${vars.thinnest} !important;`,
        "thickest": styled.css `border-width: ${vars.thickest} !important;`,
    },

    "data-border-color": {
        "*": styled.css `border-color: attr(data-border-color) !important;`,
        "accent": styled.css `border-color: ${vars.accentBgColor} !important;`,
    },
    
    "data-border-radius": {
        "*": styled.css `border-radius: attr(data-border-radius) !important;`,
        "full": styled.css `border-radius: 9999px !important;`,
    },

    "data-border-left-style": {
        "*": styled.css `border-left-style: attr(data-border-left-style) !important;`,
        "solid": styled.css `border-left-style: solid !important;`,
        "dashed": styled.css `border-left-style: dashed !important;`,
        "dotted": styled.css `border-left-style: dotted !important;`,
        "double": styled.css `border-left-style: double !important;`,
        "groove": styled.css `border-left-style: groove !important;`,
        "inset": styled.css `border-left-style: inset !important;`,
        "none": styled.css `border-left-style: none !important;`,
        "outset": styled.css `border-left-style: outset !important;`,
        "ridge": styled.css `border-left-style: ridge !important;`,
    },

    "data-border-left-width": {
        "*": styled.css `border-left-width: attr(data-border-left-width) !important;`,
        "thin": styled.css `border-left-width: ${vars.thin} !important;`,
        "thick": styled.css `border-left-width: ${vars.thick} !important;`,
        "thinner": styled.css `border-left-width: ${vars.thinner} !important;`,
        "thicker": styled.css `border-left-width: ${vars.thicker} !important;`,
        "thinnest": styled.css `border-left-width: ${vars.thinnest} !important;`,
        "thickest": styled.css `border-left-width: ${vars.thickest} !important;`,
    },

    "data-border-left-color": {
        "*": styled.css `border-left-color: attr(data-border-left-color) !important;`,
        "accent": styled.css `border-left-color: ${vars.accentBgColor} !important;`,
    },    

    "data-border-right-style": {
        "*": styled.css `border-right-style: attr(data-border-right-style) !important;`,
        "solid": styled.css `border-right-style: solid !important;`,
        "dashed": styled.css `border-right-style: dashed !important;`,
        "dotted": styled.css `border-right-style: dotted !important;`,
        "double": styled.css `border-right-style: double !important;`,
        "groove": styled.css `border-right-style: groove !important;`,
        "inset": styled.css `border-right-style: inset !important;`,
        "none": styled.css `border-right-style: none !important;`,
        "outset": styled.css `border-right-style: outset !important;`,
        "ridge": styled.css `border-right-style: ridge !important;`,
    },

    "data-border-right-width": {
        "*": styled.css `border-right-width: attr(data-border-right-width) !important;`,
        "thin": styled.css `border-right-width: ${vars.thin} !important;`,
        "thick": styled.css `border-right-width: ${vars.thick} !important;`,
        "thinner": styled.css `border-right-width: ${vars.thinner} !important;`,
        "thicker": styled.css `border-right-width: ${vars.thicker} !important;`,
        "thinnest": styled.css `border-right-width: ${vars.thinnest} !important;`,
        "thickest": styled.css `border-right-width: ${vars.thickest} !important;`,
    },

    "data-border-right-color": {
        "*": styled.css `border-right-color: attr(data-border-right-color) !important;`,
        "accent": styled.css `border-right-color: ${vars.accentBgColor} !important;`,
    },
    "data-border-top-style": {
        "*": styled.css `border-top-style: attr(data-border-top-style) !important;`,
        "solid": styled.css `border-top-style: solid !important;`,
        "dashed": styled.css `border-top-style: dashed !important;`,
        "dotted": styled.css `border-top-style: dotted !important;`,
        "double": styled.css `border-top-style: double !important;`,
        "groove": styled.css `border-top-style: groove !important;`,
        "inset": styled.css `border-top-style: inset !important;`,
        "none": styled.css `border-top-style: none !important;`,
        "outset": styled.css `border-top-style: outset !important;`,
        "ridge": styled.css `border-top-style: ridge !important;`,
    },

    "data-border-top-width": {
        "*": styled.css `border-top-width: attr(data-border-top-width) !important;`,
        "thin": styled.css `border-top-width: ${vars.thin} !important;`,
        "thick": styled.css `border-top-width: ${vars.thick} !important;`,
        "thinner": styled.css `border-top-width: ${vars.thinner} !important;`,
        "thicker": styled.css `border-top-width: ${vars.thicker} !important;`,
        "thinnest": styled.css `border-top-width: ${vars.thinnest} !important;`,
        "thickest": styled.css `border-top-width: ${vars.thickest} !important;`,
    },

    "data-border-top-color": {
        "*": styled.css `border-top-color: attr(data-border-top-color) !important;`,
        "accent": styled.css `border-top-color: ${vars.accentBgColor} !important;`,
    },    

    "data-border-bottom-style": {
        "*": styled.css `border-bottom-style: attr(data-border-bottom-style) !important;`,
        "solid": styled.css `border-bottom-style: solid !important;`,
        "dashed": styled.css `border-bottom-style: dashed !important;`,
        "dotted": styled.css `border-bottom-style: dotted !important;`,
        "double": styled.css `border-bottom-style: double !important;`,
        "groove": styled.css `border-bottom-style: groove !important;`,
        "inset": styled.css `border-bottom-style: inset !important;`,
        "none": styled.css `border-bottom-style: none !important;`,
        "outset": styled.css `border-bottom-style: outset !important;`,
        "ridge": styled.css `border-bottom-style: ridge !important;`,
    },

    "data-border-bottom-width": {
        "*": styled.css `border-bottom-width: attr(data-border-bottom-width) !important;`,
        "thin": styled.css `border-bottom-width: ${vars.thin} !important;`,
        "thick": styled.css `border-bottom-width: ${vars.thick} !important;`,
        "thinner": styled.css `border-bottom-width: ${vars.thinner} !important;`,
        "thicker": styled.css `border-bottom-width: ${vars.thicker} !important;`,
        "thinnest": styled.css `border-bottom-width: ${vars.thinnest} !important;`,
        "thickest": styled.css `border-bottom-width: ${vars.thickest} !important;`,
    },

    "data-border-bottom-color": {
        "*": styled.css `border-bottom-color: attr(data-border-bottom-color) !important;`,
        "accent": styled.css `border-bottom-color: ${vars.accentBgColor} !important;`,
    },    

    "data-border-top-left-radius": {
        "*": styled.css `border-top-left-radius: attr(data-border-top-left-radius) !important;`,
        "full": styled.css `border-top-left-radius: 9999px !important;`,
    },

    "data-border-bottom-left-radius": {
        "*": styled.css `border-bottom-left-radius: attr(border-bottom-left-radius) !important;`,
        "full": styled.css `border-bottom-left-radius: 9999px !important;`,
    },

    "data-border-top-right-radius": {
        "*": styled.css `border-top-right-radius: attr(data-border-top-right-radius) !important;`,
        "full": styled.css `border-top-right-radius: 9999px !important;`,
    },

    "data-border-bottom-right-radius": {
        "*": styled.css `border-bottom-right-radius: attr(border-bottom-right-radius) !important;`,
        "full": styled.css `border-bottom-right-radius: 9999px !important;`,
    },

});