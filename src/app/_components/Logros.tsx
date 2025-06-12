import Image from 'next/image';
import './TecnologyResponsive.css'; 

const styles = {
    gen1Style: {
        display: 'flex',
        flexDirection: 'column' as React.CSSProperties['flexDirection'],
        background: '#A9B5DF',
        borderRadius: '25px',
        width: '90vw',
        padding: '20px',
        marginBottom: '1.5vw',
    },
    h1Style: {
        color: '#FFFFFF',
        fontSize: '2rem',
        margin: '0',
        borderRadius: '20px',
        paddingLeft: '20px',
        background: '#7886C7',
        width: '30vw',
        marginBottom: '1vw',
    },
    h2Style: {
        color: '#FFFFFF',
        fontSize: '1.3rem',
        margin: '0',
        paddingLeft: '20px',
        width: '25vw',
        marginBottom: '1vw',
        marginLeft: '1.3vw',
    },
    imagenes: {
        display: 'flex',
        flexDirection: 'row' as React.CSSProperties['flexDirection'],
        alignItems: 'center',
        marginTop: '1vw',
        marginLeft: '3vw',
        marginBottom: '1.3vw',
        borderLeft: '3px solid #7886C7',
        borderTop: 'none',
        padding: '14px',
        gap: '0',
    },
    imgSize: { width: 200, height: 200 },
    certImgSize: { width: 400, height: 200 },
    certImgStyle: { padding: '16px' },
};

export default function Logros() {
    return (
        <div style={styles.gen1Style} className="logros-container">
            <h1 style={styles.h1Style} className="logros-title">Logros</h1>
            <h2 style={styles.h2Style} className="logros-subtitle">AWS</h2>
            <div style={styles.imagenes} className="logros-images">
                <Image src="/logros/awsCloudFound.png" alt="awsFonund" width={styles.imgSize.width} height={styles.imgSize.height} style={{ width: '100%', maxWidth: styles.imgSize.width, height: 'auto' }} className="logros-img" />
                <Image src="/logros/awsCloudArq.png" alt="awsArquitect" width={styles.imgSize.width} height={styles.imgSize.height} style={{ width: '100%', maxWidth: styles.imgSize.width, height: 'auto' }} className="logros-img" />
                <Image src="/logros/insg1aws.png" alt="awsinicial" width={styles.imgSize.width} height={styles.imgSize.height} style={{ width: '100%', maxWidth: styles.imgSize.width, height: 'auto' }} className="logros-img" />
            </div>
            <h2 style={styles.h2Style} className="logros-subtitle">Hackthebox</h2>
            <div style={styles.imagenes} className="logros-images">
                <Image
                    src="/logros/Cert.png"
                    alt="certificadohacking"
                    width={styles.certImgSize.width}
                    height={styles.certImgSize.height}
                    style={styles.certImgStyle}
                    className="logros-img"
                />
            </div>
        </div>
    );
}