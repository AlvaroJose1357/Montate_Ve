import React from 'react';
import { useForm } from 'react-hook-form';

const CrearCuenta = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md px-6 py-4 bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Crear una cuenta</h2>
        <p>Hola  , Bienvenido a Montate Ve!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2">Nombres</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="text"
              {...register('nombre', {
                  required : true
                })}
            />
            {errors.nombre?.type === 'required' && <p>El campo del nombre es requerido</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Apellidos</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="text"
              {...register('apellido')}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Correo Electrónico</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="text"
              {...register('correo', { 
                required : true,
                pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/i 
                
              })}
            />
            {errors.correo?.type === 'required' && <p>El campo del correo es requerido</p>}
            {errors.correo?.type === 'pattern' && <p>El formato del correo es erroneo</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Contraseña</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="password"
              {...register('contraseña', { 
                required : true, 
                minLength: 8 })}
            />
            {errors.contraseña?.type === 'required' && <p>El campo del contraseña es requerido</p>}
            {errors.contraseña?.type === 'minLength' && <p>El campo de la contraseña necesita de un minimo de 8 caracteres </p>}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit">
            Crear cuenta
            </button>
        </form>
      </div>
    </div>
  );
};

export default CrearCuenta;
