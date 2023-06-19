import styled, { createSet, pair } from "../styled";
import vars from "../vars";

const common = [
    pair("medium", vars.spacingMedium),
    pair("large", vars.spacingLarge),
    pair("small", vars.spacingSmall),
    pair("none", "0")
];

const padding = (key) => createSet(key,
    [
        pair("auto", vars.spacing),
        ... common
    ], true);

const margin = (key) => createSet(key,
    [
        pair("auto", "auto"),
        pair("default", vars.spacing),
        ... common
    ], true);

    styled.add({
    "data-padding": padding("padding"),
    "data-padding-left": padding("padding-left"),
    "data-padding-right": padding("padding-right"),
    "data-padding-top": padding("padding-top"),
    "data-padding-bottom": padding("padding-bottom"),
    "data-margin": margin("margin"),
    "data-margin-left": margin("margin-left"),
    "data-margin-right": margin("margin-right"),
    "data-margin-top": margin("margin-top"),
    "data-margin-bottom": margin("margin-bottom"),
}, "high");
