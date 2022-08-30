import { hydrate, render, Renderer } from 'react-dom'

import { App } from './components/app'

const rootElement = document.querySelector('#root')

const renderer: Renderer = rootElement?.hasChildNodes() ? hydrate : render

renderer(<App />, rootElement)