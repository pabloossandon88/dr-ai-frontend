import React from 'react';
import MainLayout from '../layouts/MainLayout';


const GeneralConditions = () => {
  return (
    <MainLayout>
        Informacion General

        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
  <h2 className="text-2xl font-semibold mb-4">Formulario de Control General</h2>
  
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">Fecha</label>
      <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    
  </form>
</div>

    </MainLayout>
  );
};

export default GeneralConditions;
