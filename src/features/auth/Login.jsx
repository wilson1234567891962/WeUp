import React from "react";
import { Link } from 'react-router-dom';
const LoginForm = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col justify-center items-center p-6">
      {/* Logo WeUp */}
      <div className="mb-6">
        <img
          src="/logo.svg" // Asegúrate de poner tu logo en public/
          alt="WeUp Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold text-[#2D26B5] mb-2">Iniciar Sesión</h1>
      <p className="text-gray-500 mb-10">Bienvenido de nuevo a WeUp</p>

      {/* Card Blanca */}
      <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 w-full max-w-[480px]">
        <form className="space-y-6">
          {/* Correo */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Tu contraseña"
                className="w-full px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button
                type="button"
                className="absolute right-4 top-3 text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Opciones Extra */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              Recordarme
            </label>
            <a
              href="#"
              className="text-[#2D26B5] font-semibold hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón Principal */}
          <button className="w-full bg-[#2D26B5] text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-900 transition-colors shadow-lg shadow-indigo-100">
            Iniciar Sesión
          </button>
        </form>
      </div>

      {/* Footer Registro */}
      {/* Footer Registro */}
      <p className="mt-10 text-gray-600">
        ¿No tienes una cuenta?{" "}
        <Link
          to="/register"
          className="text-[#2D26B5] font-bold cursor-pointer hover:underline"
        >
          Regístrate
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
