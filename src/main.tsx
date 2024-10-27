import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'

// https://www.youtube.com/watch?app=desktop&v=PN4uPBEfxCQ

createRoot(document.getElementById('root')!).render(
  <HashRouter basename="/test_deploy">
    <App />
  </HashRouter>
)
