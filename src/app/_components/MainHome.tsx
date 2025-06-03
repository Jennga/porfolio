import Image from 'next/image';
import ImageContainer from './ImageContainer';

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
    "w-full",
    "sm:w-auto",
    "md:w-[158px]"
  ].join(" ");

export default function MainHome() {
  return (
    <main className={mainClass}>
        <ImageContainer />
      <div className={buttonsContainerClass}>
        <a
          className={cvButtonClass}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          CV
        </a>
        <a
          className={cyberButtonClass}
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="text-black mr-2.5"
            src="/padlock.svg"
            alt="candado"
            width={22}
            height={22}
          />
          Cyber
        </a>
      </div>
    </main>
  );
}