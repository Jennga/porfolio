import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Tecnology.module.css';

export default function Estudios() {
     const [showTec, setShowTec] = useState(false);
    return (
        <div className={styles.general}>
            <h1 className={styles.h1general}>Estudios
                <button onClick={() => setShowTec(!showTec)} className={styles.toggleBtn}>
                    <Image
                        src="/down.svg"
                        alt="Desplegar"
                        width={24}
                        height={24}
                        className={styles.toggleIcon}
                        style={{
                            transform: showTec ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s'
                        }}
                    />
                </button>
            </h1>
            {showTec && (
                <>
                <h2 className={styles.h2general}>ASIR</h2>
                <div className={styles.imgSizeLogo}>
                    I.E.S Zaidín-Vergeles (2022-2024)
                </div>
                <h2 className={styles.h2general}>CIBERSEGUIDAD</h2>
                <div className={styles.imgSizeLogo}>
                    I.E.S Zaidín-Vergeles (2024-2025) Nota 10/10
                </div>
                </>
            )}
        </div>
    );
}