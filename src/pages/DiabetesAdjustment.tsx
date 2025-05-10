import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Label from '../components/Label';
import Modal from '../components/Modal';
import { AlertCircle, Syringe, CalendarCheck, Activity } from "lucide-react";



const DiabetesAdjustment = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const mostrarModal = (e: React.FormEvent) => {
    e.preventDefault();
    setModalAbierto(true);
  };

  return (
    <MainLayout>
        {/*
        Ajuste de Fármacos - Diabetes
        */}
        <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-teal-700 text-2xl font-semibold">Control Diabetico</h2>
            <h3 className="text-teal-700 text-md font-semibold mb-4">Ajuste de Fármacos</h3>
            
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

                <div>
                  <Label text="Nivel de Glucosa (mg/dL)" />
                  <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                  <Label text="Medicamentos Tomados" />
                  <input type="text" placeholder="Ej: Metformina 850mg" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                  <Label text="Observaciones" />
                  <textarea  placeholder="¿Algo que destacar hoy?" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>

                <div className="flex gap-x-4">
                  <button type="submit" className="w-full bg-teal-500 text-white font-semibold ml-0 py-2 px-4 rounded-md hover:bg-blue-700 transition">
                      Calcular
                  </button>
                </div>
            </form>

            <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)}>
              
            <div className="space-y-6 text-gray-800 p-4">
      <h2 className="text-2xl font-bold text-teal-600 flex items-center gap-2">
        <Syringe className="w-6 h-6" />
        Resultado del Ajuste de Insulina
      </h2>

      {/* Resultado principal */}
      <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600 shadow-sm">
        <p className="text-lg font-semibold">
          Dosis sugerida: <span className="text-teal-700">18 unidades de insulina basal</span> cada 24 horas.
        </p>
        <p className="text-sm text-gray-600 mt-1">Basado en los niveles de glicemia y peso corporal actual.</p>
      </div>

      {/* Detalles del cálculo */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">Peso del paciente</p>
          <p className="text-lg font-medium text-gray-800">72 kg</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">Glicemia en ayunas</p>
          <p className="text-lg font-medium text-gray-800">162 mg/dL</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">HbA1c estimada</p>
          <p className="text-lg font-medium text-gray-800">7.8%</p>
        </div>
        <div className="bg-white p-3 rounded-md shadow">
          <p className="text-sm text-gray-500">Frecuencia actual</p>
          <p className="text-lg font-medium text-gray-800">1 vez/día</p>
        </div>
      </div>

      {/* Recomendación final */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md flex items-start gap-3">
        <AlertCircle className="text-yellow-500 w-5 h-5 mt-1" />
        <p className="text-sm text-gray-700">
          Recomendación: monitorear glicemia en ayunas por 3 días. Reevaluar dosis si se mantiene 130 mg/dL.
        </p>
      </div>

      {/* Última actualización */}
      <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
        <span className="flex items-center gap-1">
          <CalendarCheck className="w-4 h-4" /> Cálculo realizado el: 10 mayo 2025
        </span>
        <span className="flex items-center gap-1">
          <Activity className="w-4 h-4" /> Vía: Subcutánea
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

export default DiabetesAdjustment;
