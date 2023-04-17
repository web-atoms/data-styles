import styled from "../styled";
import vars from "../vars";

styled.add({
    "data-padding": {
        "*": styled.css `padding: attr(data-padding) !important;`,
        "auto": styled.css `padding: ${vars.spacing} !important;`,
        "medium": styled.css `padding: ${vars.spacingMedium} !important;`,
        "large": styled.css `padding: ${vars.spacingLarge} !important;`,
    },
    "data-padding-left": {
        "*": styled.css `padding-left: attr(data-padding-left) !important;`,
        "auto": styled.css `padding-left: ${vars.spacing} !important;`,
        "medium": styled.css `padding-left: ${vars.spacingMedium} !important;`,
        "large": styled.css `padding-left: ${vars.spacingLarge} !important;`,
    },
    "data-padding-right": {
        "*": styled.css `padding-right: attr(data-padding-right) !important;`,
        "auto": styled.css `padding-right: ${vars.spacing} !important;`,
        "medium": styled.css `padding-right: ${vars.spacingMedium} !important;`,
        "large": styled.css `padding-right: ${vars.spacingLarge} !important;`,
    },
    "data-padding-top": {
        "*": styled.css `padding-top: attr(data-padding-top) !important;`,
        "auto": styled.css `padding-top: ${vars.spacing} !important;`,
        "medium": styled.css `padding-top: ${vars.spacingMedium} !important;`,
        "large": styled.css `padding-top: ${vars.spacingLarge} !important;`,
    },
    "data-padding-bottom": {
        "*": styled.css `padding-bottom: attr(data-padding-bottom) !important;`,
        "auto": styled.css `padding-bottom: ${vars.spacing} !important;`,
        "medium": styled.css `padding-bottom: ${vars.spacingMedium} !important;`,
        "large": styled.css `padding-bottom: ${vars.spacingLarge} !important;`,
    },
    "data-margin": {
        "*": styled.css `margin: attr(data-margin) !important;`,
        "auto": styled.css `margin: ${vars.spacing} !important;`,
        "medium": styled.css `margin: ${vars.spacingMedium} !important;`,
        "large": styled.css `margin: ${vars.spacingLarge} !important;`,
    },
    "data-margin-left": {
        "*": styled.css `margin-left: attr(data-margin-left) !important;`,
        "auto": styled.css `margin-left: ${vars.spacing} !important;`,
        "medium": styled.css `margin-left: ${vars.spacingMedium} !important;`,
        "large": styled.css `margin-left: ${vars.spacingLarge} !important;`,
    },
    "data-margin-right": {
        "*": styled.css `margin-right: attr(data-margin-right) !important;`,
        "auto": styled.css `margin-right: ${vars.spacing} !important;`,
        "medium": styled.css `margin-right: ${vars.spacingMedium} !important;`,
        "large": styled.css `margin-right: ${vars.spacingLarge} !important;`,
    },
    "data-margin-top": {
        "*": styled.css `margin-top: attr(data-margin-top) !important;`,
        "auto": styled.css `margin-top: ${vars.spacing} !important;`,
        "medium": styled.css `margin-top: ${vars.spacingMedium} !important;`,
        "large": styled.css `margin-top: ${vars.spacingLarge} !important;`,
    },
    "data-margin-bottom": {
        "*": styled.css `margin-bottom: attr(data-margin-bottom) !important;`,
        "auto": styled.css `margin-bottom: ${vars.spacing} !important;`,
        "medium": styled.css `margin-bottom: ${vars.spacingMedium} !important;`,
        "large": styled.css `margin-bottom: ${vars.spacingLarge} !important;`,
    },
});
