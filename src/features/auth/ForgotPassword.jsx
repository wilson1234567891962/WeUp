import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col justify-center items-center p-6 font-sans">
      {/* Logo WeUp */}
      <div className="mb-6">
        <img 
 src={logo}
          alt="WeUp Logo" 
          className="w-20 h-20 object-contain mx-auto"
        />
      </div>

      <h1 className="text-3xl font-extrabold text-[#2D26B5] mb-2 text-center">
        Recuperar Contraseña
      </h1>
      <p className="text-gray-600 mb-8 text-center text-sm">
        Ingresa tu email para recibir un enlace de recuperación
      </p>

      {/* Card Blanca */}
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md relative">
        
        {/* Enlace Volver */}
        <div className="mb-6">
          <Link 
            to="/login" 
            className="inline-flex items-center text-sm font-semibold text-[#2D26B5] hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver
          </Link>
        </div>

        <form className="space-y-6">
          {/* Correo */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correo electrónico
            </label>
            <input 
              type="email" 
              placeholder="correo@ejemplo.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2D26B5] focus:border-[#2D26B5] transition-all sm:text-sm"
            />
          </div>

          {/* Botón Principal */}
          <button 
            type="submit"
            className="w-full bg-[#2D26B5] text-white py-3 rounded-lg font-semibold text-sm hover:bg-indigo-900 transition-colors"
          >
            Enviar Enlace de Recuperación
          </button>
        </form>

        {/* Caja de Consejo (Tip Box) */}
        <div className="mt-6 bg-[#FFFBEB] border border-[#FEF08A] rounded-xl p-4 flex items-start gap-3">
          {/* Icono de bombillo */}
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-6 h-6 bg-[#D97706] rounded-full flex items-center justify-center opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 118 0 .75.75 0 011.5 0 6 6 0 10-12 0 .75.75 0 011.5 0zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM5.636 5.636a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zM18.364 18.364a.75.75 0 01-1.06 0l-1.592-1.591a.75.75 0 011.061-1.06l1.591 1.59a.75.75 0 010 1.061z" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-[#92400E]">Consejo:</span> Si no tienes acceso a tu email, contacta a nuestro soporte para ayudarte a recuperar tu cuenta.
          </p>
        </div>

      </div>

      {/* Footer login */}
      <p className="mt-8 text-sm text-gray-600">
        ¿Recordaste tu contraseña?{' '}
        <Link 
          to="/login" 
          className="text-[#2D26B5] font-bold cursor-pointer hover:underline"
        >
          Volver al login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;