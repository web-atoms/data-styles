import styled, { createSet, pair } from "../styled";
import vars from "../vars";

const spacing = (name) => createSet(name,
    [
        pair("default", vars.spacing),
        pair("medium", vars.spacingMedium),
        pair("large", vars.spacingLarge),
        pair("small", vars.spacingSmall),
        pair("none", "0")
    ], true);

styled.add({
    "data-padding": spacing("padding"),
    "data-padding-left": spacing("padding"),
    "data-padding-right": spacing("padding"),
    "data-padding-top": spacing("padding"),
    "data-padding-bottom": spacing("padding"),
    "data-margin": spacing("margin"),
    "data-margin-left": spacing("margin"),
    "data-margin-right": spacing("margin"),
    "data-margin-top": spacing("margin"),
    "data-margin-bottom": spacing("margin"),
}, "high");
