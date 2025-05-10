import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Label from '../components/Label';
import Modal from '../components/Modal';
import { Droplet,  AlertCircle, Target, CalendarClock } from "lucide-react";


const CholesterolManagement = () => {

  const [modalAbierto, setModalAbierto] = useState(false);
  const mostrarModal = (e: React.FormEvent) => {
    e.preventDefault();
    setModalAbierto(true);
  };

  return (
    <MainLayout>
      <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-teal-700 text-2xl font-semibold mb-4">Control de Colesterol</h2>

        <form onSubmit={mostrarModal} className="space-y-6">
          <div>
            <Label text="Fecha" />
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label text="Hora" />
            <input
              type="time"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label text="Colesterol Total (mg/dL)" />
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label text="HDL (colesterol bueno)" />
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label text="LDL (colesterol malo)" />
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label text="Triglicéridos" />
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label text="Medicamentos Tomados" />
            <input
              type="text"
              placeholder="Ej: Atorvastatina 20mg"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label text="Observaciones" />
            <textarea
              placeholder="¿Algo que destacar hoy?"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-teal-500 ml-0 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition"
            >
              Calcular
            </button>
          </div>
        </form>

        <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)}>
    
        <div className="space-y-6 text-gray-800 p-4">
      <h2 className="text-2xl font-bold text-teal-600 flex items-center gap-2">
        <Droplet className="w-6 h-6" />
        Ajuste de Tratamiento para Colesterol
      </h2>

      {/* Resultado principal */}
      <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600 shadow-sm">
        <p className="text-lg font-semibold">
          Recomendación: <span className="text-teal-700">Iniciar Rosuvastatina 20 mg una vez al día</span>.
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Basado en LDL ≥190 mg/dL y presencia de factores de riesgo cardiovascular.
        </p>
      </div>

      {/* Detalles clínicos */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">LDL (colesterol malo)</p>
          <p className="text-lg font-medium text-gray-800">196 mg/dL</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">HDL (colesterol bueno)</p>
          <p className="text-lg font-medium text-gray-800">42 mg/dL</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">Triglicéridos</p>
          <p className="text-lg font-medium text-gray-800">178 mg/dL</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">Riesgo cardiovascular</p>
          <p className="text-lg font-medium text-gray-800">Moderado</p>
        </div>
      </div>

      {/* Advertencia o sugerencia */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md flex items-start gap-3">
        <AlertCircle className="text-yellow-500 w-5 h-5 mt-1" />
        <p className="text-sm text-gray-700">
          Control de perfil lipídico en 8 semanas. Considerar ajustes si LDL no baja &gt;50% desde valor basal.
        </p>
      </div>

      {/* Información adicional */}
      <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
        <span className="flex items-center gap-1">
          <CalendarClock className="w-4 h-4" /> Última toma: 9 mayo 2025
        </span>
        <span className="flex items-center gap-1">
          <Target className="w-4 h-4" /> Objetivo LDL: &lt;100 mg/dL
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

export default CholesterolManagement;
