import Header from "../components/Header";
import styles from "../styles/Menu.module.css";
import menuCover from "../img/Menu/Menu gà sốt-01-01 1.png";
import mockup5 from "../img/Menu/Mockup_5 1.png";
import mockup4 from "../img/Menu/Mockup_4 1.png";
import mockup1 from "../img/Menu/Mockup_1 1.png";

const images = [
  { src: menuCover, alt: "Menu design sheet" },
  { src: mockup5, alt: "Menu mockup" },
  { src: mockup4, alt: "Logo signage mockup" },
  { src: mockup1, alt: "Logo box mockup" },
];

export default function Menu() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`section ${styles.page}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/5061ffe2-6619-4caa-8e9e-ed23650441db.png"
        alt=""
      />

      <Header />

      <span className={`${styles.dot} ${styles.dotLeft}`} aria-hidden="true" />
      <span className={`${styles.dot} ${styles.dotRight}`} aria-hidden="true" />

      <main className={styles.content}>
        <h1 className={`${styles.title} text-script`}>Menu &amp; Logo</h1>

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
