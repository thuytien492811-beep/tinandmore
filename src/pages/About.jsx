import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/About.module.css";
import tornPaperTexture from "../img/text_pur.jpg";
import fullTienNoted from "../img/Full_Tien_Noted.png";
import tapeTimCuoi from "../img/tape_tim_cuoi.png";
import tapeXanh1 from "../img/tape_xanh_1.png";

export default function About() {
  return (
    <div className={`section ${styles.aboutPage}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/05777453-6bb3-498c-b333-1545b8494075.png"
        alt=""
      />

      <Header />

      <div className={styles.photoRail}>
        <div className={styles.aboutPhoto}>
          <img className={styles.aboutPhotoImg} src={fullTienNoted} alt="Nguyen Thi Thuy Tien" />
        </div>
      </div>

      <main className={styles.aboutContent}>
        <div className={styles.aboutTapes} aria-hidden="true">
          <img className={`${styles.tape} ${styles.tapePurple1}`} src="https://www.figma.com/api/mcp/asset/76020944-e4d9-4567-82a5-708d18526e9d.png" alt="" />
          <img className={`${styles.tape} ${styles.tapePurple2}`} src="https://www.figma.com/api/mcp/asset/76020944-e4d9-4567-82a5-708d18526e9d.png" alt="" />
          <img className={`${styles.tape} ${styles.tapeGreen1}`} src="https://www.figma.com/api/mcp/asset/f6683fab-679f-401d-98ac-17e5d7f04cdf.png" alt="" />
          <img className={`${styles.tape} ${styles.tapeGreen2}`} src="https://www.figma.com/api/mcp/asset/f6683fab-679f-401d-98ac-17e5d7f04cdf.png" alt="" />
          <img className={`${styles.tape} ${styles.tapeGreen3}`} src="https://www.figma.com/api/mcp/asset/f6683fab-679f-401d-98ac-17e5d7f04cdf.png" alt="" />
        </div>

        <h1 className={`${styles.aboutTitle} text-script`}>
          About<span>Me</span>
        </h1>

        <div className={styles.aboutIntro}>
          <p className={`text-body-25 ${styles.aboutIntroLead}`}>
            <img className={styles.dotIcon} src="https://www.figma.com/api/mcp/asset/a92def98-d826-452e-9c2b-26f6b774520e.svg" alt="" />
            Hi, I'm Tien - nearly two years into graphic design, still early in the craft, turning raw curiosity into visuals.
          </p>
          <p className="text-body-20">
            Design shouldn't just look good - it has to work. With a background in marketing, I view every visual as a strategic tool rather than just artwork. I design with purpose at the core, ensuring every layout, detail, and movement acts intentionally to deliver real impact.
          </p>
        </div>

        <div className={styles.tornAccents} aria-hidden="true">
          <div
            className={`${styles.tornLayer} ${styles.tornLayer1}`}
            style={{ backgroundImage: `url(${tornPaperTexture})` }}
          />
          <div
            className={`${styles.tornLayer} ${styles.tornLayer2}`}
            style={{ backgroundImage: `url(${tornPaperTexture})` }}
          />
        </div>

        {/* The photo is rendered above, fixed to the top-right of the viewport; this column scrolls normally. */}
        <div className={styles.infoCol}>
          <div className={styles.detailColumns}>
            <section className={styles.aboutCol}>
              <div>
                <div className={styles.sectionHeading}>
                  <img className={styles.sectionTape} src={tapeXanh1} alt="" aria-hidden="true" />
                  <h2 className="text-h2">Education</h2>
                </div>
                <div className={styles.aboutEntry}>
                  <div className={styles.aboutEntryRow}>
                    <p className="text-bold-20">Design Anthropology School | DAS</p>
                    <p className={`text-body-20 ${styles.aboutEntryDate}`}>2025 - 2026</p>
                  </div>
                  <p className="text-body-20">DAS Multi-disciplinary Designer</p>
                </div>
                <div className={styles.aboutEntry}>
                  <div className={styles.aboutEntryRow}>
                    <p className="text-bold-20">Hoa Sen University</p>
                    <p className={`text-body-20 ${styles.aboutEntryDate}`}>2019 - 2024</p>
                  </div>
                  <p className="text-body-20">Marketing</p>
                </div>
              </div>

              <div>
                <div className={styles.sectionHeading}>
                  <img className={styles.sectionTape} src={tapeXanh1} alt="" aria-hidden="true" />
                  <h2 className="text-h2">Tools</h2>
                </div>
                <p className="text-bold-20">Adobe Photoshop</p>
                <p className="text-bold-20">Adobe Illustrator</p>
                <p className="text-bold-20">After Effects <span className="text-caption">(basic)</span></p>
                <p className="text-bold-20">InDesign <span className="text-caption">(basic)</span></p>
                <p className="text-bold-20">Figma</p>
              </div>

              <div>
                <div className={styles.sectionHeading}>
                  <img className={styles.sectionTape} src={tapeXanh1} alt="" aria-hidden="true" />
                  <h2 className="text-h2">Contact</h2>
                </div>
                <p className="text-bold-20">+84 917211628</p>
                <p className="text-bold-20">thuytien492811@gmail.com</p>
              </div>
            </section>

            <section className={styles.aboutCol}>
              <div>
                <div className={styles.sectionHeading}>
                  <img className={styles.sectionTape} src={tapeXanh1} alt="" aria-hidden="true" />
                  <h2 className="text-h2">Experience</h2>
                </div>
                {[
                  ["Freelance Designer", "2025 - 2026", "-"],
                  ["Matkinhcom LLC", "2024 - 2025", "Marketing Executive"],
                  ["Nam Viet Joint Stock Company", "2024", "Marketing Executive"],
                  ["BHD Co. Ltd", "2023", "Marketing Intern"],
                  ["American Study Company", "2022", "Marketing Intern"],
                ].map(([title, date, role]) => (
                  <div className={styles.aboutEntry} key={title}>
                    <div className={styles.aboutEntryRow}>
                      <p className="text-bold-20">{title}</p>
                      <p className={`text-body-20 ${styles.aboutEntryDate}`}>{date}</p>
                    </div>
                    <p className="text-body-20">{role}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className={styles.sectionHeading}>
                  <img className={styles.sectionTape} src={tapeXanh1} alt="" aria-hidden="true" />
                  <h2 className="text-h2">Languages</h2>
                </div>
                <p className="text-bold-20">Vietnamese <span className="text-caption">(native)</span></p>
                <p className="text-bold-20">English <span className="text-caption">(B2 level)</span></p>
              </div>
            </section>
          </div>

          <Link
            to="/contact"
            className={`btn-connect ${styles.aboutConnectBtn}`}
            style={{ backgroundImage: `url(${tapeTimCuoi})` }}
          >
            Let's connect!
          </Link>
        </div>
      </main>
    </div>
  );
}
