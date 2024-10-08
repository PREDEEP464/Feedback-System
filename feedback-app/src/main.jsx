import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import App from './App.jsx'
import Page2 from './Page2.jsx'
import Page3 from './page3.jsx'
import Final from './Final.jsx'
import Thankyou from './Thankyou.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/final" element={<Final/>} />
        <Route path="*" element={<Thankyou />} />
      </Routes>
    </Router>
  </StrictMode>
)
