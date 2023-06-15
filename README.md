# Web Atoms Data Styles
Data styles utilizes data attributes to specify some easy styles. `data-styles.d.ts` provides intellisense to add corresponding data attributes in JSX.

# Installation
1. You can directly reference `data-styles.css`.
2. Or you can import SystemJS module `data-styles.js`.

# Usage

## Multiple attributes on single node.
```tsx
    <div
        data-font-weight="bold"
        data-color="red"/>
```

## Change attribute based on condition
```tsx
    <div
        data-font-weight={ isSomethingTrue ? "bold" : "normal" }
        data-color={ isValid ? "default" : "red" }
        />
```

# Why?
1. Data Styles are composable, you can combine multiple attributes on single node.
2. Why not style attribute? Style attribute is heavy, and it is not customizable, for example, we have a styled call `data-layout="accent-button"`. When you are creating reusable components, you can specify initial styles using data attributes. And end user can customize styles based on desired design needs. Inline style does not allow other customizations such as media queries and pseudo elements and other customizations such as hover, active etc.

# Layouts
We have created some basic layouts that are reusable and customizable.

1. row - a single flex row with gap and padding of 5px (customizable through variables).
2. flex-wrap - flex wrap with gap and padding of 5px.
3. command-row - same as row but with some additional background and styling for container buttons.
4. button - button with flex to contain and position icons correctly, there are various buttons such as accent-button, go-button (green), reject-button (dark red), stop-button (red), accept-button (blue).
5. link - a simple link with text decoration set to none and on hover text decoration is set to underline. Colors are customizable.
6. warning - a warning flex box with default border, radius and warning background color.
