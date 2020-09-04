"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-01
 * @modified
 *
 * @description emoji-element
 * @description Web Components & Custom Elements
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

// log(`hello, emoji-element!`);

// html template

const tagName = `emoji-element`;

class EmojiElement extends HTMLElement {
  constructor() {
    log(`%cstep 1, init\n`, `color: #f0f;`)
    super();
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    // hidden Shadow DOM
    // this.shadowEmoji = this.attachShadow({mode: 'close'});
    // show Shadow DOM
    this.shadowEmoji = this.attachShadow({mode: 'open'});
    // template
    const template = document.querySelector(`[data-template="emoji-element"]`);
    this.templateContent = template.content.cloneNode(true);
    log(`this.templateContent`, this.templateContent);
    // #document-fragment
    // Shadow DOM add template
    this.shadowEmoji.appendChild(this.templateContent);
    // this.appendChild(his.templateContent);
    // this.shadowRoot.appendChild(his.templateContent);
    log(`this.shadowRoot`, this.shadowRoot);
    // #shadow-root (open)
    // DOM
    this.shadowPlaceholder = this.shadowEmoji.querySelector(`[data-uid="div"]`);
    // this.shadowPlaceholder = this.shadowEmoji.getElementById('placeholder');
    log(`this.shadowPlaceholder`, this.shadowPlaceholder);
    // <div data-uid=​"div" id=​"placeholder" aria-hidden=​"false">​…​</div>​
    this.shadowImg = this.shadowEmoji.querySelector(`[data-uid="img"]`);
    log(`this.shadowImg`, this.shadowImg);
    this.shadowImg.addEventListener('load', () => {
      // do something
      const timer = setInterval(() => {
        if(this.shadowImg.complete) {
          log(`image loaded`);
          // this.shadowPlaceholder.style.display = "none;";
          this.shadowPlaceholder.setAttribute(`style`, "display: none;");
          this.shadowPlaceholder.setAttribute(`data-style`, "none;");
          clearInterval(timer)
        } else {
          log(`image is loading`);
        }
      }, 1000);
      setTimeout(() => {
        if(timer) {
          clearInterval(timer);
        }
      }, 10*1000);
    });
    // <img data-uid=​"img" id=​"image" aria-hidden=​"true">​…​</img>​
    this.$button = this.shadowEmoji.querySelector('button');
    log(`this.$button`, this.$button);
    // <button data-uid=​"button">​click​</button>​
    this.$button.addEventListener('click', () => {
      // do something
      log(`clicked button`);
      this.disconnectedCallback();
      // 销毁组件
    });
  }

  safeSetAttribute(name, value) {
    if (this.getAttribute(name) !== value) {
      this.setAttribute(name, value);
    }
  }

  static get emojiAttributes() {
    return ['text', 'alt'];
  }

  set text(value) {
    this.safeSetAttribute('text', value);
    if (this.success) {
      this.loadEmoji();
    }
  }

  get text() {
    return this.getAttribute('text');
  }

  loadEmoji() {
    this.setAttribute('success', '');
    this.shadowEmoji.text = `xgqfrms`;
    // this.shadowEmoji.text = this.getAttribute('text');
    // this.shadowEmoji.text = this.text();
    // this.shadowEmoji.text = this.text;
  }

  onLoad(event) {
    this.dispatchEvent(new CustomEvent('loadend', {detail: {success: true}}));
    this.shadowEmoji.removeAttribute('aria-hidden');
    this.shadowPlaceholder.setAttribute('aria-hidden', 'true');
    this.updateShadyStyles();
  }

  onError(event) {
    this.dispatchEvent(new CustomEvent('loadend', {detail: {success: false}}));
  }

  updateShadyStyles() {
    if(window.ShadyCSS) window.ShadyCSS.styleElement(this);
  }

  connectedCallback() {
    this.connect();
    this.setAttribute('role', 'presentation');
    this.alt = this.getAttribute('alt');
    this.placeholder = this.getAttribute('placeholder');
    this.loadEmoji();
  }

  connect() {
    log(`%cstep 2, connect\n`, `color: #f0f;`);
    const url = this.getAttribute('url');
    log(`url`, url);
    // https://img2020.cnblogs.com/blog/740516/202009/740516-20200903210438342-951722542.png
    const text = this.getAttribute('text');
    log(`text`, text);
    // emoji-element text
    this.shadowImg.setAttribute('src', url);
    // log(`this.templateContent`, this.templateContent);
    // #document-fragment
    const img = this.templateContent.querySelector(`img`);
    log(`read img bug ❌`, img);
    // null
  }

  disconnectedCallback() {
    this.disconnect();
  }

  disconnect() {
    log(`disconnect`);
  }
}


// 添加样式到 Shadow DOM （template）
if (window.ShadyCSS) window.ShadyCSS.prepareTemplate(template, tagName);

customElements.define(tagName, EmojiElement);
