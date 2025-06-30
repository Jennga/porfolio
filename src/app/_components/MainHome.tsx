"use client";
import ImageContainer from './ImageContainer';
import Tecnology from './Tecnology';
import React, { useState } from 'react';
import Logros from './Logros';
import Estudios from './Estudios';
import PDFViewer from '../menu/cyber/_components/PDFViewer';
import styles from './MainHome.module.css';

export default function MainHome() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <main className={styles.mainHome}>
      <ImageContainer
        setShowPdf={setShowPdf}
      />      
      <PDFViewer
        pdfUrl="/cv.pdf"
        title="Curriculum Vitae"
        isOpen={showPdf}
        onClose={() => setShowPdf(false)}
      />
      <Estudios />
      <Logros />
      <Tecnology />
    </main>
  );
}