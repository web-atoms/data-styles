
System.register([], function(_export, _context) {
    return {
        setters: [],
        execute: function() {
            const t = `[data-font-weight] { font-weight: attr(data-font-weight) !important; }
[data-font-weight=bold] { font-weight: bold !important; }
[data-font-weight=normal] { font-weight: normal !important; }
[data-font-weight=bolder] { font-weight: bolder !important; }
[data-font-weight=lighter] { font-weight: lighter !important; }
[data-font-style] { font-weight: attr(data-font-style) !important; }
[data-font-style=italic] { font-style: italic !important; }
[data-font-style=normal] { font-style: normal !important; }
[data-font-style=oblique] { font-style: oblique !important; }
[data-text-align] { font-weight: attr(data-text-align) !important; }
[data-text-align=left] { text-align: left !important; }
[data-text-align=right] { text-align: right !important; }
[data-text-align=center] { text-align: center !important; }
[data-text-align=justify] { text-align: justify !important; }
`;
            const style = document.createElement("style");
            style.id = "data-styles";
            style.textContent = t;
            document.head.appendChild(style);       
        }
    };
});
    