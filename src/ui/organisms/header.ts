const template = document.createElement('template')
template.innerHTML = /*html*/`
<style>
@import "css/main.css";
@import "css/vars.css";

nav {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #eee;
}
.container {
    display: flex;
    padding: 0;
    height: 100%;
    justify-content: space-between;
}
.container > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.active {
    border-bottom: 2px dashed var(--main);
}
</style>
<nav>
    <div class="container">
        <div data-scene="main" class="active">About</div>
        <div data-scene="experience">Experience</div>
        <div data-scene="contacts">Contacts</div>
    </div>
</nav>
`

export default class Header extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}