![](https://img.shields.io/badge/webcomponents.org-published-blue.svg) [![](https://img.shields.io/badge/webcomponents.org-emoji%20element-deepgreen.svg)](https://www.webcomponents.org/element/emoji-element)

# emoji-element

> Web Components & Custom Elements 

1. ufo-element / ufo-element-🛸
2. ghost-element / ghost-element-👻
3. shit-element / shit-element-💩

## usage

>  normal version

```html
<ufo-element>🛸</ufo-element>
<ghost-element>👻</ghost-element>
<shit-element>💩</shit-element>

```

> emoji version

```html
<ufo-element-🛸>🛸</ufo-element-🛸>
<ghost-element-👻>👻</ghost-element-👻>
<shit-element-💩>💩</shit-element-💩>

```

### 📦 Load it!

```html
<!-- CDN -->
<script async type="module" src="https://unpkg.com/emoji-elements/src/index.js"></script>

<!-- npm -->
<script async type="module" src="/node_modules/emoji-elements/src/index.js"></script>

<!-- ES Module -->
<script type="module">
  import '/node_modules/emoji-elements/src/index.js';
  // ...
</script>

```
### 💪 Use it!

```html
<emoji-element text="👻🛸💩" alt="Emoji Element">
  <span slot="placeholder">👻🛸💩</span>
</emoji-element>

```

## live demo

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="my-element.html">
    <link rel="import" href="../other-element/other-element.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<other-element></other-element>
<my-element></my-element>
```

```code
<script src="../webcomponentsjs/webcomponents-lite.js"></script>
<link rel="import" href="paper-progress.html">
<style is="custom-style">
  paper-progress {
    display: block;
    width: 100%;
    margin: 20px 0;
  }
</style>
<paper-progress indeterminate></paper-progress>
```

## npm

https://www.npmjs.com/package/emoji-element

## custom element

https://www.webcomponents.org/element/emoji-element
