import React from 'react';
import MainLayout from '../layouts/MainLayout';


const DiabetesAdjustment = () => {
  return (
    <MainLayout>
        Ajuste de Fármacos - Diabetes

        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-4">Formulario de Control Diabético</h2>
            
            <form className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-700">Fecha</label>
                <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700">Hora</label>
                <input type="time" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700">Nivel de Glucosa (mg/dL)</label>
                <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700">Medicamentos Tomados</label>
                <input type="text" placeholder="Ej: Metformina 850mg" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700">Observaciones</label>
                <textarea  placeholder="¿Algo que destacar hoy?" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>

                <div>
                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition">
                    Guardar Registro
                </button>
                </div>
            </form>
            </div>

    </MainLayout>
  );
};

export default DiabetesAdjustment;
