import { useAuth0 } from "@auth0/auth0-react";
import { User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const { user, logout } = useAuth0();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative">
      {/* Botón del avatar */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-1 rounded-full border border-gray-300 hover:ring-2 hover:ring-teal-500 transition"
      >
        {user?.picture && imageLoaded ? (
          <img
            src={user.picture}
            alt={user.name || "Usuario"}
            className="w-10 h-10 rounded-full object-cover"
            onError={() => setImageLoaded(false)}
          />
        ) : (
          <User className="w-8 h-8 text-gray-600" />
        )}
      </button>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
          <div className="px-4 py-2 text-sm text-gray-800 border-b border-gray-200">
            
            <span>{user?.name || user?.email}</span>
          </div>
          <button
            onClick={handleLogout}
            className="block w-full text-black text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
