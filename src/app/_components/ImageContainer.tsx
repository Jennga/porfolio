import React from 'react';
import Image from 'next/image';
import style from './MainHome.module.css';
import Link from 'next/link';

type ImageContainerProps = {
  setShowPdf: (show: boolean) => void;
};

export default function ImageContainer({ setShowPdf }: ImageContainerProps) {
    return (
        <div className={style.image_container}>
          <div className={style.left}>
            <div className={style.text}>
              <div className={style.name}>JENNIFER</div>
              <div className={style.role}>CIBERSEGURIDAD</div>
            </div>
            <div className={style.buttonsContainer}>
        <button
          className={style.buttonBase}
          type="button"
          onClick={() => setShowPdf(true)}
        >
          <Image
            src="/dragon.svg"
            alt="dragon-boll"
            width={20}
            height={20}
            style={{ marginRight: 8 }}
          />
          CV
        </button>
        <Link
          className={style.buttonBase}
          href="/menu/cyber"
        >
          <Image
            src="/padlock.svg"
            alt="candado"
            width={22}
            height={22}
            style={{ marginRight: 10 }}
          />
          BLOG CIBERSEGURIDAD
        </Link>
      </div>
          </div>
          <div className={style.imageyo}>
            <Image
              src="/caricaturamia.png"
              alt="caricatura"
              width={500}
              height={600}
            />
          </div>
        </div>
    );
}