// src/components/AuthRedirectHandler.tsx
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthRedirectHandler = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Detecta si Auth0 acaba de redirigir con tokens
    const isRedirectFromAuth = location.pathname === "/" && location.search.includes("code=");

    if (!isLoading && isAuthenticated && isRedirectFromAuth) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, isLoading, location, navigate]);

  return null;
};

export default AuthRedirectHandler;
