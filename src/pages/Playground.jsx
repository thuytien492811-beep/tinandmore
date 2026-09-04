import Header from "../components/Header";
import styles from "../styles/Playground.module.css";
import oldWomanGhost from "../img/Playground/old_woman_ghost.jpg";
import eagleFarmer from "../img/Playground/eagle_farmer.jpg";
import bananaBeach from "../img/Playground/banana_beach.jpg";
import canyonRiver from "../img/Playground/canyon_river.jpg";
import underwaterMoon from "../img/Playground/underwater_moon.jpg";
import digitalMagazine from "../img/Playground/digital_magazine.png";
import beePoster from "../img/Playground/bee_poster.jpg";
import fruitJuiceAd from "../img/Playground/fruit_juice_ad.png";
import antiDrugPoster from "../img/Playground/anti_drug_poster.png";

const items = [
  { src: oldWomanGhost, alt: "Photo manipulation: old woman and a spirit", ratio: "1 / 1" },
  { src: eagleFarmer, alt: "Photo manipulation: farmer and a giant eagle", ratio: "1 / 1" },
  { src: bananaBeach, alt: "Photo manipulation: watermelon-head surfers", ratio: "1 / 1" },
  { src: canyonRiver, alt: "Photo manipulation: canyon river scene", ratio: "440 / 247", fit: "cover" },
  { src: underwaterMoon, alt: "Photo manipulation: underwater moonrise", ratio: "440 / 248", fit: "cover" },
  { src: digitalMagazine, alt: "Digital magazine spread: mother-of-pearl inlay art", ratio: "1 / 1" },
  { src: beePoster, alt: "Poster: Never stop buzzing", ratio: "1 / 1" },
  { src: fruitJuiceAd, alt: "Ad banner: Vinut fruit juices", ratio: "440 / 154", fit: "cover" },
  { src: antiDrugPoster, alt: "Poster: anti-drug campaign", ratio: "1 / 1" },
];

export default function Playground() {
  return (
    <div className={`section ${styles.page}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/b57b9648-05b4-4192-b214-b99d56e974b8.png"
        alt=""
      />
      <div className={styles.polkaDots} />

      <Header />

      <div className={styles.title}>
        <p className={`${styles.titleMain} text-script`}>My playground</p>
        <p className={styles.titleSub}>
          Welcome to the lab where raw ideas get polished into gems and random ideas become visuals
        </p>
      </div>

      <span className={`${styles.swipeLabel} ${styles.swipeLeft}`}>Swipe right to view</span>
      <span className={`${styles.swipeLabel} ${styles.swipeRight}`}>Swipe right to view</span>

      <div className={styles.scrollFrame}>
        <div className={styles.scrollTrack}>
          {items.map((item) => (
            <div key={item.src} className={styles.stripItem} style={{ aspectRatio: item.ratio }}>
              <img src={item.src} alt={item.alt} style={{ objectFit: item.fit || "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
