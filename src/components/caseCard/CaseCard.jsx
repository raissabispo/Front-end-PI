import styles from "./CaseCard.module.css";
import { Link } from "react-router";

const CaseCard = ({ caso, titulo, status, descricao, data, customClass, linkTo }) => {
  return (
    <div className={styles.card}>
      <div className={styles} >
        <h3>
          {titulo}
        </h3>
        <p className="data">
          {data}
        </p>
      </div>
      <div className={styles.cardDescricao} >
        <p className={styles.descricao}>{descricao}</p>
      </div>
      <div className={styles.containerStatus} >
      <span className={`${styles.status} ${styles[customClass]}`}>
        <div></div>
        {status}
      </span>
        <Link to={linkTo || `/detalhamento/${caso?.id}`} className="detalhes">
          ver mais... 
        </Link>
      </div>
    </div>
  );
};

export default CaseCard;