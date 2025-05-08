import React from 'react';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">DR-AI</h1>
      </header>
      <main className="p-4">{children}</main>
      <footer className="bg-gray-200 text-center p-4 mt-auto">
        <p className="text-sm text-gray-600">© 2025 DR-AI</p>
      </footer>
    </div>
  );
};

export default MainLayout;
