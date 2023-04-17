
System.register([], function(_export, _context) {
    return {
        setters: [],
        execute: function() {
            const t = `[data-align-items]  {align-items: attr(data-align-items) !important;}
[data-align-items=start] {align-items: start !important;}
[data-align-items=self-start] {align-items: self-start !important;}
[data-align-items=end] {align-items: end !important;}
[data-align-items=self-end] {align-items: self-end !important;}
[data-align-items=center] {align-items: center !important;}
[data-align-items=stretch] {align-items: stretch !important;}
[data-align-items=normal] {align-items: normal !important;}
[data-align-items=baseline] {align-items: baseline !important;}
[data-background-color]  {color: attr(data-background-color) !important;}
[data-background-color=red] {color: red !important;}
[data-background-color=blue] {color: blue !important;}
[data-background-color=green] {color: green !important;}
[data-background-color=lightgreen] {color: lightgreen !important;}
[data-background-color=lightyellow] {color: lightyellow !important;}
[data-background-color=gold] {color: gold !important;}
[data-background-color=goldenrod] {color: goldenrod !important;}
[data-background-color=fuchsia] {color: fuchsia !important;}
[data-background-color=black] {color: black !important;}
[data-background-color=white] {color: white !important;}
[data-background-color=accent] {color: var(--accent-bg-color, blue) !important;}
[data-color]  {color: attr(data-color) !important;}
[data-color=red] {color: red !important;}
[data-color=blue] {color: blue !important;}
[data-color=green] {color: green !important;}
[data-color=lightgreen] {color: lightgreen !important;}
[data-color=lightyellow] {color: lightyellow !important;}
[data-color=gold] {color: gold !important;}
[data-color=goldenrod] {color: goldenrod !important;}
[data-color=fuchsia] {color: fuchsia !important;}
[data-color=black] {color: black !important;}
[data-color=white] {color: white !important;}
[data-color=accent] {color: var(--accent-color, white) !important;}
[data-display]  {color: attr(data-display) !important;}
[data-display=flex] {display: flex !important;}
[data-display=grid] {display: grid !important;}
[data-display=inline-grid] {display: inline-grid !important;}
[data-display=inline-flex] {display: inline-flex !important;}
[data-display=vertical-flex] {
            display: flex !important;
            flex-direction: column;
        }
[data-fade=bottom] {
            position: relative !important;
        }
[data-fade=bottom]:after {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom : 0;
            content: "";
            margin: 10;
            pointer-events: none;
            background: linear-gradient(to top, rgba(255,255,255, 1) 1px, rgba(255,255,255, 0) 16px )
        }
[data-font-size]  {font-size: attr(data-font-size) !important;}
[data-font-size=small] {font-size: var(--font-size-small, 0.8125em) !important;}
[data-font-size=medium] {font-size: medium !important;}
[data-font-size=large] {font-size: large !important;}
[data-font-style]  {font-weight: attr(data-font-style) !important;}
[data-font-style=italic] {font-style: italic !important;}
[data-font-style=normal] {font-style: normal !important;}
[data-font-style=oblique] {font-style: oblique !important;}
[data-font-weight]  {font-weight: attr(data-font-weight) !important;}
[data-font-weight=bold] {font-weight: bold !important;}
[data-font-weight=normal] {font-weight: normal !important;}
[data-font-weight=bolder] {font-weight: bolder !important;}
[data-font-weight=lighter] {font-weight: lighter !important;}
[data-justify-items]  {align-items: attr(data-justify-items) !important;}
[data-justify-items=start] {justify-items: start !important;}
[data-justify-items=self-start] {justify-items: self-start !important;}
[data-justify-items=end] {justify-items: end !important;}
[data-justify-items=self-end] {justify-items: self-end !important;}
[data-justify-items=center] {justify-items: center !important;}
[data-justify-items=stretch] {justify-items: stretch !important;}
[data-justify-items=normal] {justify-items: normal !important;}
[data-justify-items=baseline] {justify-items: baseline !important;}
[data-layout=row] {
            display: flex;
            align-items: center;
            align-content: center;
        }
[data-layout=row] > * {flex: 0 0 auto;}
[data-layout=command-row] {
            display: flex;
            align-items: center;
            align-content: center;
            background-color: var(--command-bg-color, #F0F0F0);
            border-radius: 9999px;
            padding: 7px;
        }
[data-layout=command-row] > * {flex: 0 0 auto;}
[data-layout=command-row] button {
            background-color: var(--accent-color, blue);
            color: var(--accent-text-color, white);
        }
[data-layout=command-row] button:hover {
            background-color: var(--accent-color, blue);
        }
[data-text-align]  {font-weight: attr(data-text-align) !important;}
[data-text-align=left] {text-align: left !important;}
[data-text-align=right] {text-align: right !important;}
[data-text-align=center] {text-align: center !important;}
[data-text-align=justify] {text-align: justify !important;}
[data-text-decoration]  {text-decoration: attr(data-text-decoration) !important;}
[data-text-decoration=underline] {text-decoration: underline !important;}
[data-text-decoration=overline] {text-decoration: overline !important;}
[data-text-decoration=strike-through] {text-decoration: line-through !important;}
[data-text-decoration=line-through] {text-decoration: line-through !important;}
[data-text-decoration=wavy] {text-decoration: wavy !important;}
[data-text-overflow]  {text-overflow: attr(data-text-overflow) !important;}
[data-text-overflow=ellipsis] {
            text-overflow: ellipsis !important;
            min-width: 0;
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
        }
[data-wrap=none] {white-space: nowrap !important;}
`;
            const style = document.createElement("style");
            style.id = "data-styles";
            style.textContent = t;
            document.head.appendChild(style);       
        }
    };
});
    