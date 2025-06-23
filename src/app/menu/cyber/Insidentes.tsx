import styles from'./Menu.module.css';
import Image from 'next/image';
import TarjetaBlog from './_components/TarjetaBlog';
import React from 'react'; 
import tecnologyStyles from '../../_components/Tecnology.module.css';

export default function Insidentes() {
    const [showTec, setShowTec] = React.useState(false);
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
        }
    ];
    return (
        <div className={styles.divPadre}>
            <h1 className={styles.h1todos}>Incidentes Ciberseguridad
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
                    <Image src="/modulos/cariInsidentes.png" alt="insidentes" width={100} height={90} style={{ transform: 'scaleX(-1)' }} className={styles.imgintro}/>
                    <div className={styles.frase}>Los incidentes en ciberseguridad son eventos que comprometen la confidencialidad, integridad o disponibilidad de la información o los sistemas informáticos.                  
                    </div>
                </div>            
                <div className={styles.tarjetas}>
                    {tarjetas.map((blog, index) => (<>
                        <TarjetaBlog key={index} blog={blog} />
                    </>))}
                </div>
                </>
            )}
        </div>
    )
}