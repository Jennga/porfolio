import styles from '../Menu.module.css';
import Image from 'next/image';
import React, { useState } from 'react';

type Blog = {
    titulo: string;
    descripcion: string;
    imagen?: string;
    pdfUrl?: string;
};

type TarjetaBlogProps = {
    blog: Blog;
    onPdfClick?: (pdfUrl: string, title: string) => void;
};

const TarjetaBlog = ({ blog, onPdfClick }: TarjetaBlogProps) => {
    const [showTec, setShowTec] = useState(false);
    
    const handleClick = () => {
        if (blog.pdfUrl && onPdfClick) {
            setShowTec(!showTec);
            onPdfClick(blog.pdfUrl, blog.titulo);
        }
    };

    return (
        <div 
            className={`${styles.tarjeta} ${blog.pdfUrl ? styles.clickable : ''}`}
            onClick={handleClick}
        >
            <div>
                <h2 className={styles.h2tarj}>{blog.titulo}</h2>
                <p className={styles.ptarj}>{blog.descripcion}</p>
            </div>
            <div style={{ height: '75%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {blog.imagen && (
                    <img
                        src={blog.imagen}
                        alt={blog.titulo}
                        className={styles.imgtarj}
                    />
                )}
            </div>
            {blog.pdfUrl && (
                <div className={styles.pdfIndicator}>
                     <Image
                        src="/pdf.svg"
                        alt="pfd"
                        width={50}
                        height={22}
                        className={`${styles.pdfIcon} ${showTec ? styles.pdfIconPressed : ''}`}
                        />
                </div>
            )}
        </div>
    );
};
export default TarjetaBlog;