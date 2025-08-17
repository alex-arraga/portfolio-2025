import { Card } from "@/components";
import Image from "next/image";

export default function AboutMePage() {
  return (
    <main className="flex flex-col gap-10 justify-center items-center mx-72 my-20">
      <h1 className="text-5xl font-semibold">
        About me
      </h1>

      {/* Card of me */}
      <Card className="flex justify-between items-center gap-16">
        <div className="w-4/5">
          <h2 className="text-3xl font-medium">
            Alex Arraga
          </h2>
          <p className="mt-6 text-neutral-300">
            Apasionado de la tecnología, comencé mi carrera de Software Developer en el año 2022 y desde entonces me dedique a estudiar de manera disciplinada para mejorar como profesional.
          </p>
          <p className="mt-6 text-neutral-300">
            He trabajado para diferentes empresas en calidad de Diseñador UX/UI y también como Full Stack Developer, haciéndome cargo de todas las facetas de un proyecto, desde su diseño hasta su despliegue.
          </p>
        </div>
        <div className="relative w-1/5 h-60 rounded-2xl bg-neutral-900">
          <Image
            src="/images/me/me-1-black.jpg"
            alt="alex arraga"
            fill
            className="object-contain rounded-2xl"
          />
        </div>
      </Card>

      {/* Objetives */}
      <div>

      </div>


    </main>
  );
}