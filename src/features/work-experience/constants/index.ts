import { GarageGoImage, GestionaTusDatosImage, PodoVipImage } from "../assets";
import { WorkExperience } from "../types";

export const WorkExperiences: WorkExperience[] = [
  {
    name: 'Garage Go',
    description: 'Empresa automotriz chilena que ofrece servicios de mantenimiento vehicular con retiro y entrega a domicilio. Se presentan como “la primera startup automotriz” en Chile en ofrecer una infraestructura de soluciones para un servicio completo de movilidad eficiente.',
    role: ['Full Stack Developer'],
    date: '21/04/25 - Actualidad',
    manager: 'Javier Palma | +56 9 34172037',
    image: GarageGoImage
  },
  {
    name: 'Podo Vip',
    description: 'Plataforma que ofrece venta de cursos online especializados en podología, contiene material didáctico y entrega certificados avalados por instituciones y especialistas reconocidos en el sector.',
    role: ['Full Stack Developer'],
    date: '05/08/2025 - Actualidad',
    manager: 'Javier Palma | +56 9 34172037',
    image: PodoVipImage
  },
  {
    name: 'Gestiona Tus Datos',
    description: 'Firma chilena especializada en transformar datos públicos y privados en reportes dinámicos y paneles de control para facilitar la toma de decisiones, especialmente orientada a instituciones públicas como municipalidades y entidades del Estado.',
    role: ['Full Stack Developer', 'Diseñador UX/UI'],
    date: '12/05/2025 - 24/06/2025',
    manager: 'Ricardo | +56 9 56321548',
    image: GestionaTusDatosImage
  },
]