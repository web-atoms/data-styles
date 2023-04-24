import styled, { createSet } from "../styled";

styled.add({
    "data-text-decoration": {
        ... createSet("text-decoration", ["underline", "overline", "strike-through", "line-through", "wavy", "none"])
    }
});
