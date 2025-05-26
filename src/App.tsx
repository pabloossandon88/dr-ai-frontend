import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ChatInterface from "./pages/ChatInterface";
import CholesterolManagement from "./pages/CholesterolManagement";
import DiabetesAdjustment from "./pages/DiabetesAdjustment";
import HypertensionManagement from "./pages/HypertensionManagement";
import GeneralConditions from "./pages/GeneralConditions";
import MainLayout from './layouts/MainLayout';
import { Pill, HeartPulse, Activity, BookOpen, MessageSquare } from "lucide-react";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from './components/ProtectedRoute';
import AuthRedirectHandler from "./components/AuthRedirectHandler";


const Home = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-5xl w-full p-3 bg-gray">
        <div className="grid grid-cols-1 grid-cols-12 gap-3">
          <a onClick={() => navigate("/diabetes")} className="col-span-7 bg-teal-100 rounded-xl shadow-md p-3 hover:bg-blue-50 transition flex justify-between items-start">
            <div>
              <h2 className="text-lg text-teal-700 font-semibold mb-2">Ajuste de Fármacos</h2>
              <p className="text-xs text-teal-700 mb-2">Diabetes</p>
            </div>
            <Pill className="text-teal-700 w-7 h-7 self-end" />
          </a>

          <a onClick={() => navigate("/hipertension")} className="col-span-5 bg-white rounded-xl shadow-md p-3 hover:bg-blue-50 transition flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-teal-700 mb-2">Hipertensión</h2>
              <p className="text-xs text-teal-700 mb-2">Recomendaciones y ajustes</p>
            </div>
            <HeartPulse className="text-teal-700 w-7 h-7 self-end" />
          </a>

          <a onClick={() => navigate("/colesterol")} className="col-span-5 bg-white rounded-xl shadow-md p-3 hover:bg-blue-50 transition flex justify-between items-start">
            <div>
              <h2 className="text-lg text-teal-700 font-semibold mb-2">Colesterol</h2>
              <p className="text-xs text-teal-700 mb-2">Información y seguimiento</p>
            </div>
            <Activity className="text-teal-700 w-7 h-7 self-end" />
          </a>

          <a onClick={() => navigate("/enfermedad")} className="col-span-7 bg-teal-100 rounded-xl shadow-md p-3 hover:bg-blue-50 transition flex justify-between items-start">
            <div>
              <h2 className="text-lg text-teal-700 font-semibold mb-2">Información General</h2>
              <p className="text-xs text-teal-700 mb-2">Sobre enfermedades comunes</p>
            </div>
            <BookOpen className="text-teal-700 w-7 h-7 self-end" />
          </a>

          <a onClick={() => navigate("/chat")} className="col-span-12 bg-teal-500 rounded-xl shadow-md p-3 hover:bg-blue-50 transition flex justify-between items-start">
            <div>
              <h2 className="text-lg text-white font-semibold mb-2">Doctor Virtual</h2>
              <p className="text-xs text-teal-100 mb-2">Habla con el asistente médico</p>
            </div>
            <MessageSquare className="text-white w-7 h-7 self-end" />
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      //navigate("/home");
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <>
      <AuthRedirectHandler />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/diabetes" element={<ProtectedRoute><DiabetesAdjustment /></ProtectedRoute>} />
        <Route path="/colesterol" element={<ProtectedRoute><CholesterolManagement /></ProtectedRoute>} />
        <Route path="/hipertension" element={<ProtectedRoute><HypertensionManagement /></ProtectedRoute>} />
        <Route path="/enfermedad" element={<ProtectedRoute><GeneralConditions /></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><ChatInterface /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
