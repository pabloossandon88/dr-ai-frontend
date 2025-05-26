import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>; // o un loader estilizado
  }

  if (!isAuthenticated) {
    loginWithRedirect(); // también puedes redirigir manualmente
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
