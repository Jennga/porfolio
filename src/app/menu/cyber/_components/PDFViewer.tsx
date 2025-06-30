'use client';
import React from 'react';
import styles from '../Menu.module.css';

type PDFViewerProps = {
    pdfUrl: string;
    title: string;
    isOpen: boolean;
    onClose: () => void;
};

const PDFViewer = ({ pdfUrl, title, isOpen, onClose }: PDFViewerProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h3>{title}</h3>
                    <button onClick={onClose} className={styles.closeButton}>
                        ✕
                    </button>
                </div>
                <div className={styles.pdfContainer}>
                    <iframe
                        src={pdfUrl}
                        width="100%"
                        height="600px"
                        title={title}
                        style={{ border: 'none' }}
                    />
                </div>
                <div className={styles.modalFooter}>
                    <a 
                        href={pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                    >
                        Abrir en nueva pestaña
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PDFViewer;
