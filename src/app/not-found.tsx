import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-10">
        <p className="text-2xl font-light">Oops! esta pagina no existe</p>
        <h1 className="text-8xl font-bold">404</h1>
        <Link
          href='/about-me'
          className="bg-white text-black rounded-md px-10 py-2 hover:scale-110 duration-200"
        >
          Regresar al inicio
        </Link>
      </div>
    </main>
  );
}