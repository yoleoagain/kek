const template = document.createElement('template')
template.innerHTML = /*html*/`
  <style>
    .bage {
        background-color: var(--main);
        color: var(--invert);
        padding: var(--gap-half);
        border-radius: 6px;
        font-size: 12px;
    }
  </style>
<span class="bage">
    <slot></slot>
</span>
`

export default class CustomBage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}