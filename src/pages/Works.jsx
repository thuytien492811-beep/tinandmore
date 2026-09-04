import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/Works.module.css";
import strava from "../img/works/strava.png";
import editorial from "../img/works/Editorial.png";
import cd from "../img/works/CD.png";
import menuLogo from "../img/works/Menu & Logo.png";
import museumBranding from "../img/works/Museum Branding.png";

export default function Works() {
  return (
    <div className={`section ${styles.page}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/63ec9b87-940e-46ef-947c-7193f4c7ce41.png"
        alt=""
      />

      <Header />

      <h1 className={`${styles.title} text-script`}>Works</h1>
      <p className={`${styles.caption} text-body-25`}>Click to view details</p>

      <Link to="/works/cd" className={`${styles.card} ${styles.cardCd} ${styles.cardLink}`}>
        <img className={styles.cardImg} src={cd} alt="CD Design" />
      </Link>
      <Link to="/works/editorial" className={`${styles.card} ${styles.cardEditorial} ${styles.cardLink}`}>
        <img className={styles.cardImg} src={editorial} alt="Editorial" />
      </Link>
      <Link to="/works/strava" className={`${styles.card} ${styles.cardStrava} ${styles.cardLink}`}>
        <img className={styles.cardImg} src={strava} alt="Strava Motion" />
      </Link>
      <Link to="/works/museum" className={`${styles.card} ${styles.cardMuseum} ${styles.cardLink}`}>
        <img className={styles.cardImg} src={museumBranding} alt="Museum Branding" />
      </Link>
      <Link to="/works/menu" className={`${styles.card} ${styles.cardMenuLogo} ${styles.cardLink}`}>
        <img className={styles.cardImg} src={menuLogo} alt="Menu & Logo" />
      </Link>
    </div>
  );
}
