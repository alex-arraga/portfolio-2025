import Image from "next/image";
import { Metadata } from "next";
import { Card } from "@/components";

export const metadata: Metadata = {
  title: 'Alex Arraga'
}

export default function AboutMePage() {
  return (
    <main className="container-page space-to-footer">
      <section className="container-section">

        <h1 className="h1-bold">About me</h1>

        <div className="flex flex-col gap-6">
          {/* Me */}
          <Card className="flex justify-between items-center gap-16">
            <div className="w-full md:w-4/5">
              <h2 className="h2-bold">
                Alex Arraga
              </h2>
              <p className="mt-6 txt-gray text-sm md:text-base">
                Apasionado de la tecnología, comencé mi carrera de Software Developer en el año 2022 y desde entonces me dedique a estudiar de manera disciplinada para mejorar como profesional.
              </p>
              <p className="mt-6 txt-gray text-sm md:text-base">
                He trabajado para diferentes empresas en calidad de Diseñador UX/UI y también como Full Stack Developer, haciéndome cargo de todas las facetas de un proyecto, desde su diseño hasta su despliegue.
              </p>
            </div>
            <div className="relative hidden lg:block lg:w-2/5 xl:w-1/5 h-60 rounded-2xl bg-neutral-900">
              <Image
                src="/images/me/me-1-black.jpg"
                alt="alex arraga"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </Card>


          <div className="flex flex-col lg:flex-row w-full gap-4">
            {/* Objetive */}
            <Card className="w-full">
              <h3 className="h3-semibold">Objetivos</h3>
              <div className="flex flex-col gap-6 mt-6">
                <p className="txt-gray text-sm md:text-base">
                  1. Convertirme en un  Backend Developer especializado en Go, trabajando en grandes empresas que empleen una arquitectura de micro-servicios.
                </p>
                <p className="txt-gray text-sm md:text-base">
                  2. Mejorar mi nivel de ingles para poder ampliar mis ofertas laborales y poder intercambiar ideas con profesionales de todas partes del mundo
                </p>
              </div>
            </Card>

            <div className="flex gap-4 justify-start items-center w-full xl:max-w-md">
              {/* Age */}
              <Card className="flex flex-col justify-center items-center gap-4 md:gap-6 w-full h-full lg:max-w-60">
                <h3 className="text-base md:h3-medium">Edad</h3>
                <span className="text-6xl md:text-7xl font-bold">25</span>
                <h3 className="text-base md:h3-medium">Años</h3>
              </Card>

              {/* English */}
              <Card className="flex flex-col justify-center items-center gap-4 md:gap-6 w-full h-full lg:max-w-60">
                <h3 className="text-base md:h3-medium">Level</h3>
                <span className="text-6xl md:text-7xl font-bold">B1</span>
                <h3 className="text-base md:h3-medium">English</h3>
              </Card>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}