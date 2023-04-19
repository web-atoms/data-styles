import styled, { createSet, pair } from "../styled";

styled.add({
    "data-align-content": {
        ... createSet("align-content",
                [
                    "center", "start" , "end" , "flex-start", "flex-end", "normal", "baseline",
                    "space-between", "space-around", "space-evenly", "stretch", "inherit", "initial",
                    "revert", "revert-layer", "unset",
                    pair("safe-center", "safe center"),
                    pair("unsafe-center", "unsafe center"),
                    pair("first-baseline", "first baseline"),
                    pair("last-baseline", "last baseline"),
                ])
    },
    "data-align-items": {
        ... createSet("align-items", [
            "normal", "stretch", "center", "start", "end",
            "flex-start", "flex-end", "self-start", "self-end",
            "baseline", pair("first baseline"), pair("last baseline"), pair("safe center"), pair("unsafe center"),
            "inherit", "initial", "revert", "revert-layer", "unset"
        ])
    },
    "data-align-self": {
        ... createSet("align-self", [
            "normal", "auto", "center", "start", "end", "self-start", "self-end", "flex-start", "flex-end",
            "baseline", pair("first baseline"), pair("last baseline"), "stretch",
            pair("safe center"), pair("unsafe center"),
            "inherit", "initial", "revert", "revert-layer", "unset"
        ])
    },
    "data-justify-content": {
        ... createSet("justify-content", [
            "center", "start", "end", "flex-start", "flex-end", "left", "right",
            "normal", "space-between", "space-around", "space-evenly", "stretch",
            pair("safe center"), pair("unsafe center"), 
            "inherit", "initial", "revert", "revert-layer", "unset"
        ])
    },
    "data-justify-items": {
        ... createSet("justify-items", [
            "normal","stretch", "center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "left", "right",
            "baseline", pair("first baseline"), pair("last baseline"),
            pair("safe center"), pair("unsafe center"),
            pair("legacy right"), pair("legacy left"), pair("legacy center"),
            "inherit", "initial", "revert", "revert-layer", "unset"
        ])
    },
    "data-justify-self": {
        ... createSet(
            "justify-self",
            [
                "auto", "normal", "stretch",
                "center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "left", "right",
                "baseline", pair("first baseline"), pair("last baseline"),
                pair("safe center"), pair("unsafe center"),
                "inherit", "initial", "revert", "revert-layer", "unset"
            ]
        )
    }
});
