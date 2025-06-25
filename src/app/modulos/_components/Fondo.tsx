import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Fondo.module.css';

type FondoProps = {
  logoSrc: string;
  logoAlt: string;
  title: string; 
};

export default function Fondo({ logoSrc, logoAlt, title }: FondoProps) {
  const [hoverHome, setHoverHome] = React.useState(false);
  const [hoverBlog, setHoverBlog] = React.useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Link
          href="/"
          className={
            `${styles.responsiveBtn} ${hoverHome ? styles.responsiveBtnHover : ''}`
          }
          onMouseEnter={() => setHoverHome(true)}
          onMouseLeave={() => setHoverHome(false)}
        >
          <Image
            src="/home.svg"
            alt="home"
            width={22}
            height={22}
            className={
              `${styles.homeIcon} ${hoverHome ? styles.homeIconHover : styles.homeIconDefault}`
            }
          />
        </Link>
        <Link
          href="/menu/cyber"
          className={
            `${styles.responsiveBtn} ${hoverBlog ? styles.responsiveBtnHover : ''}`
          }
          onMouseEnter={() => setHoverBlog(true)}
          onMouseLeave={() => setHoverBlog(false)}
        >
          Blog
        </Link>
      </nav>
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>{title}</h1>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={200}
          height={200}
          className={styles.responsiveImg}
        />        
      </div>
    </>
  );
}