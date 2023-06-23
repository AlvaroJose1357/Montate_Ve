import React from 'react'
import imagenLogo from "../img/logotipo_bicicleta_.png";
import { FaFacebook, FaWhatsapp, FaInstagram} from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-gray-500 p-8 xl:p-20">
        <div className="container mx-auto lg:px-10 flex justify-around">
            <div className="flex flex-col md:flex-row items-center space-x-24">
                <div className="flex w-full object-scale-down justify-center"> {/*Logo */}
                    <img src={imagenLogo} alt="logo" className="w-52" />
                </div>
                <div className="md:mt-12 text-white font-bold text-sm md:text-base ">{/*Conctatos*/}
                    <h2 className=" mt-3 font-extrabold text-white text-center">
                        Contactos
                    </h2>
                    <div className="space-y-3 p-3">
                        <div className="flex space-x-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6 fill-emerald-500">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            <p>aqui va Correo</p>
                        </div>
                        <div className="flex space-x-3">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                class="w-6 h-6 fill-emerald-500">
                                <path fill="var(--ci-primary-color, currentColor)" d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z" class="ci-primary"/>
                            </svg>
                            <p>aqui va direccion</p>
                        </div>
                        <div className="flex space-x-3">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                                class="w-6 h-6 fill-emerald-500">
                                <path d="M12.71,16.29l-.15-.12a.76.76,0,0,0-.18-.09L12.2,16a1,1,0,0,0-.91.27,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,1.3,1.31,1.46,1.46,0,0,0,.33-.22,1,1,0,0,0,.21-1.09A1,1,0,0,0,12.71,16.29ZM16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/>
                            </svg>
                            <p>aqui va telefono</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2 md:mt-12 lg:mt-16 text-white font-bold text-sm md:text-base ">
                    <h2 className="mt-3 font-extrabold text-white text-center">
                        Redes Sociales
                    </h2>
                    <div className="space-y-4 p-4">
                        <div className="flex space-x-3">
                            <a> <FaFacebook className="fill-emerald-500 text 4xl w-16" href=""/>Facebook</a>
                            <a> <FaWhatsapp className="fill-emerald-500 text 4xl w-16" href=""/>Whatsapp</a>
                            <a> <FaInstagram className="fill-emerald-500 text 4xl w-16" href=""/>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer