"use client";
import FooterHome from '@/app/_components/FooterHome';
import Fondo from '@/app/modulos/_components/Fondo';
import TarjetaBlog from '@/app/menu/cyber/_components/TarjetaBlog';
import PDFViewer from '@/app/menu/cyber/_components/PDFViewer';
import styles from '@/app/modulos/_components/Fondo.module.css';
import React, { useState } from 'react';

const globalblogStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};

export default function Page() {
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
            },
             {
                titulo: "Análisis de Vulnerabilidades",
                descripcion: "Identifica y evalúa vulnerabilidades en sistemas y aplicaciones para fortalecer la seguridad.",
                imagen: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center",
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
         <div style={globalblogStyle}>
            <main style={globalblogStyle}>         
                <Fondo logoSrc="/modulos/cariNormativa.png" logoAlt="normativa" title="NORMATIVA"/> 
                <div className={styles.tarjetas}>
                        {tarjetas.map((blog, index) => (
                            <TarjetaBlog 
                                key={index} 
                                blog={blog} 
                                onPdfClick={handlePdfClick}
                            />
                        ))}
                    </div>
                    <PDFViewer
                        pdfUrl={pdfViewer.pdfUrl}
                        title={pdfViewer.title}
                        isOpen={pdfViewer.isOpen}
                        onClose={closePdfViewer}
                    />                
            </main>
                <FooterHome/>
        </div>  
    );
}
