import Header from "../components/Header";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={`section ${styles.contactPage}`}>
      <img
        className="bg-texture"
        src="https://www.figma.com/api/mcp/asset/05777453-6bb3-498c-b333-1545b8494075.png"
        alt=""
      />

      <Header />

      <main className={styles.contactContent}>
        <h1 className={`${styles.contactTitle} text-script`}>Contact</h1>

        <div className={styles.contactList}>
          <p className="text-bold-20">
            <a href="tel:+84917211628">+84 917211628</a>
          </p>
          <p className="text-bold-20">
            <a href="mailto:thuytien492811@gmail.com">thuytien492811@gmail.com</a>
          </p>
        </div>
      </main>
    </div>
  );
}
