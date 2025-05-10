import { useNavigate } from "react-router-dom";
import { Menu, User } from "lucide-react"; // Usamos íconos de lucide-react

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full bg-teal-400 text-white p-4 flex justify-between items-center z-50 shadow-md">
      {/* Menú hamburguesa */}
      <button className="p-2 hover:bg-teal-500 rounded">
        <Menu className="w-6 h-6" />
      </button>

      {/* Título o logo */}
      <h1
        className="text-xl font-bold cursor-pointer select-none"
        onClick={() => navigate("/home")}
      >
        Asistente Clínico
      </h1>

      {/* Menú de usuario */}
      <div className="relative group">
        <button className="p-2 hover:bg-teal-500 rounded">
          <User className="w-6 h-6" />
        </button>
        <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={() => navigate("/")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
