import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App'
import Home from './Home'
import About from './About'
import Nothing from './Nothing'

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nothing" element={<Nothing />} />
        <Route path="*" element={<Nothing />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)
