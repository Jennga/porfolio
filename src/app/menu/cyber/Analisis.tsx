import TarjetaBlog from './_components/TarjetaBlog';
import PDFViewer from './_components/PDFViewer';
import styles from './Menu.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import tecnologyStyles from '../../_components/Tecnology.module.css';
{/*import Link from 'next/link';*/}

export default function Analisis() {
    const [showTec, setShowTec] = useState(false);
    const [pdfViewer, setPdfViewer] = useState({ isOpen: false, pdfUrl: '', title: '' });
    
    const tarjetas = [
       {
            titulo: "Cold-Clone",
            descripcion: "Guía práctica para capturar evidencias digitales en sistemas apagados, clonarlas sin alterar nada y verificar su integridad como lo haría un verdadero analista forense. Ideal para quienes quieren aprender haciendo.",
            imagen: "/pdf/analisis/coldCloning.png",
            pdfUrl: "/pdf/analisis/AdEviApagado.pdf" 
        },
        {
            titulo: "Adquisicion de evidencias Caliente",
            descripcion: "Domina el arte de capturar la memoria RAM en sistemas activos antes de que desaparezca la evidencia. Esta guía te enseña a congelar lo efímero en segundos.",
            imagen: "/pdf/analisis/HotCloning.png",
            pdfUrl: "/pdf/analisis/AdEviCaliente.pdf" 
        },
        {
            titulo: "Volatility en Linux",
            descripcion: "Explorando la memoria volátil para descubrir la verdad digital en sistemas Linux.",
            imagen: "/pdf/analisis/volatilityLinux.png",
            pdfUrl: "/pdf/analisis/volatilityLinux.pdf" 
        }
    ];

    const handlePdfClick = (pdfUrl: string, title: string) => {
        setPdfViewer({ isOpen: true, pdfUrl, title });
    };

    const closePdfViewer = () => {
        setPdfViewer({ isOpen: false, pdfUrl: '', title: '' });
    };
    return (
        <div className={styles.divPadre}>
            <h1 className={styles.h1todos}>
                Análisis Forense
                <button onClick={() => setShowTec(!showTec)} className={tecnologyStyles.toggleBtn}>
                    <Image
                        src="/down.svg"
                        alt="Desplegar"
                        width={24}
                        height={24}
                        className={tecnologyStyles.toggleIcon}
                        style={{
                            transform: showTec ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s'
                        }}
                    />
                </button>
            </h1>
            {showTec && (
                <>
                    <div className={styles.introduccion}>
                        <Image
                            src="/modulos/cariAnalisis.png"
                            alt="analisis"
                            width={100}
                            height={90}
                            style={{ transform: 'scaleX(-1)' }}
                            className={styles.imgintro}
                        />
                        <div className={styles.frase}>
                            El análisis forense en ciberseguridad es el proceso de identificar, recopilar, preservar y analizar evidencia digital para investigar incidentes de seguridad y determinar su causa, impacto y responsables.
                        </div>
                    </div>
                    <div className={styles.tarjetas}>
                        {tarjetas.map((blog, index) => (
                            <TarjetaBlog 
                                key={index} 
                                blog={blog} 
                                onPdfClick={handlePdfClick}
                            />
                        ))}
                    </div>
                  { /* <div className={styles.plus}>
                        <Link href="../modulos/analisis" onClick={() => setShowTec(!showTec)} className={tecnologyStyles.toggleBtn}>
                            <Image
                                src="/plus.svg"
                                alt="plus"
                                width={50}
                                height={50}
                                className={tecnologyStyles.toggleIcon}
                                style={{
                                    transform: showTec ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s'
                                }}
                            />
                        </Link>
                    </div>*/}
                </>                
            )}
            
            <PDFViewer
                pdfUrl={pdfViewer.pdfUrl}
                title={pdfViewer.title}
                isOpen={pdfViewer.isOpen}
                onClose={closePdfViewer}
            />           
        </div>
    );
}