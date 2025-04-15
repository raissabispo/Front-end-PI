import React from 'react';
import DetalhamentoCaso from "../cardDetalhamento/cardDetalhamento";
import Sidebar from "../components/sidebar/Sidebar";

function App() {
  return (
    <div>
      < DetalhamentoCaso/>
      <Sidebar /> {/* Adicionando o sidebar */}
    </div>
  );
}

export default App;