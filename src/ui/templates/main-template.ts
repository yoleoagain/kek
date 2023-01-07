const template = document.createElement('template')
template.innerHTML = /*html*/`
  <style>
    .container {
        max-width: 900px;
        margin: 0 auto;
        align-self: center;
        padding: var(--gap);
        height: calc(100vh - 124px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
  </style>
<top-header></top-header>
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