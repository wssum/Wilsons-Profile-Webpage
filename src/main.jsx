import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import ResponsiveAppBar from './navBar'
import Footer from './footer';
import SideBar from './sideBar'
import HomePg from './homePg'
import ProjPg from './projects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
      <ResponsiveAppBar />

      <div id="main-content">
        <SideBar />

        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/projects" element={<ProjPg />} />
        </Routes>
      </div>

    </BrowserRouter>
    {
   /*<Footer/>*/
    }
  </StrictMode>,
)
