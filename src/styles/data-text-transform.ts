import styled, { createSet } from "../styled";

styled.add({
    "data-text-transform": createSet("text-transform", [
        "none", "capitalize", "uppercase", "lowercase", "full-width", "full-size-kana",
        "inherit", "initial", "revert", "revert-layer", "unset"
    ])
}, "high");
