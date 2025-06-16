import Image from 'next/image';
import './MainHomeResponsive.css';

export default function ImageContainer() {
    // Estilos para escritorio (fila: texto izquierda, imagen derecha)
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row-reverse', // Cambiado aquí
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: '2rem',
    };

    const imgWrapperStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '50%',
    };

    const textStyle: React.CSSProperties = {
        fontWeight: 'bold',
        WebkitTextStroke: '2px #FFF2F2',
        color: 'transparent',
        display: 'block',
        textAlign: 'center',
        fontSize: '2.5rem',
        width: '100%',
    };

    return (
        <div className="image-container" style={containerStyle}>           
            <div className="image-container__img-wrapper" style={imgWrapperStyle}>
                <Image
                    src="/caricaturamia.png"
                    alt="caricatura"
                    width={600}
                    height={600}
                    priority
                    className="image-container__img"
                />
            </div>
             <div className="image-container__text">
                <span style={textStyle} className="image-container__name">
                    JENNIFER
                </span>
                <br />
                <span style={textStyle} className="image-container__role">
                    CIBERSEGURIDAD
                </span>
            </div>
        </div>
    );
}