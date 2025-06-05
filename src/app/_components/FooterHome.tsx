import Image from "next/image";

const styles = {
  footer: "row-start-3 flex flex-col sm:flex-row gap-4 sm:gap-[24px] flex-wrap items-center justify-center w-full",
  link: "flex items-center gap-2 hover:underline hover:underline-offset-4 text-2xl py-2 px-4",
  image: "rounded-full",
};

const FooterHome = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.link}
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
          className={styles.image}
        />
        GitHub: Jennga
      </a>
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/jennifer-galv%C3%A1n-bejarano-b68467318/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/linkedin.jpg"
          alt="Window icon"
          width={40}
          height={40}
          className={styles.image}
        />
        LinkedIn
      </a>
    </footer>
  );
};

export default FooterHome;