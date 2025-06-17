import Image from 'next/image';
import style from './MainHome.module.css';

export default function ImageContainer() {
    return (
        <div className={style.image_container}>           
            <div className={style.imageyo}>
                <Image
                    src="/caricaturamia.png"
                    alt="caricatura"
                    width={600}
                    height={600}
                />
            </div>
            <div className={style.text}>
                <div className={style.name}>
                    JENNIFER
                </div>
                <div className={style.role}>
                    CIBERSEGURIDAD
                </div>
            </div>
        </div>
    );
}