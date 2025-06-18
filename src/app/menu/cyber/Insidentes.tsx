import styles from'./Menu.module.css';

export default function Insidentes() {
    return (
        <div className={styles.divPadre}>
            <h1 className={styles.h1todos}>Insidentes Ciberseguidad</h1>
            <div className={styles.introduccion}>Los incidentes en ciberseguridad son eventos que comprometen la confidencialidad, integridad o disponibilidad de la información o los sistemas informáticos.</div>
        </div>
    )
}