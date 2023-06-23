import React from "react";
import { Accordion } from "../components/Accordion";

const Servicios = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-full">
      <div className="h-[500px] flex flex-col text-center gap-4 bg-gray-100 rounded-lg">
        <h1 className="flex justify-center text-xl font-bold text-white bg-[#143959] px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest">
          Mantenimiento Basico
        </h1>
        <span className="flex justify-center text-4xl uppercase font-extrabold text-gray-900 mt-5">
          $50.000
        </span>
        <ul className="flex flex-col gap-4 px-4 py-8">
          <li>-Revisión y diagnóstico.</li>
          <li>-Lavado de la bicicleta.</li>
          <li>-Revisión de cadena y aceitada de cadena.</li>
          <li>-Revisión de aros y ruedas.</li>
          <li>-Revisión de frenos y pastillas.</li>
        </ul>
        <div className="mb-6">
          <button className="bg-orange-500 hover:bg-gray-800 transition-colors text-white px-6 py-2 rounded-lg">
            Comprar
          </button>
        </div>
      </div>
      <div className="h-[600px] flex flex-col text-center gap-4 bg-gray-100 rounded-lg shadow-lg z-10">
        <h1 className="flex justify-center text-xl font-bold text-white bg-[#143959] px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest relative">
          Mantenimiento Completo
          <span className="absolute -bottom-20 -left-4 text-sm rotate-90 bg-orange-500 p-2 rounded-r-lg">
            Recomendado
          </span>
        </h1>
        <span className="flex justify-center text-4xl uppercase font-extrabold text-gray-900 mt-5">
          $150.000
        </span>
        <ul className="flex flex-col gap-2 px-2 py-6">
          <li>-Revisión y diagnostico.</li>
          <li>-Lavado de la bicicleta.</li>
          <li>-Revisión de cadena y aceitada de cadena</li>
          <li>-Revisión de aros.</li>
          <li>-Revisión de pastillas y calibrada de frenos.</li>
          <li>-Calibrada de cambios.</li>
          <li>-Revisión y engrasado de rodamientos del eje central.</li>
          <li>-Revisión y engrasado de manzanas de los aros.</li>
          <li>-Mantenimiento de la suspension delantera</li>
        </ul>
        <div className="mb-6">
          <button className="bg-orange-500 hover:bg-gray-800 transition-colors text-white px-6 py-2 rounded-lg">
            Comprar
          </button>
        </div>
      </div>
      <div className="h-[500px] flex flex-col text-center gap-4 bg-gray-100 rounded-lg">
        <h1 className="flex justify-center text-xl font-bold text-white bg-[#143959] px-2 py-4 rounded-tl-lg rounded-tr-lg tracking-widest">
          Mantenimiento General
        </h1>
        <span className="flex justify-center text-4xl uppercase font-extrabold text-gray-900 mt-5">
          $100.000
        </span>
        <ul className="flex flex-col gap-1 px-1 py-3">
          <li>-Revisión y diagnostico.</li>
          <li>-Lavado de la bicicleta.</li>
          <li>-Revisión de cadena y aceitada de cadena</li>
          <li>-Revisión de aros.</li>
          <li>-Revisión de pastillas y calibrada de frenos.</li>
          <li>-Calibrada de cambios.</li>
          <li>-Revisión y engrasado de rodamientos del eje central.</li>
          <li>-Revisión y engrasado de manzanas de los aros.</li>
        </ul>
        <div className="mb-6">
          <button className="bg-orange-500 hover:bg-gray-800 transition-colors text-white px-6 py-2 rounded-lg">
            Comprar
          </button>
        </div>
      </div>
      
         
      
      
    </div>
  );
};

export default Servicios;