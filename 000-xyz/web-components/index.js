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
    style.setContent = `
      .run {
        width: 100px;
        height: 100px;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAflBMVEUAAAC/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVK/aVLTn5Hy7/D1+PrQlofr3dupra8pLzM2PD/c3+FPPjuQV0iHU0ZhRT9bTlWnfYfZnKnyq7o2NzuzhJDCdmrso63Sgnnilprvp7R7RZaHAAAAEnRSTlMAMO9wAP+PEK9QQL8gYJ/fz4BJ06cKAAABKUlEQVR4AYXU5xaiMBBAYYheolQLKq679vr+L7gMvUTz/Ro4V89IODoDrppMR5z+pavA05ZoRk55c/0rojbTXyOfRvAlCqOYljGaJPRoQ+QxsFjqYRQylriDyMdAaXsEXj/SClbrdL0C2kn1Ir1UbFKxgc5UR/WRsU13WbbbyiRDuu1HoTSk6T7L9ilQDjL5bRRTRlnuD1AOEhE1EZi/ScyryAWMO4mkikKE6deJSKKcQhiek4jbxb8LikgHWCO9wB4F/KbcqRNROWQjB0SinRmVv+PoH4WJQ+OY3z6dL9fc5XzKL46UFg6d6na/Nu63uoFuxOPZRs8H5ghe748Un/eLDlncRjkRVrH9YUJoPxai8QEncfuh3vvkV9sHcRQW/y5ekFBQsdz4DxcaKmRmgLDRAAAAAElFTkSuQmCC') 0 0;
        animation: run 500 step(6) infinite;
      }
      @keyframes run {
        from {
          background-position: 0 0;
        }
        to {
          background-position: -600px 0;
        }
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define(`trump-component`, TrumpComponent);


// export default TrumpComponent;

// export {
//   TrumpComponent,
// };

