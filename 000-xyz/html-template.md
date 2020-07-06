# html-template

https://www.cnblogs.com/xgqfrms/p/13255272.html

```html
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="xgqfrms">
    <meta name="generator" content="VS code">
    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
    <link rel="icon" type="image/png" href="./favicon.png" />
    <title>template & slot</title>
    <style lang="css">
        dl { margin-left: 6px; }
        dt { font-weight: bold; color: #217ac0; font-size: 110% }
        dt { font-family: Consolas, "Liberation Mono", Courier }
        dd { margin-left: 16px }
    </style>
</head>
<body>
    <section>
        <header>
            <h1>template & slot</h1>
        </header>
        <main>
            <!-- template -->
            <template id="element-details-template">
                <style>
                    details {font-family: "Open Sans Light",Helvetica,Arial}
                    .name {font-weight: bold; color: #217ac0; font-size: 120%}
                    h4 { margin: 10px 0 -8px 0; }
                    h4 span { background: #217ac0; padding: 2px 6px 2px 6px }
                    h4 span { border: 1px solid #cee9f9; border-radius: 4px }
                    h4 span { color: white }
                    .attributes { margin-left: 22px; font-size: 90% }
                    .attributes p { margin-left: 16px; font-style: italic }
                </style>
                <details>
                    <summary>
                        <span>
                            <code class="name">
                                &lt;<slot name="element-name">NEED NAME</slot>&gt;
                            </code>
                            <i class="desc">
                                <slot name="description">NEED DESCRIPTION</slot>
                            </i>
                        </span>
                    </summary>
                    <div class="attributes">
                        <h4>
                            <span>Attributes</span>
                        </h4>
                        <slot name="attributes">
                            <p>None</p>
                        </slot>
                    </div>
                </details>
                <hr>
            </template>
            <!-- demos -->
            <element-details>
                <span slot="element-name">slot</span>
                <span slot="description">
                    A placeholder inside a web
                    component that users can fill with their own markup,
                    with the effect of composing different DOM trees
                    together.
                </span>
                <dl slot="attributes">
                    <dt>name</dt>
                    <dd>The name of the slot.</dd>
                </dl>
            </element-details>
            <element-details>
                <span slot="element-name">template</span>
                <span slot="description">
                    A mechanism for holding client-
                    side content that is not to be rendered when a page is
                    loaded but may subsequently be instantiated during
                    runtime using JavaScript.
                </span>
            </element-details>
            <element-details>
              <span slot="element-name"></span>
              <span slot="description"></span>
              <span slot="attributes"></span>
            </element-details>
           <element-details></element-details>
        </main>
    </section>
    <!-- js -->
    <script src="./app.js"></script>
</body>
</html
```

```js

"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description app.js
 * @augments
 * @example
 * @link
 *
 */
let log = console.log;

customElements.define("element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("element-details-template").content;
      // log(`element-details's template =`, template);
      let dom = template.cloneNode(true);
      // log(`element-details's template's dom =`, dom); 
      // document.body.appendChild(clone); 
      // document.body.appendChild(dom); // bug ❌
      // log(`this =`, this);
      // this === element-details 实例
      // const shadowRoot = this.attachShadow({mode: "open"}).appendChild(dom);
      // log(`shadowRoot =`, shadowRoot);
      this.init(dom);
    }
    init(dom) {
      const shadowRoot = this.attachShadow({mode: "open"}).appendChild(dom);
      log(`shadowRoot =`, shadowRoot);
    }
  }
);
```


