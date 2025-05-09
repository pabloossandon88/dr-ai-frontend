import React from 'react';
import { useNavigate } from "react-router-dom";


type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold" onClick={() => navigate("/")}>DR-AI</h1>
      </header>
      <main className="p-4 flex justify-center">{children}</main>
      <footer className="bg-gray-200 text-center p-4 mt-auto">
        <p className="text-sm text-gray-600">© 2025 DR-AI</p>
      </footer>
    </div>
  );
};

export default MainLayout;
