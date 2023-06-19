import styled, { createSet, pair } from "../styled";
import vars from "../vars";

const common = [
    pair("medium", vars.spacingMedium),
    pair("large", vars.spacingLarge),
    pair("small", vars.spacingSmall),
    pair("none", "0")
];

const padding = () => createSet("padding",
    [
        pair("auto", vars.spacing),
        ... common
    ], true);

const margin = () => createSet("margin",
    [
        pair("auto", "auto"),
        pair("default", vars.spacing),
        ... common
    ], true);

    styled.add({
    "data-padding": padding(),
    "data-padding-left": padding(),
    "data-padding-right": padding(),
    "data-padding-top": padding(),
    "data-padding-bottom": padding(),
    "data-margin": margin(),
    "data-margin-left": margin(),
    "data-margin-right": margin(),
    "data-margin-top": margin(),
    "data-margin-bottom": margin(),
}, "high");
