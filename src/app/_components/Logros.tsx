import Image from 'next/image';
import { useEffect, useState } from 'react';

function useResponsiveStyles() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 700);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        gen1Style: {
            display: 'flex',
            flexDirection: 'column' as React.CSSProperties['flexDirection'],
            background: '#A9B5DF',
            borderRadius: '25px',
            width: isMobile ? '98vw' : '90vw',
            padding: isMobile ? '8px' : '20px',
            marginBottom: isMobile ? '3vw' : '1.5vw',
        },
        h1Style: {
            color: '#FFFFFF',
            fontSize: isMobile ? '1.3rem' : '2rem',
            margin: '0',
            borderRadius: '20px',
            paddingLeft: isMobile ? '8px' : '20px',
            background: '#7886C7',
            width: isMobile ? '70vw' : '30vw',
            marginBottom: isMobile ? '2vw' : '1vw',
        },
        h2Style: {
            color: '#FFFFFF',
            fontSize: isMobile ? '1rem' : '1.3rem',
            margin: '0',
            paddingLeft: isMobile ? '8px' : '20px',
            width: isMobile ? '60vw' : '25vw',
            marginBottom: isMobile ? '2vw' : '1vw',
            marginLeft: isMobile ? '2vw' : '1.3vw',
        },
        imagenes: {
            display: 'flex',
            flexDirection: (isMobile ? 'column' : 'row') as React.CSSProperties['flexDirection'],
            alignItems: 'center',
            marginTop: isMobile ? '2vw' : '1vw',
            marginLeft: isMobile ? '0' : '3vw',
            marginBottom: isMobile ? '2vw' : '1.3vw',
            borderLeft: isMobile ? 'none' : '3px solid #7886C7',
            borderTop: isMobile ? '3px solid #7886C7' : 'none',
            padding: isMobile ? '8px' : '14px',
            gap: isMobile ? '12px' : '0',
        },
        imgSize: isMobile
            ? { width: 140, height: 90 }
            : { width: 200, height: 200 },
        certImgSize: isMobile
            ? { width: 240, height: 120 }
            : { width: 400, height: 200 },
        certImgStyle: isMobile
            ? { padding: '8px', width: '100%', height: 'auto' }
            : { padding: '16px' },
    };
}

export default function Logros() {
    const styles = useResponsiveStyles();

    return (
        <div style={styles.gen1Style}>
            <h1 style={styles.h1Style}>Logros</h1>
            <h2 style={styles.h2Style}>AWS</h2>
            <div style={styles.imagenes}>
                <Image src="/logros/awsCloudFound.png" alt="awsFonund" {...styles.imgSize} style={{ width: '100%', maxWidth: styles.imgSize.width, height: 'auto' }} />
                <Image src="/logros/awsCloudArq.png" alt="awsArquitect" {...styles.imgSize} style={{ width: '100%', maxWidth: styles.imgSize.width, height: 'auto' }} />
                <Image src="/logros/insg1aws.png" alt="awsinicial" {...styles.imgSize} style={{ width: '100%', maxWidth: styles.imgSize.width, height: 'auto' }} />
            </div>
            <h2 style={styles.h2Style}>Hackthebox</h2>
            <div style={styles.imagenes}>
                <Image
                    src="/logros/Cert.png"
                    alt="certificadohacking"
                    {...styles.certImgSize}
                    style={styles.certImgStyle}
                />
            </div>
        </div>
    );
}