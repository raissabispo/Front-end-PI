import Button from "../buttons/Button";
import CaseDetails from "../caseDetails/CaseDetails";

const CaseDetailsCard = (caso) => {
  <div className="detalhamento-container">
    <h2>Detalhamento do Caso: {caso.nome}</h2>
    <CaseDetails label="Status" value={caso.status} />
    <CaseDetails label="Localização" value={caso.localizacao} />
    <CaseDetails label="Descrição" value={caso.descricao} />
    <CaseDetails label="Data" value={caso.data} />
    <CaseDetails label="Informações" value={caso.informacao} />
    <CaseDetails label="Imagem" value={caso.imagem} />
    <Button text="Baixar anexos" />
  </div>;
};

export default CaseDetailsCard;
