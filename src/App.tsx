import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ChatInterface from "./pages/ChatInterface";
import CholesterolManagement from "./pages/CholesterolManagement";
import DiabetesAdjustment from "./pages/DiabetesAdjustment";
import HypertensionManagement from "./pages/HypertensionManagement";
import GeneralConditions from "./pages/GeneralConditions";
import MainLayout from './layouts/MainLayout';

const Home = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      
      <div className="max-w-5xl w-full p-6 bg-gray">
        {/*
        <h1 className="text-3xl font-bold text-center mb-8">🩺 Doctor Virtual Chileno</h1> 
        */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a  href="/diabetes" 
              onClick={() => navigate("/diabetes")}
              className="md:col-span-2 bg-white rounded-xl shadow-md p-6 hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold mb-2">Ajuste de Fármacos</h2>
            <p className="text-gray-600">Diabetes</p>
          </a>
          <a  href="/colesterol" 
              onClick={() => navigate("/colesterol")}
              className="bg-white rounded-xl shadow-md p-6 hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold mb-2">Control de Colesterol</h2>
            <p className="text-gray-600">Información y seguimiento</p>
          </a>
          <a  href="/hipertension" 
              onClick={() => navigate("/hipertension")}
              className="bg-white rounded-xl shadow-md p-6 hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold mb-2">Manejo de Hipertensión</h2>
            <p className="text-gray-600">Recomendaciones y ajustes</p>
          </a>
          <a  href="/enfermedad" 
              onClick={() => navigate("/enfermedad")}
              className="md:col-span-2 bg-white rounded-xl shadow-md p-6 hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold mb-2">Información General</h2>
            <p className="text-gray-600">Sobre enfermedades comunes</p>
          </a>
          <a  href="/chat" 
              onClick={() => navigate("/chat")}
              className="md:col-span-3 bg-white rounded-xl shadow-md p-6 hover:bg-blue-50 transition">
            <h2 className="text-xl font-semibold mb-2">Doctor Virtual</h2>
            <p className="text-gray-600">Habla con el asistente médico</p>
          </a>
        </div>

      </div>
    </MainLayout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diabetes" element={<DiabetesAdjustment />} />
        <Route path="/colesterol" element={<CholesterolManagement />} />
        <Route path="/hipertension" element={<HypertensionManagement />} />
        <Route path="/enfermedad" element={<GeneralConditions />} />
        <Route path="/chat" element={<ChatInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
