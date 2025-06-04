import Image from 'next/image';
import ImageContainer from './ImageContainer';
import Link from 'next/link';
const mainClass =
  [
    "flex",
    "flex-col",
    "gap-8",
    "sm:gap-[32px]",
    "row-start-2",
    "items-center",
    "w-full",
    "max-w-4xl"
  ].join(" ");
const buttonsContainerClass =
  [
    "flex",
    "flex-col",
    "sm:flex-row",
    "gap-4",
    "items-center",
    "justify-center",
    "w-auto",
    "rounded-2xl", // <-- Añadido para bordes redondeados
    "p-2.5",
    "bg-white", // Opcional: para que se note el redondeado, ajusta según tu tema
    "dark:bg-[#7A86B6]" // Opcional: fondo en modo oscuro
  ].join(" ");
const baseButtonClass = [
  "rounded-full",
  "transition-colors",
  "flex",
  "items-center",
  "justify-center",
  "font-medium",
  "text-sm",
  "sm:text-base",
  "h-10",
  "sm:h-12",
  "px-4",
  "sm:px-5",
  "w-full",
  "sm:w-auto",
  "hover:text-[#495C83]",
].join(" ");

const cvButtonClass = [
  baseButtonClass,
  "bg-foreground",
  "text-background",
  "gap-2",
  "hover:bg-[#f2f2f2]",
  "dark:hover:bg-[#A8A4CE]",
].join(" ");

const cyberButtonClass = [
  baseButtonClass,
  "hover:bg-[#A8A4CE]",
  "dark:hover:bg-[#A8A4CE]",
].join(" ");

export default function MainHome() {
  return (
    <main className={mainClass}>
        <ImageContainer />
      <div className={buttonsContainerClass}>
        <Link
          className={cvButtonClass}
          href="/menu/cv"
        >
          <Image
            className=""
            src="/dragon.svg"
            alt="dragon-boll"
            width={20}
            height={20}
          />
          CV
        </Link>
        <Link
          className={cyberButtonClass}
          href="/menu/cyber"
        >
          <Image
            className="text-black mr-2.5"
            src="/padlock.svg"
            alt="candado"
            width={22}
            height={22}
          />
          BLOG CIBERSEGURIDAD
        </Link>
      </div>
    </main>
  );
}