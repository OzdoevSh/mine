import { Route, Routes } from "react-router-dom";
import About from "../components/sections/About/About";
import Projects from "../components/sections/Projects/Projects";
import Skills from "../components/sections/Skills/Skills";

export default function Router(){
  return(
    <Routes>
      <Route path='/' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/skills' element={<Skills/>} />
    </Routes>
  )
}