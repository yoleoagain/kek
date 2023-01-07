const template = document.createElement('template')
template.innerHTML = /*html*/`
  <style>
    .container {
        max-width: 900px;
        margin: 0 auto;
        align-self: center;
        padding: var(--gap);
    }
  </style>
<main class="column container">
    <slot></slot>
</main>
`

export default class MainTemplate extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}