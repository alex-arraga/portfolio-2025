import { Projects } from "../types";

export const BackendProjects: Projects[] = [
  {
    type: 'personal',
    title: 'RSS Scraper',
    description: 'permite almacenar y gestionar artículos en una base de datos',
    stack: ['Go', 'Postgres'],
    architecture: 'REST API',
    goal: 'Obtener datos estructurados de múltiples fuentes',
    solution: 'Ejecuta rutinas para extraer datos de cada feed y los almacena en base de datos.'
  },
  {
    type: 'personal',
    title: 'API Ecommerce',
    description: 'permite autenticar usuarios y realizar un flujo de compra con Mercado Pago como pasarela de pago',
    stack: ['Go', 'Chi', 'Postgres'],
    architecture: 'Hexagonal - Micro Servicios',
    goal: 'Simular una las funcionalidades y complejidad de un ecommerce real',
    solution: 'Utilizar una arquitectura de Micro Servicios para la aplicación, donde cada modulo utiliza Hexagonal Architecture'
  },
  {
    type: 'personal',
    title: 'Live chat',
    description: 'Un chat en tiempo real similar a WhatsApp pero enteramente escrita en Go',
    stack: ['Go', 'Chi', 'Websockets', 'Postgres'],
    architecture: 'REST API',
    goal: 'Aprender a utilizar websockets y servidores en vivo',
    solution: 'Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum '
  },
]

export const FullStackProjects: Projects[] = [
  {
    type: 'production',
    title: 'Garage Go',
    description: 'un ecommerce enfocado en ofrecer servicios del sector automotriz',
    stack: ['Next.js', 'TypeScript', 'MongoDB'],
    rol: 'Full Stack Developer',
    date: '21/04/2025 - Actualidad',
    manager: 'Javier Palma | +56 9 34172037'
  },
  {
    type: 'in-process',
    title: 'Podo Vip',
    description: 'Plataforma de cursos online especializados en podología',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    rol: 'Full Stack Developer',
    date: '21/04/2025 - Actualidad',
    manager: 'Javier Palma | +56 9 34172037'
  },
  {
    type: 'production',
    title: 'Gestiona Tus Datos',
    description: 'Plataforma de cursos online especializados en podología',
    stack: ['Next.js', 'TypeScript'],
    rol: 'Full Stack Developer',
    date: '21/04/2025 - Actualidad',
    manager: 'Ricardo | +56 9 56321548'
  },

  // Personal
  {
    type: 'personal',
    title: 'Teslo Shop',
    description: 'Un chat en tiempo real similar a WhatsApp pero enteramente escrita en Go',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    architecture: 'Server Actions',
    goal: 'Aprender a utilizar websockets y servidores en vivo',
    solution: 'Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum '
  },
  {
    type: 'personal',
    title: 'Calculadora',
    description: 'Un chat en tiempo real similar a WhatsApp pero enteramente escrita en Go',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    goal: 'Aprender a utilizar websockets y servidores en vivo',
    solution: 'Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum '
  },
  {
    type: 'personal',
    title: 'To Do',
    description: 'Un chat en tiempo real similar a WhatsApp pero enteramente escrita en Go',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    goal: 'Aprender a utilizar websockets y servidores en vivo',
    solution: 'Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum '
  },
]

