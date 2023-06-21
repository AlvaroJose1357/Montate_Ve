import React from 'react'
import logo from "../img/logotipo_bicicleta_.png";
import { BsPersonCircle, BsTools } from 'react-icons/bs';
import{ AiOutlineSchedule} from "react-icons/ai";
import{BiHomeCircle} from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <navbar className="bg-gray-500  flex items-center  w-full p-10 h-[13vh] z=50 ">
      <div  className=" w-auto h-36  hover:bg-slate-400 flex justify-start cursor-pointer ">
        <img src={logo} alt="logo"/>
      </div>
      <nav  className={` flex-1 flex justify-center items-center gap-48 font-bold hover:font-serif  duration-500  text-black text-3xl`}>
       
        <Link to="/"  className=" flex items-center cursor-pointer hover:bg-slate-300">
        Inicio <BiHomeCircle/>
        </Link>
        <Link to="/Servicio" className=" flex items-center cursor-pointer  hover:bg-slate-300">
        Servicios <BsTools />
        </Link>
        <Link to="/Agendamiento" className="flex items-center cursor-pointer  hover:bg-slate-300"> 
        Agendamiento <AiOutlineSchedule />
        </Link>
      </nav> 
      <Link to="/Login" className="bg-white hover:font-serif text-3xl text-black font-[poppins] pv-2 px-6 rounded md:ml-8 hover:bg-blue-600 flex items-center duration-500> <BsPersonCircle" >
      Login <BsPersonCircle />
        </Link>
    </navbar>
  );
};
export default Navbar;