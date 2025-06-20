"use client";
import ImageContainer from './ImageContainer';
import Tecnology from './Tecnology';
import React, { useState } from 'react';
import Logros from './Logros';
import styles from './MainHome.module.css';

export default function MainHome() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <main className={styles.mainHome}>
      <ImageContainer
        setShowPdf={setShowPdf}
      />      
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