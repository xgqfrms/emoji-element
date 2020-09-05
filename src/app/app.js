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

log(`hello, emoji-element!`);

// html template 或 html template string
const template = document.createElement('template');
// :host for Shadow DOM style
template.innerHTML = `
  <style>
    :host {
      display: block;
      position: relative;
    }
    #image,
    #placeholder ::slotted(*) {
      position: absolute;
      top: 0;
      left: 0;
      transition:
        opacity
        var(--emoji-element-fade-duration, 0.3s)
        var(--emoji-element-fade-easing, ease);
      object-fit: var(--emoji-element-fit, contain);
      width: var(--emoji-element-width, 100%);
      height: var(--emoji-element-height, 100%);
    }
    :host([fade]) #placeholder:not([aria-hidden="true"]) ::slotted(*),
    :host([fade]) #image:not([aria-hidden="true"]) {
      opacity: 1;
    }
    :host([fade]) #image,
    :host([fade]) #placeholder[aria-hidden="true"] ::slotted(*) {
      opacity: 0;
    }
  </style>
  <div id="placeholder" aria-hidden="false">
    <slot name="placeholder"></slot>
  </div>
  <img id="image" aria-hidden="true"/>
`;

const tagName = `emoji-element`;

class EmojiElement extends HTMLElement {
  constructor() {
    super();
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    // show Shadow DOM
    this.attachShadow({mode: 'open'});
    // hidden Shadow DOM
    // this.attachShadow({mode: 'close'});
    const templateContent = template.content.cloneNode(true);
    log(`templateContent`, templateContent)
    this.template = templateContent;
    log(`this.template`, this.template)
    this.shadowEmoji = this.shadowRoot.appendChild(templateContent);
    // this.appendChild(templateContent);
    this.shadowPlaceholder = this.shadowRoot.getElementById('placeholder');

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
    log(`connect`);
    const img = this.template.querySelector('img');
    log(`this.template`, this.template.content)
    log(`img`, img)
    // img.setAttribute('src', this.getAttribute('url'));
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
