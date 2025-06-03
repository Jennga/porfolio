import Link from "next/link";
import Image from "next/image";
const FooterHome = () => {
    return (
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
        <Link href="/blog">BLOG</Link>
      </footer>)
}
export default FooterHome;