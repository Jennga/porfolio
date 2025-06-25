"use client";
import FooterHome from '@/app/_components/FooterHome';
import Fondo from '@/app/modulos/_components/Fondo';
import TarjetaBlog from '@/app/menu/cyber/_components/TarjetaBlog';
import styles from '@/app/modulos/_components/Fondo.module.css';

const globalblogStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};
const tarjetas = [
        {
            titulo: "Análisis",
            descripcion: "Explora las técnicas y herramientas para analizar malware y entender su funcionamiento.",
            imagen: "/dragon.svg",
            fecha: "2023-10-01"
        },
        {
            titulo: "Investigación de Incidentes",
            descripcion: "Aprende a investigar incidentes de seguridad y a recopilar evidencia digital.",
            imagen: "/dragon.svg",
            fecha: "2023-10-05"
        },
        {
            titulo: "Recuperación de Datos",
            descripcion: "Conoce los métodos para recuperar datos perdidos o dañados en sistemas comprometidos.",
            imagen: "/dragon.svg",
            fecha: "2023-10-10"
        },
         {
            titulo: "Recuperación de Datos",
            descripcion: "Conoce los métodos para recuperar datos perdidos o dañados en sistemas comprometidos.",
            imagen: "/dragon.svg",
            fecha: "2023-10-10"
        }
    ];

export default function Page() {
    return (
         <div style={globalblogStyle}>
            <main style={globalblogStyle}>         
                <Fondo logoSrc="/modulos/cariHacking.png" logoAlt="hacking" title="HACKING ÉTICO" /> 
                <div className={styles.tarjetas}>
                        {tarjetas.map((blog, index) => (
                            <TarjetaBlog key={index} blog={blog} />
                        ))}
                    </div>                
            </main>
                <FooterHome/>
        </div>  
    );
}
