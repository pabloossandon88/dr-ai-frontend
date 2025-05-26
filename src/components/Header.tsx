import { useNavigate } from "react-router-dom";
import { Menu, User } from "lucide-react"; // Usamos íconos de lucide-react
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import UserMenu from "./UserMenu";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth0();

  const [imageLoaded, setImageLoaded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
 

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
      <UserMenu />

    </header>
  );
};

export default Header;
