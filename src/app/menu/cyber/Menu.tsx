import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Menu.module.css';

const buttonBase: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  height: '2.2rem',
  padding: '0 0.9vw',
  margin: '0.7vw',
  gap: '0.4rem',
  cursor: 'pointer',
  borderRadius: '20px',
  transition: 'background 0.2s, color 0.2s',
  fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
  minWidth: 0,
};

const buttonHover: React.CSSProperties = {
  background: '#d1d3f9',
  boxShadow: `
    0 0 16px 4px rgba(72, 113, 181, 0.25), 
    0 4px 24px 0 rgba(72, 113, 181, 0.18), 
    0 1.5px 6px 0 rgba(0,0,0,0.10)
  `,
};

const logo: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    margin: '2vw',
    marginTop: '-2vw',
    };

export default function Menu() {
  const [hover, setHover] = React.useState(false);

  return (
    <>
    <nav>
      <Link
        href="/"
        style={{
          ...buttonBase,
          ...(hover ? buttonHover : {}),
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={styles.responsiveBtn}
      >
        <Image
          src="/home.svg"
          alt="home"
          width={22}
          height={22}
          style={{ filter: hover ? 'invert(0) brightness(0.7)' :'invert(1) brightness(2)', display: 'block'
           }}
        />
      </Link>
    </nav>
    <div style={logo}>
           <Image
              src="/caricaturamia.png"
              alt="caricatura"
              width={200}
              height={200}
              className={styles.responsiveImg}
           />
    </div>
    </>
  );
}