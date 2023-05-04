import styled from "../styled";

styled.add({
    "data-grid-row": {
        "row1": styled.css `grid-row: 1;`,
        "row2": styled.css `grid-row: 2;`,
        "row3": styled.css `grid-row: 3;`,
        "row4": styled.css `grid-row: 4;`,
        "row5": styled.css `grid-row: 5;`,
    },
    "data-grid-column": {
        "col1": styled.css `grid-column: 1;`,
        "col2": styled.css `grid-column: 2;`,
        "col3": styled.css `grid-column: 3;`,
        "col4": styled.css `grid-column: 4;`,
        "col5": styled.css `grid-column: 5;`,
    },
    "data-grid-row-span": {
        "span2": styled.css `grid-row-end: 2;`,
        "span3": styled.css `grid-row-end: 3;`,
        "span4": styled.css `grid-row-end: 4;`,
    },
    "data-grid-column-span": {
        "span2": styled.css `grid-column-end: 2;`,
        "span3": styled.css `grid-column-end: 3;`,
        "span4": styled.css `grid-column-end: 4;`,
    },
});