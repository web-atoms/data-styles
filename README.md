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
2. Why not style attribute? Style attribute is heavy, and it is not customizable. When you are creating reusable components, you can specify initial styles using data attributes. And end user can customize styles based on desired design needs.
