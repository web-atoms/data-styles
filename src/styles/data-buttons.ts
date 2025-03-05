import styled from "../styled";
import vars from "../vars";

const createButton = (
    {
        name,
        backgroundColor = "var(--icon-button-background, transparent)",
        borderColor = "var(--icon-button-border, transparent)",
        color,
        help
    }: { name: string, borderColor?: string, color?: string, backgroundColor?, help?: string}) => {

    return {
        [name + "button"]: styled.css `
            padding: ${vars.spacingSmall};
            padding-left: ${vars.spacingLarge};
            padding-right: ${vars.spacingLarge};
            cursor: pointer;
            border: solid 1px ${borderColor};
            border-radius: 9999px;
            text-decoration: none;
            ${backgroundColor ? "background-color:" + backgroundColor + ";" : ""}
            ${color ? "color:" + color + ";" : ""}
        `.help(`${name}button: Text Button, ${help}`),
        [name + "icon-button"]: styled.css `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${vars.spacing};
            padding: ${vars.spacingSmall};
            padding-left: ${vars.spacingLarge};
            padding-right: ${vars.spacingLarge};
            cursor: pointer;
            border: solid 1px ${borderColor};
            border-radius: 9999px;
            text-decoration: none;
            ${backgroundColor ? "background-color:" + backgroundColor + ";" : ""}
            ${color ? "color:" + color + ";" : ""}
        `.help(`${name}icon-button: Horizontal centered flex layout, ${help}`),
    };
};

const createButtonDisplay = (
    {
        name,
    }: { name: string }) => {

    return {
        [name + "icon-button"]: styled.css `
            display: flex;
            align-items: center;
            justify-content: center;
        `,
    };
};

styled.add({
    "button[data-layout]": {
        ... createButtonDisplay({ name: ""}),
        ... createButtonDisplay({ name: "accent-"}),
        ... createButtonDisplay({ name: "stop-"}),
        ... createButtonDisplay({ name: "go-"}),
        ... createButtonDisplay({ name: "accept-"}),
        ... createButtonDisplay({ name: "warning-"}),
        ... createButtonDisplay({ name: "reject-"}),
    }
}, "lowest");

styled.add({

    "data-layout": {
        ... createButton({ name: ""}),
        ... createButton({ name: "accent-", backgroundColor: vars.accentColor, color: vars.accentTextColor, help: "with default accent color set by --accent-color"}),
        ... createButton({ name: "stop-", backgroundColor: vars.stopColor, color: vars.stopTextColor, help: "with default stop color (usually red) set by --stop-color"}),
        ... createButton({ name: "go-", backgroundColor: vars.goColor, color: vars.goTextColor, help: "with default go color (usually green) set by --go-color"}),
        ... createButton({ name: "accept-", backgroundColor: vars.acceptColor, color: vars.acceptTextColor, help: "with default accept color (usually blue) set by --accept-color"}),
        ... createButton({ name: "warning-", backgroundColor: vars.warningColor, color: vars.warningTextColor, help: "with default warning color (usually yellow) set by --warning-color"}),
        ... createButton({ name: "reject-", backgroundColor: vars.rejectColor, color: vars.rejectTextColor, help: "with default reject color (usually dark red) set by --reject-color"}),
    },
    "button[data-layout]": {
        ... createButton({ name: ""}),
        ... createButton({ name: "accent-", backgroundColor: vars.accentColor, color: vars.accentTextColor, help: "with default accent color set by --accent-color"}),
        ... createButton({ name: "stop-", backgroundColor: vars.stopColor, color: vars.stopTextColor, help: "with default stop color (usually red) set by --stop-color"}),
        ... createButton({ name: "go-", backgroundColor: vars.goColor, color: vars.goTextColor, help: "with default go color (usually green) set by --go-color"}),
        ... createButton({ name: "accept-", backgroundColor: vars.acceptColor, color: vars.acceptTextColor, help: "with default accept color (usually blue) set by --accept-color"}),
        ... createButton({ name: "warning-", backgroundColor: vars.warningColor, color: vars.warningTextColor, help: "with default warning color (usually yellow) set by --warning-color"}),
        ... createButton({ name: "reject-", backgroundColor: vars.rejectColor, color: vars.rejectTextColor, help: "with default reject color (usually dark red) set by --reject-color"}),
    }

}, "normal");
