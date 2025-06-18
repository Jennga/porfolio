import styles from'./Menu.module.css';

export default function Hacking() {
    return (
        <div className={styles.divPadre}>
            <h1 className={styles.h1todos}>Hacking Ético</h1>
            <div className={styles.introduccion}>El hacking ético en ciberseguridad es la práctica autorizada de vulnerar sistemas informáticos para identificar y corregir fallos de seguridad antes de que sean explotados maliciosamente.</div>
        </div>
    )
}