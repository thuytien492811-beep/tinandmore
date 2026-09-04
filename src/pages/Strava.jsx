import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/Strava.module.css";
import coverImg from "../img/Strava/map đen_00743.jpg";
import storyBoardImg from "../img/Strava/story board-01.jpg";
import stillFrameImg from "../img/Strava/still2-01.jpg";
import stravaVideo from "../img/Strava/Video.mp4";

export default function Strava() {
  return (
    <div className={`section ${styles.page}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/2fdaaa1c-afb6-4364-a75f-709a45f20d78.png"
        alt=""
      />

      <Header />

      <h1 className={`${styles.title} text-script`}>Strava Motion</h1>

      <img
        className={styles.dots}
        src="https://www.figma.com/api/mcp/asset/0d7f962f-b140-4e6e-ae1c-baaf541b20bc.svg"
        alt=""
        aria-hidden="true"
      />

      <img className={`${styles.media} ${styles.cover}`} src={coverImg} alt="Strava Motion cover" />
      <img className={`${styles.media} ${styles.storyBoard}`} src={storyBoardImg} alt="Story board" />
      <img className={`${styles.media} ${styles.stillFrame}`} src={stillFrameImg} alt="Still frame" />

      <div className={styles.videoWrap}>
        <video className={styles.video} src={stravaVideo} controls playsInline />
      </div>

      <p className={`${styles.caption} text-body-20`}>Click to view details</p>

      <Link to="/works" className={styles.backLink}>
        Back to Works
      </Link>
    </div>
  );
}
