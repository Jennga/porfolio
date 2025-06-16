import Image from 'next/image';
import styles from './TecnologyResponsive.module.css';

export default function Logros() {
    return (
        <div className={styles.general}>
            <h1 className={styles.h1general}>Logros</h1>
            <h2 className={styles.h2general}>AWS</h2>
            <div className={styles.imgSizeLogo}>
                <Image
                    src="/logros/awsCloudFound.png"
                    alt="awsFonund"
                    className={styles.aws}
                    width={200}
                    height={200}
                />
                <Image
                    src="/logros/awsCloudArq.png"
                    alt="awsArquitect"
                    className={styles.aws}
                    width={200}
                    height={200}
                />
                <Image
                    src="/logros/insg1aws.png"
                    alt="awsinicial"
                    className={styles.aws}
                    width={200}
                    height={200}
                />
            </div>
            <h2 className={styles.h2general}>Hackthebox</h2>
            <div className={styles.imgSizeLogo}>
                <Image
                    src="/logros/Cert.png"
                    alt="certificadohacking"
                    className={styles.ctf}
                    width={800}
                    height={200}
                />
            </div>
        </div>
    );
}