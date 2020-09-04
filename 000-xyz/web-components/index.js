"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-01
 * @modified
 *
 * @description web components
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

class TrumpComponent extends HTMLElement{
  constructor() {
    super();
    // 立即执行
    log(`init`);
    this.init();
  }
  init() {
    log(`💩 trump is running`);
    // shadow root
    const shadow = this.attachShadow({
      mode: "open",
    });
    const wrapper = document.createElement(`div`);
    wrapper.setAttribute(`class`, `run`);
    const style = document.createElement(`style`);
    // style.setContent not exist
    style.textContent = `
      .run {
        min-width: 100px;
        min-height: 100px;
        width: 512px;
        height: 512px;
        border: 1px solid red;
        background: url(https://www.boston.com/wp-content/uploads/2016/05/yuge_anger.png) 0 0;
        background-repeat: no-repeat;
        object-fit: contain;
        animation: run 500ms steps(6) infinite;
      }
      @keyframes run {
        from {
          background-position: 600px 0;
        }
        to {
          background-position: -600px 0;
        }
      }
    `;
    // style.cssText = `
    //   .run {
    //     width: 100px;
    //     height: 100px;
    //     background: url(https://www.boston.com/wp-content/uploads/2016/05/yuge_anger.png) 0 0;
    //     background-repeat: no-repeat;
    //     animation: run 500ms steps(6) infinite;
    //   }
    //   @keyframes run {
    //     from {
    //       background-position: 0 0;
    //     }
    //     to {
    //       background-position: -600px 0;
    //     }
    //   }
    // `;
    // style.innerHTML = `
    //   .run {
    //     width: 100px;
    //     height: 100px;
    //     background: url(https://www.boston.com/wp-content/uploads/2016/05/yuge_anger.png) 0 0;
    //     background-repeat: no-repeat;
    //     animation: run 500ms steps(6) infinite;
    //   }
    //   @keyframes run {
    //     from {
    //       background-position: 0 0;
    //     }
    //     to {
    //       background-position: -600px 0;
    //     }
    //   }
    // `;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    // 添加样式到 Shadow DOM （template）
    // if (window.ShadyCSS) window.ShadyCSS.prepareTemplate(template, tagName);
  }
}

customElements.define(`trump-component`, TrumpComponent);


// export default TrumpComponent;

// export {
//   TrumpComponent,
// };



/*

bug

https://codepen.io/xgqfrms/pen/ZEWXrVz?editors=1111



*/


