import Header from "../components/Header";
import styles from "../styles/Cd.module.css";
import roan01 from "../img/Redesign CD/CD chappell Roan01.png";
import roan15 from "../img/Redesign CD/CD chappell Roan15.png";
import roan06 from "../img/Redesign CD/CD chappell Roan06.png";
import roan12 from "../img/Redesign CD/CD chappell Roan12.png";
import bookletGrid from "../img/Redesign CD/Frame 248.png";
import roan13 from "../img/Redesign CD/CD chappell Roan13.png";
import packaging from "../img/Redesign CD/cd.png";
import roan04 from "../img/Redesign CD/CD chappell Roan04.png";
import roan07 from "../img/Redesign CD/CD chappell Roan07.png";
import roan14 from "../img/Redesign CD/CD chappell Roan14.png";
import billboard from "../img/Redesign CD/Billboard 1.png";

const images = [
  { src: roan01, alt: "CD cover artwork" },
  { src: roan15, alt: "CD tray and disc" },
  { src: roan06, alt: "CD packaging detail" },
  { src: roan12, alt: "CD packaging detail" },
  { src: bookletGrid, alt: "Booklet spreads" },
  { src: roan13, alt: "CD packaging detail" },
  { src: packaging, alt: "Full CD packaging mockup" },
  { src: roan04, alt: "CD packaging detail" },
  { src: roan07, alt: "CD packaging detail" },
  { src: roan14, alt: "CD packaging detail" },
  { src: billboard, alt: "Billboard mockup" },
];

export default function Cd() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`section ${styles.page}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/814e661f-67a8-488c-a6c4-4c84417b7564.png"
        alt=""
      />

      <Header />

      <span className={`${styles.dot} ${styles.dotLeft}`} aria-hidden="true" />
      <span className={`${styles.dot} ${styles.dotRight}`} aria-hidden="true" />

      <main className={styles.content}>
        <h1 className={`${styles.title} text-script`}>Redesign CD</h1>

        <div className={styles.stack}>
          {images.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} />
          ))}
        </div>

        <button className={styles.backToTop} onClick={scrollToTop}>
          Back to top
        </button>
      </main>
    </div>
  );
}
