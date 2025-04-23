import React from 'react';
import DetalhamentoCaso from "../components/caseDetailsCard/CaseDetailsCard";
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