import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bai1 from "./Bai1"
import Bai2 from './Bai2'
import Bai3 from './Bai3'
import Bai4 from './bai4'
import Bai5 from './Bai5'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bai1/>
    <Bai2/>
    <Bai3/>
    <Bai4/>
    <Bai5/>
  </StrictMode>,
)
