import styled from "../../styled";
import vars from "../../vars";

const prepare = (size, field, prefix) => {
    const r = {};
    for (const key in size) {
        if (Object.prototype.hasOwnProperty.call(size, key)) {
            const element = size[key];
            
            const pk = (element.key ?? prefix + key);
            r[pk] = styled.css `${field}: ${element.value};`
        }
    }
    return r;
};

styled.add({
    "data-max-width": {
        ... prepare(vars.size, "max-width", "size-"),
        ... prepare(vars.screen, "max-width", "screen-"),
        "min-content": styled.css `max-width: min-content;`,
        "max-content": styled.css `max-width: max-content;`,
        "fit-content": styled.css `max-width: fit-content;`,
    },
    "data-min-width": {
        ... prepare(vars.size, "min-width", "size-"),
        ... prepare(vars.screen, "min-width", "screen-"),
        "min-content": styled.css `min-width: min-content;`,
        "max-content": styled.css `min-width: max-content;`,
        "fit-content": styled.css `min-width: fit-content;`,
    },
    "data-width": {
        ... prepare(vars.size, "width", "size-"),
        ... prepare(vars.screen, "width", "screen-"),
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