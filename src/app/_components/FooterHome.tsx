import Image from "next/image";
import styles from './MainHome.module.css';

const FooterHome = () => (
  <footer className={styles.footer}>
    <a className={styles.footer_a}
      href="https://github.com/Jennga"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="/flor.jpg"
        alt="File icon"
        width={40}
        height={40}
        className={styles.imgflor}
      />
      GitHub: Jennga
    </a>
    <a className={styles.footer_a}
      href="https://www.linkedin.com/in/jennifer-galv%C3%A1n-bejarano-b68467318/"
      target="_blank"
      rel="noopener noreferrer"     
    >
      <Image
        aria-hidden
        src="/linkedin.jpg"
        alt="linkedin"
        width={40}
        height={40}
        className={styles.footer_img}
      />
      LinkedIn
    </a>
  </footer>
);

export default FooterHome;