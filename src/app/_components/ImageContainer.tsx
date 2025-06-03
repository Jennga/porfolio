import Image from 'next/image';
export default function ImageContainer() {
    const imageContainerClass =
  [
    "relative",
    "w-full",
    "max-w-xs",
    "sm:max-w-md",
    "md:max-w-lg"
  ].join(" ");

const topTextClass =
  [
    "absolute",
    "top-0",
    "right-0",
    "text-base",
    "sm:text-xl",
    "md:text-2xl",
    "font-semibold",
    "text-right",
    "p-2",
    "sm:p-6"
  ].join(" ");

const bottomTextClass =
  [
    "absolute",
    "bottom-0",
    "left-0",
    "text-xs",
    "sm:text-sm",
    "md:text-base",
    "font-semibold",
    "text-left",
    "p-1",
    "sm:p-2"
  ].join(" ");
    return (
    <div className={imageContainerClass}>
            <div className={topTextClass}>
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
            <div className={bottomTextClass}>
              Jennifer Galván
            </div>
          </div>)
}