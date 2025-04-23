import React from 'react';
import AdminTable from '../components/cardTabela/AdminTable';
import Sidebar from "../components/sidebar/Sidebar"; 

function App() {
  return (
    <div>
      <AdminTable />
      <Sidebar /> {/* Adicionando o sidebar */}
    </div>
  );
}

export default App;