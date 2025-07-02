import styles from'./Menu.module.css';
import Image from 'next/image';
import TarjetaBlog from './_components/TarjetaBlog';
import PDFViewer from './_components/PDFViewer';
import React, { useState } from 'react';
import tecnologyStyles from '../../_components/Tecnology.module.css';
{/*import Link from 'next/link';*/}

export default function Normativa() {
    const [showTec, setShowTec] = React.useState(false);
    const [pdfViewer, setPdfViewer] = useState({ isOpen: false, pdfUrl: '', title: '' });
    const tarjetas = [
        {
            titulo: "Normativa vigente",
            descripcion: "Normativa vigente: el escudo legal que define y protege la ciberseguridad en España.",
            imagen: "/pdf/normativa/normativaVigente.png",
            pdfUrl: "/pdf/normativa/NormVigente.pdf" 
        },
        {
            titulo: "Sistemas de Compliance: Cumplir, Prevenir y Proteger",
            descripcion: "El compliance no es opcional: es la barrera ética y legal que sostiene a las empresas responsables.",
            imagen: "/pdf/normativa/sistemaComplice.png",
            pdfUrl: "/pdf/normativa/sistemaComplice.pdf" 
        },
        {
            titulo: "Ensayo Proteccion de datos",
            descripcion: "Protección de datos: políticas, tecnología y personas unidas para blindar la información del usuario",
            imagen: "/pdf/normativa/proteccionDatos.png",
            pdfUrl: "/pdf/normativa/proteccionDatos.pdf" 
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
                Normativa
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
                            src="/modulos/cariNormativa.png"
                            alt="analisis"
                            width={100}
                            height={90}
                            style={{ transform: 'scaleX(-1)' }}
                            className={styles.imgintro}
                        />
                        <div className={styles.frase}>
                            La normativa en ciberseguridad establece las reglas y buenas prácticas que protegen los sistemas informáticos y los datos frente a amenazas digitales.
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
                        <Link href="../modulos/normativa" onClick={() => setShowTec(!showTec)} className={tecnologyStyles.toggleBtn}>
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