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
    "w-full"
  ].join(" ");
const cvButtonClass =
  [
    "rounded-full",
    "border",
    "border-solid",
    "border-transparent",
    "transition-colors",
    "flex",
    "items-center",
    "justify-center",
    "bg-foreground",
    "text-background",
    "gap-2",
    "hover:bg-[#383838]",
    "dark:hover:bg-[#ccc]",
    "font-medium",
    "text-sm",
    "sm:text-base",
    "h-10",
    "sm:h-12",
    "px-4",
    "sm:px-5",
    "w-full",
    "sm:w-auto"
  ].join(" ");
const cyberButtonClass =
  [
    "rounded-full",
    "border",
    "border-solid",
    "border-black/[.08]",
    "dark:border-white/[.145]",
    "transition-colors",
    "flex",
    "items-center",
    "justify-center",
    "hover:bg-[#f2f2f2]",
    "dark:hover:bg-[#1a1a1a]",
    "hover:border-transparent",
    "font-medium",
    "text-sm",
    "sm:text-base",
    "h-10",
    "sm:h-12",
    "px-4",
    "sm:px-5",
    "w-fit",
    "sm:w-auto",
    "md:w-[158px]"
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