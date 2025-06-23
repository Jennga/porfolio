import styles from '../Menu.module.css';
 
type Blog = {
    titulo: string;
    descripcion: string;
    imagen?: string;
    fecha?: string;
};
const TarjetaBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div className={styles.tarjeta}>
            <h2 >{blog.titulo}</h2>
            <p >{blog.descripcion}</p>
            {blog.imagen && (
                <img
                    src={blog.imagen}
                    alt={blog.titulo}
                />
            )}
            {blog.fecha && (
                <p >{new Date(blog.fecha).toLocaleDateString()}</p>
            )}
        </div>
    );
};
export default TarjetaBlog;