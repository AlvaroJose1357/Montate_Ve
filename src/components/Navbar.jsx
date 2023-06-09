import React from 'react'
import logo from "../img/logotipo_bicicleta_.png";
import { BsPersonCircle, BsTools } from 'react-icons/bs';
import{ AiOutlineSchedule} from "react-icons/ai";
import{BiHomeCircle} from "react-icons/bi";


const Navbar = () => {

  return (
    <navbar className="bg-slate-600  flex items-center  w-full p-4 h-[10vh] z=50 ">
      <div  className=" w-14 h-14  hover:bg-slate-400 flex justify-start cursor-pointer ">
        <img src={logo} alt="logo"/>
      </div>
      <nav  className={` flex-1 flex justify-center items-center gap-20 font-bold hover:font-serif  duration-500  text-black`}>
        <button> <a href="/src/pages/P_inicio.jsx" className=" flex items-center cursor-pointer hover:bg-slate-300">
        <BiHomeCircle />Inicio 
        </a></button>
        <button> <a href="/src/pages/Servicios.jsx" className=" flex items-center cursor-pointer  hover:bg-slate-300"><BsTools />
        Servicios 
        </a></button>
        <button><a href="/src/pages/Agendamiento.jsx" className="flex items-center cursor-pointer  hover:bg-slate-300"><AiOutlineSchedule />
        Agendamiento 
        </a></button>
      </nav> 
        <button><a href="/src/pages/Login.jsx" className="bg-white hover:font-serif text-black font-[poppins] pv-2 px-6 rounded md:ml-8 hover:bg-blue-600 flex items-center duration-500> <BsPersonCircle" ><BsPersonCircle />
      Login
        </a></button>
    </navbar>
  );
};
export default Navbar;