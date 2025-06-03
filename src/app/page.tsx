import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:gap-[32px] row-start-2 items-center w-full max-w-4xl">
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg">
          <div className="absolute top-0 right-0 text-base sm:text-xl md:text-2xl font-semibold text-right p-2 sm:p-6">
            Ciberseguridad
          </div>
          <Image
            src="/caricaturamia.png"
            alt="caricatura"
            width={500}
            height={80}
            priority
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-0 left-0 text-xs sm:text-sm md:text-base font-semibold text-left p-1 sm:p-2">
            Jennifer Galván
          </div>
        </div>
        <div className="bg-green-500 text-white p-2 sm:p-4 text-center w-full rounded">
          Tailwind está funcionando
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
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
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
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
      <footer className="row-start-3 flex flex-col sm:flex-row gap-4 sm:gap-[24px] flex-wrap items-center justify-center w-full">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Jennga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/flor.jpg"
            alt="File icon"
            width={16}
            height={16}
            className="rounded-full"
          />
          GitHub: Jennga
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/jennifer-galv%C3%A1n-bejarano-b68467318/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.jpg"
            alt="Window icon"
            width={16}
            height={16}
            className="rounded-full"
          />
          Linkedin
        </a>
      </footer>
    </div>
  );
}
