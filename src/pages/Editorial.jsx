import Header from "../components/Header";
import styles from "../styles/Editorial.module.css";
import moodboard from "../img/Editorial Design/moodboard.png";
import mockup2 from "../img/Editorial Design/mockup 2.png";
import mockup1 from "../img/Editorial Design/mockup 1.png";
import mockup5 from "../img/Editorial Design/mockup 5.png";
import mockup3 from "../img/Editorial Design/mockup 3.png";
import mockup4 from "../img/Editorial Design/mockup 4.png";
import mockup7 from "../img/Editorial Design/mockup 7.png";
import mockup6 from "../img/Editorial Design/mockup 6.png";

const images = [
  { src: moodboard, alt: "Moodboard" },
  { src: mockup2, alt: "Magazine mockup" },
  { src: mockup1, alt: "Magazine cover mockup" },
  { src: mockup5, alt: "Magazine spread" },
  { src: mockup3, alt: "Magazine spread" },
  { src: mockup4, alt: "Magazine spread" },
  { src: mockup7, alt: "Magazine spread" },
  { src: mockup6, alt: "Magazine spread" },
];

export default function Editorial() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`section ${styles.page}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/3f600c32-0a55-4285-9c0c-c3e9144fe9e7.png"
        alt=""
      />

      <Header />

      <span className={`${styles.dot} ${styles.dotLeft}`} aria-hidden="true" />
      <span className={`${styles.dot} ${styles.dotRight}`} aria-hidden="true" />

      <main className={styles.content}>
        <h1 className={`${styles.title} text-script`}>Editorial</h1>

        <div className={styles.stack}>
          {images.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} />
          ))}
        </div>

        <p className={styles.thanks}>
          Thanks for surviving the long scroll, your thumb deserves a medal!
        </p>

        <button className={styles.backToTop} onClick={scrollToTop}>
          Now back to top
        </button>
      </main>
    </div>
  );
}
