import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero"
import Login from "../pages/Login";
import Servicios from "../pages/Servicios";
import Agendamiento from "../pages/Agendamiento";

const Myroutes = () => {
  return (
    <Routes>
      <Route path="/" element={< Hero />} />
      <Route path="/src/pages/Servicios.jsx" element={<Servicios />}/> <Route/>
      <Route path="/src/pages/Agendamiento.jsx" element={<Agendamiento />} /><Route/>
      <Route path="/src/pages/Login.jsx" element={<Login />} /><Route/>
    </Routes>
  )
}

export default Myroutes