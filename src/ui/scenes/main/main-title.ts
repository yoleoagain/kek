const template = document.createElement('template')
template.innerHTML = /*html*/`
<style>
    @keyframes slideFromTop {
        0% {
            opacity: 1;
            transform: translateY(-100%);
        }

        10% {
            opacity: 1;
            transform: translateY(0);
        }

        75% {
            opacity: 1;
            transform: translateY(0);
        }

        100% {
            transform: translateY(100%);
            opacity: 0;
        }
    }
    
    .logo-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: slideFromTop 2s linear;
        animation-fill-mode: forwards;
    }

    .logo {
        margin-left: -70px;
        cursor: pointer;
        transition: all 1s ease-out;
    }

    .logo:hover .d {
        font-weight: 600;
        color: #000;
        display: inline-block;
        transform: scale(1.4);
    }
</style>
<div class="row fw center logo-container">
<pre class="logo">
/<span class="d">$</span><span class="d">$</span>     /<span class="d">$</span><span class="d">$</span>  /<span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span>        /<span class="d">$</span><span class="d">$</span>       /<span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span>  /<span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span> 
|  <span class="d">$</span><span class="d">$</span>  /<span class="d">$</span><span class="d">$</span>/ /<span class="d">$</span><span class="d">$</span>__  <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>_____/ /<span class="d">$</span><span class="d">$</span>__  <span class="d">$</span><span class="d">$</span>
\\  <span class="d">$</span><span class="d">$</span> /<span class="d">$</span><span class="d">$</span>/ | <span class="d">$</span><span class="d">$</span>  \\ <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>  \\ <span class="d">$</span><span class="d">$</span>
 \\  <span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span>/  | <span class="d">$</span><span class="d">$</span>  | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span>   | <span class="d">$</span><span class="d">$</span>  | <span class="d">$</span><span class="d">$</span>
  \\  <span class="d">$</span><span class="d">$</span>/   | <span class="d">$</span><span class="d">$</span>  | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>__/   | <span class="d">$</span><span class="d">$</span>  | <span class="d">$</span><span class="d">$</span>
   | <span class="d">$</span><span class="d">$</span>    | <span class="d">$</span><span class="d">$</span>  | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>      | <span class="d">$</span><span class="d">$</span>  | <span class="d">$</span><span class="d">$</span>
   | <span class="d">$</span><span class="d">$</span>    |  <span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span>/      | <span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span>| <span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span>|  <span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span><span class="d">$</span>/
   |__/     \\______/       |________/|________/ \\______/ 
</pre>
<div>`
export default class MainTitle extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}