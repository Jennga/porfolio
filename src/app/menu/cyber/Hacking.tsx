import React, { useState } from 'react';
import styles from'./Menu.module.css';
import Image from 'next/image';
import TarjetaBlog from './_components/TarjetaBlog';
import PDFViewer from './_components/PDFViewer';
import tecnologyStyles from '../../_components/Tecnology.module.css';
import Link from 'next/link';

export default function Hacking() {
    const [showTec, setShowTec] = React.useState(false);
    const [pdfViewer, setPdfViewer] = useState({ isOpen: false, pdfUrl: '', title: '' });
     const tarjetas = [
        {
            titulo: "Análisis",
            descripcion: "Explora las técnicas y herramientas para analizar malware y entender su funcionamiento.",
            imagen: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop&crop=center",
            pdfUrl: "/cv.pdf" 
        },
        {
            titulo: "Investigación de Incidentes",
            descripcion: "Aprende a investigar incidentes de seguridad y a recopilar evidencia digital.",
            imagen: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=300&h=200&fit=crop&crop=center",
            pdfUrl: "/cv.pdf" 
        },
        {
            titulo: "Recuperación de Datos",
            descripcion: "Conoce los métodos para recuperar datos perdidos o dañados en sistemas comprometidos.",
            imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop&crop=center",
            pdfUrl: "/cv.pdf" 
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
            <h1 className={styles.h1todos}>Hacking Ético
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
                        <Image src="/modulos/cariHacking.png" alt="hacking" width={100} height={90} style={{ transform: 'scaleX(-1)' }} className={styles.imgintro}/>
                        <div className={styles.frase}>
                            El hacking ético en ciberseguridad es la práctica autorizada de vulnerar sistemas informáticos para identificar y corregir fallos de seguridad antes de que sean explotados maliciosamente.
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
                    {/*<div className={styles.plus}>
                        <Link href="../modulos/hacking" onClick={() => setShowTec(!showTec)} className={tecnologyStyles.toggleBtn}>
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
    )
}