import { render } from 'preact'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import Home from './home.tsx'

render(<Home />, document.getElementById('root')!)
