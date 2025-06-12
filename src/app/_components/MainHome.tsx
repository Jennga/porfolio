"use client";
import Image from 'next/image';
import ImageContainer from './ImageContainer';
import Link from 'next/link';
import Tecnology from './Tecnology';
import React, { useState } from 'react';
import Logros from './Logros';
import './MainHomeResponsive.css';

// Hook para hover
function useHoverStyle<T extends React.CSSProperties>(
  base: T,
  hover: Partial<T>
): [T, React.HTMLAttributes<HTMLElement>] {
  const [isHover, setIsHover] = useState(false);
  return [
    { ...base, ...(isHover ? hover : {}) },
    {
      onMouseEnter: () => setIsHover(true),
      onMouseLeave: () => setIsHover(false),
    },
  ];
}

const mainStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  rowGap: '32px',
  gridRowStart: 2,
  alignItems: 'center',
  width: '100%',
  maxWidth: '64rem',
};

const buttonsContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  borderRadius: '1rem',
  padding: '0.625rem',
  background: '#7886C7',
  color: '#FFF2F2',
};

const buttonBase: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '1rem',
  height: '2.5rem',
  padding: '0 1rem',
  width: 'auto',
  background: 'transparent',
  gap: '0.5rem',
  cursor: 'pointer',
};

const buttonHover: React.CSSProperties = {
  background: '#A9B5DF',
  borderRadius: '25px',
  boxShadow: `
            0 0 16px 4px rgba(72, 113, 181, 0.25), 
            0 4px 24px 0 rgba(72, 113, 181, 0.18), 
            0 1.5px 6px 0 rgba(0,0,0,0.10)
        `,
};

export default function MainHome() {
  // Hover para ambos
  const [cvStyle, cvHoverProps] = useHoverStyle(buttonBase, buttonHover);
  const [cyberStyle, cyberHoverProps] = useHoverStyle(buttonBase, buttonHover);

  // Estado para mostrar el modal del PDF
  const [showPdf, setShowPdf] = useState(false);

  return (
    <main className="main-home" style={mainStyle}>
      <ImageContainer />
      <div style={buttonsContainerStyle}>
        <button
          style={cvStyle}
          type="button"
          {...cvHoverProps}
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
          style={cyberStyle}
          href="/menu/cyber"
          {...cyberHoverProps}
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
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            background: 'rgba(0,0,0,0.25)', // opcional: oscurece fondo
          }}
          onClick={() => setShowPdf(false)}
        >
          <button
            onClick={e => {
              e.stopPropagation();
              setShowPdf(false);
            }}
            style={{
              position: 'absolute',
              top: 24,
              right: 32,
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: 32,
              fontWeight: 'bold',
              cursor: 'pointer',
              zIndex: 1100,
              lineHeight: 1,
              padding: 0,
            }}
            aria-label="Cerrar PDF"
          >
            ×
          </button>
          <iframe
            src="/cv.pdf"
            style={{ width: '90%', height: '90%' }}
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