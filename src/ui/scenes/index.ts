import { Subscription } from 'rxjs'
import { $scene } from '../../state/scenes'
import { Scene } from '../../types'

export default class MainScene extends HTMLElement {
    sceneSubscribtion: Subscription

    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.sceneSubscribtion = $scene.subscribe(this.sceneSubscriber.bind(this))
    }

    sceneSubscriber(value: Scene) {
        if (value === 'main') {
            this.renderFirstScene()
        }
    }

    renderFirstScene() {
        this.shadowRoot.innerHTML = ''
        this.shadowRoot.appendChild(
            document.createElement('scene-main')
        )
    }

    disconnectedCallback() {
        this.sceneSubscribtion.unsubscribe()
    }
}