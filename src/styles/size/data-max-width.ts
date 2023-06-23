import styled from "../../styled";
import vars from "../../vars";

const screen = {
    small: "640px",
    medium: "768px",
    large: "1024px",
    "xl": "1280px",
    "2xl": "1536px"
};

const sizes = {
    "xs": "20rem",
    small: "24rem",
    medium: "28rem",
    large: "32rem",
    "xl": "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full : "100%",
    prose: "65ch",
}

const prepare = (size, field, prefix) => {
    const r = {};
    for (const key in size) {
        if (Object.prototype.hasOwnProperty.call(size, key)) {
            const element = size[key];
            
            const pk = prefix + key;
            r[pk] = styled.css `${field}: ${element};`
        }
    }
    return r;
};

styled.add({
    "data-max-width": {
        ... prepare(sizes, "max-width", "size-"),
        ... prepare(screen, "max-width", "screen-"),
        "min-content": styled.css `max-width: min-content;`,
        "max-content": styled.css `max-width: max-content;`,
        "fit-content": styled.css `max-width: fit-content;`,
    },
    "data-min-width": {
        ... prepare(sizes, "min-width", "size-"),
        ... prepare(screen, "min-width", "screen-"),
        "min-content": styled.css `min-width: min-content;`,
        "max-content": styled.css `min-width: max-content;`,
        "fit-content": styled.css `min-width: fit-content;`,
    },
    "data-width": {
        ... prepare(sizes, "width", "size-"),
        ... prepare(screen, "width", "screen-"),
        "min-content": styled.css `width: min-content;`,
        "max-content": styled.css `width: max-content;`,
        "fit-content": styled.css `width: fit-content;`,
        "auto": styled.css `width: auto;`,
        "50%": styled.css `width: 50%;`,
        "1/3": styled.css `width: 33.333333%;`,
        "2/3": styled.css `width: 66.666667%;`,
        "1/6": styled.css `width: 16.666667%;`,
        "5/6": styled.css `width: 83.333333%;`,
        "5/12": styled.css `width: 41.666667%;`,
        "25%": styled.css `width: 25%;`,
        "75%": styled.css `width: 75%;`,
        "20%": styled.css `width: 20%;`,
        "40%": styled.css `width: 40%;`,
        "60%": styled.css `width: 60%;`,
        "80%": styled.css `width: 80%;`,
        "100%": styled.css `width: 100%;`,
        "full-screen": styled.css `width: 100vw;`
    },
}, "normal");