"use client";
import Image from 'next/image';
import ImageContainer from './ImageContainer';
import Link from 'next/link';
import Tecnology from './Tecnology';
import React, { useState } from 'react';
import Logros from './Logros';
import styles from './MainHome.module.css';

export default function MainHome() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <main className={styles.mainHome}>
      <ImageContainer />
      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonBase}
          type="button"
          onClick={() => setShowPdf(true)}
        >
          <Image
            src="/dragon.svg"
            alt="dragon-boll"
            width={20}
            height={20}
            style={{ marginRight: 8 }}
          />
          CV
        </button>
        <Link
          className={styles.buttonBase}
          href="/menu/cyber"
        >
          <Image
            src="/padlock.svg"
            alt="candado"
            width={22}
            height={22}
            style={{ marginRight: 10 }}
          />
          BLOG CIBERSEGURIDAD
        </Link>
      </div>
      {showPdf && (
        <div
          className={styles.pdfModalOverlay}
          onClick={() => setShowPdf(false)}
        >
          <button
            onClick={e => {
              e.stopPropagation();
              setShowPdf(false);
            }}
            className={styles.pdfCloseButton}
            aria-label="Cerrar PDF"
          >
            ×
          </button>
          <iframe
            src="/cv.pdf"
            className={styles.pdfIframe}
            title="Curriculum Vitae"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
      <Logros />
      <Tecnology />
    </main>
  );
}