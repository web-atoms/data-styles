
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
[data-background-color=accent] {color: var(--accent_bg_color, blue) !important;}
[data-border]  {border: attr(data-border);}
[data-border=none] {border: none;}
[data-border=frame] {
            border: solid 1px;
            border-color: var(--accent_bg_color, blue);
            padding: var(--spacing, 5px);
            border-radius: var(--spacing, 5px);
        }
[data-border-style]  {border-style: attr(data-border-style) !important;}
[data-border-style=solid] {border-style: solid !important;}
[data-border-style=dashed] {border-style: dashed !important;}
[data-border-style=dotted] {border-style: dotted !important;}
[data-border-style=double] {border-style: double !important;}
[data-border-style=groove] {border-style: groove !important;}
[data-border-style=inset] {border-style: inset !important;}
[data-border-style=none] {border-style: none !important;}
[data-border-style=outset] {border-style: outset !important;}
[data-border-style=ridge] {border-style: ridge !important;}
[data-border-width]  {border-width: attr(data-border-width) !important;}
[data-border-width=thin] {border-width: var(--thin, 3px) !important;}
[data-border-width=thick] {border-width: var(--thick, 4px) !important;}
[data-border-width=thinner] {border-width: var(--thinner, 2px) !important;}
[data-border-width=thicker] {border-width: var(--thicker, 5px) !important;}
[data-border-width=thinnest] {border-width: var(--thinnest, 1px) !important;}
[data-border-width=thickest] {border-width: var(--thickest, 6px) !important;}
[data-border-color]  {border-color: attr(data-border-color) !important;}
[data-border-color=accent] {border-color: var(--accent_bg_color, blue) !important;}
[data-border-radius]  {border-radius: attr(data-border-radius) !important;}
[data-border-radius=full] {border-radius: 9999px !important;}
[data-border-left-style]  {border-left-style: attr(data-border-left-style) !important;}
[data-border-left-style=solid] {border-left-style: solid !important;}
[data-border-left-style=dashed] {border-left-style: dashed !important;}
[data-border-left-style=dotted] {border-left-style: dotted !important;}
[data-border-left-style=double] {border-left-style: double !important;}
[data-border-left-style=groove] {border-left-style: groove !important;}
[data-border-left-style=inset] {border-left-style: inset !important;}
[data-border-left-style=none] {border-left-style: none !important;}
[data-border-left-style=outset] {border-left-style: outset !important;}
[data-border-left-style=ridge] {border-left-style: ridge !important;}
[data-border-left-width]  {border-left-width: attr(data-border-left-width) !important;}
[data-border-left-width=thin] {border-left-width: var(--thin, 3px) !important;}
[data-border-left-width=thick] {border-left-width: var(--thick, 4px) !important;}
[data-border-left-width=thinner] {border-left-width: var(--thinner, 2px) !important;}
[data-border-left-width=thicker] {border-left-width: var(--thicker, 5px) !important;}
[data-border-left-width=thinnest] {border-left-width: var(--thinnest, 1px) !important;}
[data-border-left-width=thickest] {border-left-width: var(--thickest, 6px) !important;}
[data-border-left-color]  {border-left-color: attr(data-border-left-color) !important;}
[data-border-left-color=accent] {border-left-color: var(--accent_bg_color, blue) !important;}
[data-border-right-style]  {border-right-style: attr(data-border-right-style) !important;}
[data-border-right-style=solid] {border-right-style: solid !important;}
[data-border-right-style=dashed] {border-right-style: dashed !important;}
[data-border-right-style=dotted] {border-right-style: dotted !important;}
[data-border-right-style=double] {border-right-style: double !important;}
[data-border-right-style=groove] {border-right-style: groove !important;}
[data-border-right-style=inset] {border-right-style: inset !important;}
[data-border-right-style=none] {border-right-style: none !important;}
[data-border-right-style=outset] {border-right-style: outset !important;}
[data-border-right-style=ridge] {border-right-style: ridge !important;}
[data-border-right-width]  {border-right-width: attr(data-border-right-width) !important;}
[data-border-right-width=thin] {border-right-width: var(--thin, 3px) !important;}
[data-border-right-width=thick] {border-right-width: var(--thick, 4px) !important;}
[data-border-right-width=thinner] {border-right-width: var(--thinner, 2px) !important;}
[data-border-right-width=thicker] {border-right-width: var(--thicker, 5px) !important;}
[data-border-right-width=thinnest] {border-right-width: var(--thinnest, 1px) !important;}
[data-border-right-width=thickest] {border-right-width: var(--thickest, 6px) !important;}
[data-border-right-color]  {border-right-color: attr(data-border-right-color) !important;}
[data-border-right-color=accent] {border-right-color: var(--accent_bg_color, blue) !important;}
[data-border-top-style]  {border-top-style: attr(data-border-top-style) !important;}
[data-border-top-style=solid] {border-top-style: solid !important;}
[data-border-top-style=dashed] {border-top-style: dashed !important;}
[data-border-top-style=dotted] {border-top-style: dotted !important;}
[data-border-top-style=double] {border-top-style: double !important;}
[data-border-top-style=groove] {border-top-style: groove !important;}
[data-border-top-style=inset] {border-top-style: inset !important;}
[data-border-top-style=none] {border-top-style: none !important;}
[data-border-top-style=outset] {border-top-style: outset !important;}
[data-border-top-style=ridge] {border-top-style: ridge !important;}
[data-border-top-width]  {border-top-width: attr(data-border-top-width) !important;}
[data-border-top-width=thin] {border-top-width: var(--thin, 3px) !important;}
[data-border-top-width=thick] {border-top-width: var(--thick, 4px) !important;}
[data-border-top-width=thinner] {border-top-width: var(--thinner, 2px) !important;}
[data-border-top-width=thicker] {border-top-width: var(--thicker, 5px) !important;}
[data-border-top-width=thinnest] {border-top-width: var(--thinnest, 1px) !important;}
[data-border-top-width=thickest] {border-top-width: var(--thickest, 6px) !important;}
[data-border-top-color]  {border-top-color: attr(data-border-top-color) !important;}
[data-border-top-color=accent] {border-top-color: var(--accent_bg_color, blue) !important;}
[data-border-bottom-style]  {border-bottom-style: attr(data-border-bottom-style) !important;}
[data-border-bottom-style=solid] {border-bottom-style: solid !important;}
[data-border-bottom-style=dashed] {border-bottom-style: dashed !important;}
[data-border-bottom-style=dotted] {border-bottom-style: dotted !important;}
[data-border-bottom-style=double] {border-bottom-style: double !important;}
[data-border-bottom-style=groove] {border-bottom-style: groove !important;}
[data-border-bottom-style=inset] {border-bottom-style: inset !important;}
[data-border-bottom-style=none] {border-bottom-style: none !important;}
[data-border-bottom-style=outset] {border-bottom-style: outset !important;}
[data-border-bottom-style=ridge] {border-bottom-style: ridge !important;}
[data-border-bottom-width]  {border-bottom-width: attr(data-border-bottom-width) !important;}
[data-border-bottom-width=thin] {border-bottom-width: var(--thin, 3px) !important;}
[data-border-bottom-width=thick] {border-bottom-width: var(--thick, 4px) !important;}
[data-border-bottom-width=thinner] {border-bottom-width: var(--thinner, 2px) !important;}
[data-border-bottom-width=thicker] {border-bottom-width: var(--thicker, 5px) !important;}
[data-border-bottom-width=thinnest] {border-bottom-width: var(--thinnest, 1px) !important;}
[data-border-bottom-width=thickest] {border-bottom-width: var(--thickest, 6px) !important;}
[data-border-bottom-color]  {border-bottom-color: attr(data-border-bottom-color) !important;}
[data-border-bottom-color=accent] {border-bottom-color: var(--accent_bg_color, blue) !important;}
[data-border-top-left-radius]  {border-top-left-radius: attr(data-border-top-left-radius) !important;}
[data-border-top-left-radius=full] {border-top-left-radius: 9999px !important;}
[data-border-bottom-left-radius]  {border-bottom-left-radius: attr(border-bottom-left-radius) !important;}
[data-border-bottom-left-radius=full] {border-bottom-left-radius: 9999px !important;}
[data-border-top-right-radius]  {border-top-right-radius: attr(data-border-top-right-radius) !important;}
[data-border-top-right-radius=full] {border-top-right-radius: 9999px !important;}
[data-border-bottom-right-radius]  {border-bottom-right-radius: attr(border-bottom-right-radius) !important;}
[data-border-bottom-right-radius=full] {border-bottom-right-radius: 9999px !important;}
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
[data-color=accent] {color: var(--accent_color, white) !important;}
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
            background: linear-gradient(to top, rgba(255,255,255, 1) 1px, rgba(255,255,255, 0) 16px );
        }
