
    declare global {
        namespace JSX {
            interface IElementAttribute {
                
                    "data-font-weight": "bold" | "normal" | "bolder" | "lighter",
                    "data-font-style": "italic" | "normal" | "oblique",
                    "data-text-align": "left" | "right" | "center" | "justify",
            }
        }
    }
