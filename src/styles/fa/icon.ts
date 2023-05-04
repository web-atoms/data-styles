import styled from "../../styled";

styled.add({
    "data-fa-font": {
        "regular": styled.css `
            &::before {
                font: var(--fa-font-regular);
                font-size: medium;
                content: attr(data-icon);
            }
            &:not([data-color])::before {
                color: var(--accent-color);
            }
        `,
        "regular-end": styled.css `
            &::after {
                font: var(--fa-font-regular);
                font-size: medium;
                content: attr(data-icon);
            }
            &:not([data-color])::after {
                color: var(--accent-color);
            }
        `,
        "solid": styled.css `
            &::before {
                font: var(--fa-font-solid);
                font-size: medium;
                content: attr(data-icon);
            }
            &:not([data-color])::before {
                color: var(--accent-color);
            }
        `,
        "solid-end": styled.css `
            &::after {
                font: var(--fa-font-solid);
                font-size: medium;
                content: attr(data-icon);
            }
            &:not([data-color])::after {
                color: var(--accent-color);
            }
        `,
        "brand": styled.css `
            &::before {
                font: var(--fa-font-brand);
                font-size: medium;
                content: attr(data-icon);
            }
            &:not([data-color])::before {
                color: var(--accent-color);
            }
        `,
        "brand-end": styled.css `
            &::after {
                font: var(--fa-font-brand);
                font-size: medium;
                content: attr(data-icon);
            }
            &:not([data-color])::after {
                color: var(--accent-color);
            }
        `,
        "sharp": styled.css `
            &::before {
                font: var(--fa-font-sharp);
                font-size: medium;
                content: attr(data-icon);
            }
            &:not([data-color])::before {
                color: var(--accent-color);
            }
        `,
        "sharp-end": styled.css `
            &::after {
                font: var(--fa-font-sharp);
                font-size: medium;
                content: attr(data-icon);
            }
            &:not([data-color])::after {
                color: var(--accent-color);
            }
        `,

}
});