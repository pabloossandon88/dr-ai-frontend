import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';


type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">

      <Header />
      <main className="p-4 pt-20 flex flex-col items-center">{children}</main>
      <footer className="fixed bottom-0 w-full bg-teal-700  text-center p-4 mt-auto">
        <p className="text-sm text-teal-400">© 2025 DR-AI</p>
      </footer>
    </div>
  );
};

export default MainLayout;
