import React, { useState } from 'react';
import styles from'./Menu.module.css';
import Image from 'next/image';
import TarjetaBlog from './_components/TarjetaBlog';
import PDFViewer from './_components/PDFViewer';
import tecnologyStyles from '../../_components/Tecnology.module.css';
{/*import Link from 'next/link';*/}

export default function Hacking() {
    const [showTec, setShowTec] = React.useState(false);
    const [pdfViewer, setPdfViewer] = useState({ isOpen: false, pdfUrl: '', title: '' });
     const tarjetas = [
        {
            titulo: "Hacking Wifi",
            descripcion: "Desenmascarando redes WiFi: del laboratorio a la realidad, un viaje ético al corazón de la ciberseguridad.",
            imagen: "/pdf/hacking/hakingWifi.png",
            pdfUrl: "/pdf/hacking/HackeoRedeswifi.pdf" 
        },
        {
            titulo: "Pivotaje",
            descripcion: "Domino el arte del pivotaje: cuando una puerta se cierra, yo tunelizo otra",
            imagen: "/pdf/hacking/pivotaje.png",
            pdfUrl: "/pdf/hacking/pivotaje.pdf" 
        },
        {
            titulo: "Metasploit",
            descripcion: "Metasploit no solo encuentra vulnerabilidades, las convierte en oportunidades para aprender, asegurar y dominar el arte del hacking ético",
            imagen: "/pdf/hacking/metasploit.png",
            pdfUrl: "/pdf/hacking/metasploit.pdf" 
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