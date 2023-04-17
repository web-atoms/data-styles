
        System.register([], function(_export, _context) {
            return {
                setters: [],
                execute: function() {
                    const t = "[data-font-weight] { font-weight: attr(data-font-weight) !important; }\n[data-font-weight=bold] { font-weight: bold !important; }\n[data-font-weight=normal] { font-weight: normal !important; }\n[data-font-weight=bolder] { font-weight: bolder !important; }\n[data-font-weight=lighter] { font-weight: lighter !important; }\n[data-font-style] { font-weight: attr(data-font-style) !important; }\n[data-font-style=italic] { font-style: italic !important; }\n[data-font-style=normal] { font-style: normal !important; }\n[data-font-style=oblique] { font-style: oblique !important; }\n[data-text-align] { font-weight: attr(data-text-align) !important; }\n[data-text-align=left] { text-align: left !important; }\n[data-text-align=right] { text-align: right !important; }\n[data-text-align=center] { text-align: center !important; }\n[data-text-align=justify] { text-align: justify !important; }\n";
                    const style = document.createElement("style");
                    style.id = "data-styles";
                    style.textContent = t;
                    document.head.appendChild(style);       
                }
            };
        });
    