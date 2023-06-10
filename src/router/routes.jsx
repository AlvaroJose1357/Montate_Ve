import {BrowserRouter, Routes, Route } from "react-router-dom";
import P_Inicio from "../pages/P_Inicio"
import Login from "../pages/Login";
import Servicios from "../pages/Servicios";
import Agendamiento from "../pages/Agendamiento";

const Myroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<P_Inicio />} />
      <Route path="/Servicios.jsx" element={<Servicios />} /> 
      <Route path="/Agendamiento.jsx" element={<Agendamiento />} /> 
      <Route path="/Login.jsx" element={<Login />} />
    </Routes>
  );
};

export default Myroutes