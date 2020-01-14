# Using css variables

## Question
How would our site css structure look if we used css variables for skinning?

## File structure
```css
@import "global-theme.css";
@import "site-theme.css";

@import "global-base.css";

@import "component-a.css";
@import "component-b.css";
@import "component-c.css";
/** etc **/

@import "site-overrides.css";
```

## Files
#### `global-theme.css` 
Theme variables used in all projects. 
```css
:root {
     --brand1: #ccc;
  --brand2: #aaa;
  --brand3: #666;
  
  --shade0: white;
  --shade1: #eee;
  --shade2: #ccc;
  --shade3: #aaa;
  --shade4: #111;
  
  --border-color1: #aaa;
  --border-color2: #888;
  --icon-color: #777;
  --site-bg: var(--shade1);
  
  --link-color: #3157a1;
  --text-color: #333;
  --text-color-invert: white;
  --sub-text-color: #aaa;

  /* scaling units */
  --base-scaler: calc(3.3px + 0.75vw);
  --space-xs: calc(var(--base-scaler) * 1);
  --space-s: calc(var(--base-scaler) * 2); 
  --space-m: calc(var(--base-scaler) * 3);
  --space-l: calc(var(--base-scaler) * 4);
  --space-xl: calc(var(--base-scaler) * 5);
  
  --grid-gap: var(--space-s);
  --column-gap: var(--space-m);
  --component-margin: var(--space-l);
  --component-padding: var(--space-m);
  
  --site-gutter: calc(var(--space-s) + 4px);
  --site-width: 1024px;
  --site-indent: var(--component-padding);

  /* fonts */
  --base-font-name: 'skytext';
  --base-font-load-setting: 'optional';
  
  --base-font-size: 18px;
  --base-font-scaler: calc(21.2px + 3vw);

  --font-scale-l: var(--base-font-scaler);
  --font-scale-m: calc(var(--base-font-scaler) * 0.75);
  --font-scale-s: calc((var(--base-font-scaler) * 0.375) + 6px);
  --font-scale-xs: calc((var(--base-font-scaler) * 0.25) + 12px);

  --font-fixed-s: 18px;
  --font-fixed-xs: 16px;
  --font-fixed-xxs: 14px;

  --article-text: calc((var(--base-font-scaler) * 0.25) + 10px);
  --component-text: calc( ( (var(--base-font-scaler) - 10px) / 8) + 13.25px);
}
```
#### `site-theme.css`
Theme variables that are different in a specific project, eg Sky Sports, Sky News.
```css
:root {
    --brand1: red;
    --brand2: blue;
    --link-color: green;
}
```
#### `global-base.css`
Global start file, fonts and common reusable elements, eg 'atoms', small patterns that recur inside multiple components.
```css
@import "fonts.css";
@import "start.css";
@import "layout.css";
@import "buttons.css";
@import "lists.css";
/** etc **/
```
Import a component used in this project:
#### `component-a.css`
```css
@import "theme.css";
@import "component.css";
```
##### `theme.css`
For this specific component, the link, border and icon color are different from global/site theme, so redefine here. These changes are scoped just to this component.
```css
.component-a {
    --border-color1: var(--shade4);
    --link-color: var(--text-color);
    --icon-color: var(--shade3);
}
```
#####  `component.css`
```css
.component-a {
    /** component skin variables **/
    --font-scale: calc(1em + 1vw);
    border: 1px solid var(--border-color1);
    background-color: var(--shade1);
}
	
@media all and (min-width: 800px) {
    .component-a {
        --font-scale: 24px;
    }
}

.component-a-header {
    font-size: 1.25em;
    padding: 0.5em;
    background: var(--brand1);
    color: var(--text-color-invert);
}

.component-a-icon {
    width: 1em;
    height: 1em;
    fill: var(--icon-color);
}
```
#### `site-overrides.css`
If we need any site specific overrides that don't use the theming system, add them here (but use sparingly/with caution).
```css
@import "component-a.css";
```
##### `component-a.css`;
```css
.component-a-header {
    background: hotpink;
}
```
