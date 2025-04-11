const CaseCard = (caso, getStatusClass) => {
    return(
  <div key={caso.id} className="card">
    <h3>{caso.titulo}</h3>
    <p className="data">{caso.data}</p>
    <p className="descricao">{caso.descricao}</p>
    <span className={`status ${getStatusClass(caso.status)}`}>
      {caso.status}
    </span>
  </div>
    );
};

export default CaseCard;
