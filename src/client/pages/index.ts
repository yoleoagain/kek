import { plotTextToNode } from '../utils/dom'
import { ABOUT_TEXT } from '../shared'

window.onload = () => {
  plotTextToNode(ABOUT_TEXT, '.about-text')
} 