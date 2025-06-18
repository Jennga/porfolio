import styles from'./Menu.module.css';

export default function Analisis() {
    return (
        <div className={styles.divPadre}>
            <h1 className={styles.h1todos}>Análisis Forense</h1>
            <div className={styles.introduccion}>El análisis forense en ciberseguridad es el proceso de identificar, recopilar, preservar y analizar evidencia digital para investigar incidentes de seguridad y determinar su causa, impacto y responsables.</div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}