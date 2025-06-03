export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl sm:text-3xl font-bold">Blog</h1>
      <p className="text-lg sm:text-xl text-center">
        Bienvenido al blog de ciberseguridad. Aquí encontrarás artículos y recursos
        para mejorar tus conocimientos en seguridad informática.
      </p>
      <div className="w-full max-w-4xl">
        {/* Aquí puedes agregar componentes o enlaces a artículos del blog */}
      </div>
    </div>
  );
}