import Header from "../components/Header";
import styles from "../styles/Museum.module.css";
import coverImg from "../img/Museum/mockup museum.png";
import img15 from "../img/Museum/15 1.png";
import img16 from "../img/Museum/16 1.png";
import img17 from "../img/Museum/17 1.png";
import img18 from "../img/Museum/18 1.png";
import img2027 from "../img/Museum/20 27.png";
import img21 from "../img/Museum/21 1.png";
import img22 from "../img/Museum/22 1.png";
import img32 from "../img/Museum/32 1.png";
import img23 from "../img/Museum/23 1.png";
import img27 from "../img/Museum/27 1.png";
import img28 from "../img/Museum/28 1.png";
import img29 from "../img/Museum/29 1.png";
import img25 from "../img/Museum/25 1.png";
import img26 from "../img/Museum/26 1.png";
import img30 from "../img/Museum/30 1.png";
import img31 from "../img/Museum/31 1.png";

const gridImages = [
  img15, img16, img17, img18, img2027, img21, img22, img32,
  img23, img27, img28, img29, img25, img26, img30, img31,
];

export default function Museum() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`section ${styles.page}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/63188d21-2744-4c1a-9174-a3f4f63ea09c.png"
        alt=""
      />

      <Header />

      <span className={`${styles.dot} ${styles.dotLeft}`} aria-hidden="true" />
      <span className={`${styles.dot} ${styles.dotRight}`} aria-hidden="true" />

      <main className={styles.content}>
        <h1 className={`${styles.title} text-script`}>Museum Branding</h1>

        <div className={styles.mediaWrap}>
          <img className={styles.cover} src={coverImg} alt="Museum branding mockup" />
          <div className={styles.grid}>
            {gridImages.map((src, i) => (
              <img key={i} src={src} alt="Museum branding detail" />
            ))}
          </div>
        </div>

        <button className={styles.backToTop} onClick={scrollToTop}>
          Back to top
        </button>
      </main>
    </div>
  );
}