[data-flex]  {flex: attr(data-flex) !important;}
[data-flex=stretch-full] {flex: 1 1 100% !important;}
[data-flex=stretch-half] {flex: 1 1 50% !important;}
[data-flex=stretch-quarter] {flex: 1 1 25% !important;}
[data-flex=stretch-three-fourth] {flex: 1 1 75% !important;}
[data-font-size]  {font-size: attr(data-font-size) !important;}
[data-font-size=small] {font-size: var(--font_size_small, 0.8125em) !important;}
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
            background-color: var(--command_bg_color, #F0F0F0);
            border-radius: 9999px;
            padding: 7px;
        }
[data-layout=command-row] > * {flex: 0 0 auto;}
[data-layout=command-row] button {
                background-color: var(--accent_bg_color, blue);
                color: var(--accent_color, white);
            }
[data-layout=command-row] button:hover {
                background-color: var(--accent_bg_color, blue);
            }
[data-layout=warning] {
            margin: var(--spacing_medium, 7px);
            padding: var(--spacing_medium, 7px);
            border-radius: var(--spacing_medium, 7px);
            background-color: var(--warning_color, #FFC107);
            border: solid 1px darkgray;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
[data-layout=grid2x2] {
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
        }
[data-layout=grid3x3] {
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto 1fr auto;
        }
[data-layout=flex-wrap] {
            display: flex;
            gap: var( --spacing, 5px);
            flex-wrap: wrap;
        }
[data-layout=flex] {
            display: flex;
            align-items: center;
            justify-content: start;
        }
[data-layout=flex-center] {
            display: flex;
            justify-items: center;
            align-items: center;
        }
[data-padding]  {padding: attr(data-padding) !important;}
[data-padding=auto] {padding: var(--spacing, 5px) !important;}
[data-padding=medium] {padding: var(--spacing_medium, 7px) !important;}
[data-padding=large] {padding: var(--spacing_large, 10px) !important;}
[data-padding-left]  {padding-left: attr(data-padding-left) !important;}
[data-padding-left=auto] {padding-left: var(--spacing, 5px) !important;}
[data-padding-left=medium] {padding-left: var(--spacing_medium, 7px) !important;}
[data-padding-left=large] {padding-left: var(--spacing_large, 10px) !important;}
[data-padding-right]  {padding-right: attr(data-padding-right) !important;}
[data-padding-right=auto] {padding-right: var(--spacing, 5px) !important;}
[data-padding-right=medium] {padding-right: var(--spacing_medium, 7px) !important;}
[data-padding-right=large] {padding-right: var(--spacing_large, 10px) !important;}
[data-padding-top]  {padding-top: attr(data-padding-top) !important;}
[data-padding-top=auto] {padding-top: var(--spacing, 5px) !important;}
[data-padding-top=medium] {padding-top: var(--spacing_medium, 7px) !important;}
[data-padding-top=large] {padding-top: var(--spacing_large, 10px) !important;}
[data-padding-bottom]  {padding-bottom: attr(data-padding-bottom) !important;}
[data-padding-bottom=auto] {padding-bottom: var(--spacing, 5px) !important;}
[data-padding-bottom=medium] {padding-bottom: var(--spacing_medium, 7px) !important;}
[data-padding-bottom=large] {padding-bottom: var(--spacing_large, 10px) !important;}
[data-margin]  {margin: attr(data-margin) !important;}
[data-margin=auto] {margin: var(--spacing, 5px) !important;}
[data-margin=medium] {margin: var(--spacing_medium, 7px) !important;}
[data-margin=large] {margin: var(--spacing_large, 10px) !important;}
[data-margin-left]  {margin-left: attr(data-margin-left) !important;}
[data-margin-left=auto] {margin-left: var(--spacing, 5px) !important;}
[data-margin-left=medium] {margin-left: var(--spacing_medium, 7px) !important;}
[data-margin-left=large] {margin-left: var(--spacing_large, 10px) !important;}
[data-margin-right]  {margin-right: attr(data-margin-right) !important;}
[data-margin-right=auto] {margin-right: var(--spacing, 5px) !important;}
[data-margin-right=medium] {margin-right: var(--spacing_medium, 7px) !important;}
[data-margin-right=large] {margin-right: var(--spacing_large, 10px) !important;}
[data-margin-top]  {margin-top: attr(data-margin-top) !important;}
[data-margin-top=auto] {margin-top: var(--spacing, 5px) !important;}
[data-margin-top=medium] {margin-top: var(--spacing_medium, 7px) !important;}
[data-margin-top=large] {margin-top: var(--spacing_large, 10px) !important;}
[data-margin-bottom]  {margin-bottom: attr(data-margin-bottom) !important;}
[data-margin-bottom=auto] {margin-bottom: var(--spacing, 5px) !important;}
[data-margin-bottom=medium] {margin-bottom: var(--spacing_medium, 7px) !important;}
[data-margin-bottom=large] {margin-bottom: var(--spacing_large, 10px) !important;}
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
    