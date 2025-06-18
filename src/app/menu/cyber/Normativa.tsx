import styles from'./Menu.module.css';

export default function Normativa() {
    return (
        <div className={styles.divPadre}>
            <h1 className={styles.h1todos}>Normativa</h1>
            <div className={styles.introduccion}>La normativa en ciberseguridad es el conjunto de leyes, estándares y políticas que regulan el uso seguro de las tecnologías de la información para proteger datos, sistemas y redes.</div>
        </div>
    )
}