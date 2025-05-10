import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Label from '../components/Label';
import Modal from '../components/Modal';

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
    <h2 className="text-xl font-semibold mb-4">Resultado del Cálculo</h2>
    <p className="text-gray-700 mb-2">El tratamiento recomendado es...</p>
    {/* Aquí puedes insertar los datos dinámicos del cálculo */}
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
