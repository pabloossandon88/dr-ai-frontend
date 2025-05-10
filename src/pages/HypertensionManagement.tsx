import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Label from '../components/Label';
import Modal from '../components/Modal';
import { HeartPulse, AlertTriangle, CalendarCheck, Activity } from "lucide-react";


const HypertensionManagement = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const mostrarModal = (e: React.FormEvent) => {
    e.preventDefault();
    setModalAbierto(true);
  };

  return (
    <MainLayout>
        {/*
        Hypertension
        */}
        <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-teal-700 text-2xl font-semibold mb-4">Control de Hipertensión</h2>
  
  <form onSubmit={mostrarModal} className="space-y-4">
  <div className="flex gap-x-4">
                  <div className="w-1/2">
                    <Label text="Fecha" />
                    <input
                      type="date"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="w-1/2">
                    <Label text="Hora" />
                    <input
                      type="time"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>


    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label text="Presión Sistólica (mmHg)" />
        <input type="number" placeholder="Ej: 120" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>

      <div>
        <Label text="Presión Diastólica (mmHg)" />
        <input type="number" placeholder="Ej: 80" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>
    </div>

    <div>
      <Label text="Frecuencia Cardíaca (bpm)" />
      <input type="number" placeholder="Ej: 70" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div>
      <Label text="Medicamentos Tomados" />
      <input type="text" placeholder="Ej: Losartán 50mg" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div>
      <Label text="Observaciones" />
      <textarea placeholder="¿Algo que destacar hoy?" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
    </div>

    <div>
      <button type="submit" className="w-full bg-teal-500 ml-0 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition">
        Realizar Calculo
      </button>
    </div>
  </form>

  <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)}>
    
  <div className="space-y-6 text-gray-800 p-4">
      <h2 className="text-2xl font-bold text-teal-600 flex items-center gap-2">
        <HeartPulse className="w-6 h-6" />
        Ajuste de Tratamiento para Hipertensión
      </h2>

      {/* Resultado principal */}
      <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600 shadow-sm">
        <p className="text-lg font-semibold">
          Recomendación: <span className="text-teal-700">Aumentar Enalapril a 20 mg cada 12 horas</span>.
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Basado en presión arterial sistólica persistente sobre 150 mmHg en tratamiento actual.
        </p>
      </div>

      {/* Detalles clínicos */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">Presión sistólica</p>
          <p className="text-lg font-medium text-gray-800">156 mmHg</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">Presión diastólica</p>
          <p className="text-lg font-medium text-gray-800">94 mmHg</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">Fármaco actual</p>
          <p className="text-lg font-medium text-gray-800">Enalapril 10 mg cada 12 h</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">Frecuencia cardíaca</p>
          <p className="text-lg font-medium text-gray-800">78 lpm</p>
        </div>
      </div>

      {/* Advertencia o sugerencia */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md flex items-start gap-3">
        <AlertTriangle className="text-yellow-500 w-5 h-5 mt-1" />
        <p className="text-sm text-gray-700">
          Sugerencia: reevaluar en 1 semana. Evitar combinación con AINEs si hay riesgo de deterioro renal.
        </p>
      </div>

      {/* Información adicional */}
      <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
        <span className="flex items-center gap-1">
          <CalendarCheck className="w-4 h-4" /> Última evaluación: 10 mayo 2025
        </span>
        <span className="flex items-center gap-1">
          <Activity className="w-4 h-4" /> Objetivo: &lt;140/90 mmHg
        </span>
      </div>
    </div>

    <button
      onClick={() => setModalAbierto(false)}
      className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
    >
      Cerrar
    </button>
  </Modal>
</div>

    </MainLayout>
  );
};

export default HypertensionManagement;
