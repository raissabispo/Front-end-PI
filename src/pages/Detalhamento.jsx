import React from 'react';
import DetalhamentoCaso from "../components/cardDetalhamento/cardDetalhamento";
import Sidebar from "../components/cardSidebar/Sidebar"; 

function App() {
  return (
    <div>
      < DetalhamentoCaso/>
      <Sidebar /> {/* Adicionando o sidebar */}
    </div>
  );
}

export default App;