import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Syringe, Bot, MousePointerClick } from "lucide-react";
import atencionDoctor from '../assets/images/atencion-doctor.png';

export default function LandingPage() {
    const navigate = useNavigate();
    const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
    return (
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh]" >
        <div
            className="absolute inset-0 bg-cover bg-center transform scale-x-[-1]"
            style={{ backgroundImage: `url(${require('../assets/images/cover.png')})` }}
        ></div>
          <div className="absolute inset-0 bg-teal-500 opacity-50"></div>
          <div className="max-w-5xl mx-auto text-left relative z-10 py-10 px-6">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-10 ">
            Asistente <br/>Médico <br/>Inteligente
            </h1>
            <p className="text-lg text-white md:text-xl mb-8">
              Simplifica tus decisiones clínicas <br/> con un asistente especializado <br/> que calcula, guía y acompaña <br/>  tus decisiones médicas.
            </p>
            <button 
                onClick={() => navigate("/home")}
                className="bg-teal-500 text-white ml-0 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Probar Ahora!
            </button>
          </div>
        </section>
  
        {/* Features */}
        <section className="py-3 px-3 bg-gray-50">
            <div className="grid grid-cols-3 gap-1 text-center">
                <div className="p-3 bg-white rounded-xl shadow-md">
                    <Syringe className="mx-auto text-teal-600 w-8 h-8 mb-3" />
                    <h3 className="text-lg text-teal-600 font-semibold">Ajuste de Fármacos</h3>
                    <p className="text-xs text-teal-600">Calcula dosis precisas para diabetes, hipertensión y más en segundos.</p>
                </div>

                <div className="p-3 bg-white rounded-xl shadow-md">
                    <Bot className="mx-auto text-teal-600 w-8 h-8 mb-3" />
                    <h3 className="text-lg text-teal-600 font-semibold">Basado en IA</h3>
                    <p className="text-xs text-teal-600">Entrenado para hablar como un médico real, con precisión y profesionalismo.</p>
                </div>

                <div className="p-3 bg-white rounded-xl shadow-md">
                    <MousePointerClick className="mx-auto text-teal-600 w-8 h-8 mb-3" />
                    <h3 className="text-lg text-teal-600 font-semibold">Fácil de Usar</h3>
                    <p className="text-xs text-teal-600">Diseñado para médicos en terreno. Rápido, limpio y sin distracciones.</p>
                </div>
            </div>
        </section>
  
        {/* Use Case */}
        <section className="py-20 px-6 bg-white">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
  <div className="relative rounded-xl shadow-md overflow-hidden">
      <img 
        src={atencionDoctor} 
        alt="Atención Doctor" 
        className="w-full h-auto object-cover"
      />
      {/* Layer teal con opacidad */}
      <div className="absolute inset-0 bg-teal-500 opacity-40"></div>
    </div>
    <div>
      <h2 className="text-3xl text-teal-600 font-bold mb-4">Asiste tus decisiones clínicas, en el momento preciso</h2>
      <p className="text-teal-600 mb-6">
        Asistente Clínico Digital te permite calcular tratamientos, revisar síntomas frecuentes y acceder a una conversación médica realista en segundos. 
        Ideal para médicos ocupados que necesitan precisión y velocidad.
      </p>
      
      <button 
  onClick={() => setMostrarExplicacion(!mostrarExplicacion)}
  className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
  {mostrarExplicacion ? "Ocultar explicación" : "Conocer cómo funciona"}
</button>
<div
  className={`transition-all duration-700 ease-in-out overflow-hidden ${
    mostrarExplicacion ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
  }`}
>
  <div className="flex flex-col md:flex-row gap-4">
    <div className="flex-1 bg-teal-50 p-4 rounded-lg shadow text-center">
      <h3 className="text-sm font-bold text-teal-700 mb-1">1. Ingreso de datos</h3>
      <p className="text-xs text-gray-700">Seleccionas el cálculo y completas presión, glicemia, etc.</p>
    </div>
    <div className="flex-1 bg-teal-50 p-4 rounded-lg shadow text-center">
      <h3 className="text-sm font-bold text-teal-700 mb-1">2. Evaluación</h3>
      <p className="text-xs text-gray-700">La IA analiza y sugiere tratamientos basados en guías clínicas.</p>
    </div>
    <div className="flex-1 bg-teal-50 p-4 rounded-lg shadow text-center">
      <h3 className="text-sm font-bold text-teal-700 mb-1">3. Resultados</h3>
      <p className="text-xs text-gray-700">Recomendaciones claras, editables y listas para usar.</p>
    </div>
  </div>
</div>
    </div>
  </div>
</section>

  
        {/* Testimonios 
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-12">Lo que dicen los profesionales</h2>
            <div className="space-y-8">
              <blockquote>
                <p className="italic text-gray-700">"En urgencias es clave tener una herramienta como esta. Rápida, clara y muy útil."</p>
                <footer className="mt-2 text-sm text-gray-500">— Dr. Manuel Rojas, Medicina General</footer>
              </blockquote>
              <blockquote>
                <p className="italic text-gray-700">"Es como tener un segundo criterio clínico al alcance de la mano."</p>
                <footer className="mt-2 text-sm text-gray-500">— Dra. Catalina Urzúa, Internista</footer>
              </blockquote>
            </div>
          </div>
        </section>
        */}
  
        {/* CTA Final */}
        <section className="py-20 px-6 bg-teal-500 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Empieza a usar el Asistente Clinico Digital hoy</h2>
          <p className="mb-6 text-lg">Gratis por tiempo limitado. Sin instalación. 100% web.</p>
          <button 
            onClick={() => navigate("/home")}
            className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Probar Ahora
          </button>
        </section>
  
        <footer className="text-center text-teal-400 text-sm py-6">
          © 2025 Asistente Clinico Digital. Todos los derechos reservados.
        </footer>
      </div>
    );
  }
  