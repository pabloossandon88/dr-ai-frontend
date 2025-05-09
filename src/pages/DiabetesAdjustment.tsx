import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Label from '../components/Label';


const DiabetesAdjustment = () => {
  return (
    <MainLayout>
        {/*
        Ajuste de Fármacos - Diabetes
        */}
        <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-teal-700 text-2xl font-semibold">Control Diabetico</h2>
            <h3 className="text-teal-700 text-md font-semibold mb-4">Ajuste de Fármacos</h3>
            
            <form className="space-y-4">
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
            </div>

    </MainLayout>
  );
};

export default DiabetesAdjustment;
