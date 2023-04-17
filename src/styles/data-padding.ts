import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-padding": {
        "*": styled.css `padding: attr(data-padding) ;`,
        "auto": styled.css `padding: ${vars.spacing} ;`,
        "medium": styled.css `padding: ${vars.spacingMedium} ;`,
        "large": styled.css `padding: ${vars.spacingLarge} ;`,
    },
    "data-padding-left": {
        "*": styled.css `padding-left: attr(data-padding-left) ;`,
        "auto": styled.css `padding-left: ${vars.spacing} ;`,
        "medium": styled.css `padding-left: ${vars.spacingMedium} ;`,
        "large": styled.css `padding-left: ${vars.spacingLarge} ;`,
    },
    "data-padding-right": {
        "*": styled.css `padding-right: attr(data-padding-right) ;`,
        "auto": styled.css `padding-right: ${vars.spacing} ;`,
        "medium": styled.css `padding-right: ${vars.spacingMedium} ;`,
        "large": styled.css `padding-right: ${vars.spacingLarge} ;`,
    },
    "data-padding-top": {
        "*": styled.css `padding-top: attr(data-padding-top) ;`,
        "auto": styled.css `padding-top: ${vars.spacing} ;`,
        "medium": styled.css `padding-top: ${vars.spacingMedium} ;`,
        "large": styled.css `padding-top: ${vars.spacingLarge} ;`,
    },
    "data-padding-bottom": {
        "*": styled.css `padding-bottom: attr(data-padding-bottom) ;`,
        "auto": styled.css `padding-bottom: ${vars.spacing} ;`,
        "medium": styled.css `padding-bottom: ${vars.spacingMedium} ;`,
        "large": styled.css `padding-bottom: ${vars.spacingLarge} ;`,
    },
    "data-margin": {
        "*": styled.css `margin: attr(data-margin) ;`,
        "auto": styled.css `margin: ${vars.spacing} ;`,
        "medium": styled.css `margin: ${vars.spacingMedium} ;`,
        "large": styled.css `margin: ${vars.spacingLarge} ;`,
    },
    "data-margin-left": {
        "*": styled.css `margin-left: attr(data-margin-left) ;`,
        "auto": styled.css `margin-left: ${vars.spacing} ;`,
        "medium": styled.css `margin-left: ${vars.spacingMedium} ;`,
        "large": styled.css `margin-left: ${vars.spacingLarge} ;`,
    },
    "data-margin-right": {
        "*": styled.css `margin-right: attr(data-margin-right) ;`,
        "auto": styled.css `margin-right: ${vars.spacing} ;`,
        "medium": styled.css `margin-right: ${vars.spacingMedium} ;`,
        "large": styled.css `margin-right: ${vars.spacingLarge} ;`,
    },
    "data-margin-top": {
        "*": styled.css `margin-top: attr(data-margin-top) ;`,
        "auto": styled.css `margin-top: ${vars.spacing} ;`,
        "medium": styled.css `margin-top: ${vars.spacingMedium} ;`,
        "large": styled.css `margin-top: ${vars.spacingLarge} ;`,
    },
    "data-margin-bottom": {
        "*": styled.css `margin-bottom: attr(data-margin-bottom) ;`,
        "auto": styled.css `margin-bottom: ${vars.spacing} ;`,
        "medium": styled.css `margin-bottom: ${vars.spacingMedium} ;`,
        "large": styled.css `margin-bottom: ${vars.spacingLarge} ;`,
    },
});
