import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bai1 from "./Bai1"
import Bai2 from './Bai2'
import Bai3 from './Bai3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bai1/>
    <Bai2/>
    <Bai3/>
  </StrictMode>,
)
