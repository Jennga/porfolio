import styles from'./Menu.module.css';
import Image from 'next/image';
import TarjetaBlog from './_components/TarjetaBlog';
import PDFViewer from './_components/PDFViewer';
import React, { useState } from 'react';
import tecnologyStyles from '../../_components/Tecnology.module.css';
{/*import Link from 'next/link';*/}

export default function Incidentes() {
    const [showTec, setShowTec] = React.useState(false);
    const [pdfViewer, setPdfViewer] = useState({ isOpen: false, pdfUrl: '', title: '' });
    const tarjetas = [
        {
            titulo: "Velociraptor",
            descripcion: "Velociraptor: cazando incidentes de seguridad antes de que te muerdan los datos.",
            imagen: "/pdf/incidentes/velociraptor.png",
            pdfUrl: "/pdf/incidentes/velociraptor.pdf" 
        },
        {
            titulo: "Wazuh",
            descripcion: "Wazuh: monitorizando agentes, detectando amenazas en tiempo real.",
            imagen: "/pdf/incidentes/wazuh.png",
            pdfUrl: "/pdf/incidentes/wazuh.pdf" 
        },
        {
            titulo: "Sysmon",
            descripcion: "Sysmon: ojos en el sistema, cazando amenazas en cada rincón de Windows.",
            imagen: "/pdf/incidentes/sysmon.png",
            pdfUrl: "/pdf/incidentes/sysmon.pdf" 
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
            <h1 className={styles.h1todos}>Incidentes
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
                    <Image src="/modulos/cariIncidentes.png" alt="incidentes" width={100} height={90} style={{ transform: 'scaleX(-1)' }} className={styles.imgintro}/>
                    <div className={styles.frase}>Los incidentes en ciberseguridad son eventos que comprometen la confidencialidad, integridad o disponibilidad de la información o los sistemas informáticos.                  
                    </div>
                </div>            
                <div className={styles.tarjetas}>
                    {tarjetas.map((blog, index) => (<>
                         <TarjetaBlog 
                                key={index} 
                                blog={blog} 
                                onPdfClick={handlePdfClick}
                            />
                    </>))}
                </div>
                {/*<div className={styles.plus}>
                        <Link href="../modulos/Incidentes" onClick={() => setShowTec(!showTec)} className={tecnologyStyles.toggleBtn}>
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