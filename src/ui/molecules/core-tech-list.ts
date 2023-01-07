const template = document.createElement('template')
template.innerHTML = /*html*/`
  <style>
    .core-tech, marquee {
        height: 39px;
        padding-top: 10px;
    }
    .core-tech>*:not(:last-child) {
        margin-right: var(--gap-half);
    }
  </style>
<marquee class="row core-tech">
    <custom-bage>Nodejs</custom-bage>
    <custom-bage>Typescript</custom-bage>
    <custom-bage>React</custom-bage>
    <custom-bage>Vue</custom-bage>
    <custom-bage>Svelte</custom-bage>
    <custom-bage>Graphql</custom-bage>
    <custom-bage>Apollo</custom-bage>
    <custom-bage>Rxjs</custom-bage>
    <custom-bage>Docker</custom-bage>
    <custom-bage>Fastify</custom-bage>
    <custom-bage>TypeORM</custom-bage>
    <custom-bage>ThreeJS</custom-bage>
</marquee>
`

export default class Avatar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}