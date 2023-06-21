import Footer from "./components/Footer"
import Navbar from './components/Navbar';
import P_Inicio from './pages/P_inicio/';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages 
import P_inicio from "./pages/P_inicio";
import Servicios from "./pages/Servicios";
import Agendamiento from "./pages/Agendamiento";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="flex w-full">
        <Routes>
        <Route path="/" element={<P_inicio/>} />
        <Route path="/Servicios" element={<Servicios/>} />
        <Route path="/Agendamiento" element={<Agendamiento/>} />
        <Route path="/Login" element={<Login/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
   </>
 );
}