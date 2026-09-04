import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={`section ${styles.page}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/c5bcfd31-d795-446e-8a63-72864445d849.png"
        alt=""
      />
      <div className={styles.polkaDots} />

      <Header />

      <main className={styles.hero}>
        <p className={`${styles.heroTagline} text-script`}>graphic design</p>
        <h1 className={`${styles.heroTitle} text-script`}>Portfolio</h1>
        <p className={`${styles.heroYear} text-script`}>2026</p>
      </main>
    </div>
  );
}
