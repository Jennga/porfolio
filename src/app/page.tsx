import MainHome from "./_components/MainHome";
import FooterHome from "./_components/FooterHome";

// Definir las clases en una constante
const containerClass =
  [
    "grid",
    "grid-rows-[20px_1fr_auto]",
    "items-center",
    "justify-items-center",
    "min-h-screen",
    "p-4",
    "sm:p-8",
    "pb-20",
    "gap-8",
    "sm:gap-16",
    "font-[family-name:var(--font-geist-sans)]",
  ].join(" ");

export default function Home() {
  return (
    <div className={containerClass}>
      <MainHome />
      <FooterHome />
    </div>
  );
}
