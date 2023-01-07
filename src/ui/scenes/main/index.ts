import { delay } from 'rxjs';
import { ABOUT_TEXT, MAIN_TITLE_TEXT } from '../../../shared';
import { delayPromise, plotTextToNode } from '../../../utils';

const template = document.createElement('template')
template.innerHTML = /*html*/`
<style>
@import 'css/animations.css';

.profile__photo {
    font-size: 5px;
}

.animate {
    animation-fill-mode: forwards;
}

.about {
    display: flex;
}

.about__info {
    margin-left: -120px;
    margin-left: var(--gap);
    max-width: 550px;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: space-between;
}

.core-tech {
    margin-top: 10px;
    display: none;
    animation: slideFromTop .4s linear;
    animation: fade .4s linear;
}

#about-text:after {
    height: 18px;
    width: 6px;
    content: " ";
    background-color: #000;
    border-radius: 4px;
    display: inline-flex;
    margin-left: 4px;
}

#about-text.completed:after {
    animation: fade .7s infinite;
}

.hidden {
    display: none;
}
</style>
<div class="column"></div>
`

const profileTemplate = document.createElement('template')
/*
    <core-tech-list class="hidden"></core-tech-list>
*/
profileTemplate.innerHTML = /*html*/`
<h1 class="gb" id="hi"></h1>
<div id="about" class="about row">
    <p id="info-block" class="about__info column between">
        <span id="about-text" class="hidden"></span>
    </p>
</div>
`;

export default class MainScene extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.renderScene = this.renderScene.bind(this)
    }

    renderScene() {
        const titleNode = document.createElement('main-title')
        const wrap = this.shadowRoot.querySelector('.column') as HTMLDivElement
        wrap.appendChild(titleNode)
        const titleContainerNode = titleNode.shadowRoot.querySelector('.logo-container') as HTMLDivElement

        titleContainerNode.onanimationend = async () => {
            wrap.removeChild(titleNode)
            wrap.appendChild(profileTemplate.content.cloneNode(true))

            const H1 = this.shadowRoot.getElementById('hi') as HTMLHeadingElement
            const aboutBlock = this.shadowRoot.getElementById('about') as HTMLDivElement
            const avatarBlock = document.createElement('my-avatar') as HTMLDivElement
            const coreTechList = document.createElement('core-tech-list') as HTMLMarqueeElement
            const infoBlock = this.shadowRoot.getElementById('info-block') as HTMLDivElement

            avatarBlock.classList.add('profile__photo')
            await plotTextToNode(H1, MAIN_TITLE_TEXT, { delay: 10 })
            avatarBlock.classList.add('show')
            avatarBlock.classList.remove('hidden')
            aboutBlock.prepend(avatarBlock)
            const aboutTextNode = this.shadowRoot.getElementById('about-text')
            await delayPromise(1500)
            aboutTextNode.classList.remove('hidden')
            await plotTextToNode(aboutTextNode, ABOUT_TEXT, { delay: 10 })
            infoBlock.appendChild(coreTechList)
            // const docsTechNode = document.querySelector('.core-tech') as HTMLDivElement
            // docsTechNode.style.display = 'flex'
        }
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.renderScene()
    }
}