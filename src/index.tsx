import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/index.css';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dr-ai-cl.us.auth0.com"
      clientId="PEZM6QkkB2Ca5vphXbMGLUyWXdTivv7P"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
