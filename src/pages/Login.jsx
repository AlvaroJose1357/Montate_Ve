import React, { useState } from "react";
import { IoIosMail, IoMdEye, IoMdEyeOff } from "react-icons/io";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }
    if (password.length < 6) {
      toast.error("La contraseña debe contener más caracteres", {
        theme: "dark",
      });
      return;
    }
  };

  return (
    <section className="grid grid-flow-cols-1 w-full max-h-full">
      <div className="bg-[#143959] md:col-span-5 flex items-start justify-center p-8 h-[100vh] ">
        <div className="bg-white p-8 rounded-lg w-96">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-center"> Iniciar Sesión</h1>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
            <div className="relative">
              <IoIosMail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="Email"
                className=" w-full border border-orange-500 outline-none py-2 px-8 rounded-lg"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              
              <input
                type={showPassword ? "text" : "password"}
                className=" w-full border border-orange-500 outline-none py-2 px-8 rounded-lg"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <IoMdEyeOff
                  onClick={handleShowPassword}
                  className="absolute right-2 top-1/2 -translate-y-2 text-gray-500 hover:cursor-pointer"
                />
              ) : (
                <IoMdEye
                  onClick={handleShowPassword}
                  className="absolute right-2 top-1/2 -translate-y-2 text-gray-500 hover:cursor-pointer"
                />
              )}
            </div>
            <div>
              <button className="mt-6 bg-orange-500 text-white w-full py-2 px-8 rounded-lg hover:scale-105 transition-all">
                Ingresar
              </button>
            </div>
          </form>
          <div className="text-center  text-gray-500">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/CrearCuenta"
              className="text-orange-500 font-bold hover:underline transition-all"
            >
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;