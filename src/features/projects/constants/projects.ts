import {
  BackendStoreLink,
  CalculatorLink,
  CryptoTickerLink,
  GarageGoLink,
  GestionDatosLink,
  JavierManager,
  OldPortfolioLink,
  RicardoManager, RssScraperLink, TesloShopLink, ToDoLink
} from "@/features/projects/constants";
import { Projects } from "../types";

export const BackendProjects: Projects[] = [
  {
    type: 'personal',
    title: 'RSS Scraper',
    description: 'Permite almacenar y gestionar artículos en una base de datos',
    stack: ['Go', 'Postgres'],
    architecture: 'REST API',
    goal: 'Obtener datos estructurados de múltiples fuentes',
    solution: 'Ejecuta rutinas para extraer datos de cada feed y los almacena en base de datos',
    link: RssScraperLink
  },
  {
    type: 'personal',
    title: 'User Auth',
    description: 'Permite la autenticación de usuarios con multiples cuentas asociadas a un mismo email',
    stack: ['Go', 'GORM', 'Postgres'],
    architecture: 'REST API',
    goal: 'Permitir a los usuario estar registrados con multiples cuentas',
    solution: 'Modelado de datos para permitir relacion 1-N donde un usuario puede tener multiples cuentas asociados a un mismo email',
    link: BackendStoreLink
  },
  {
    type: 'personal',
    title: 'Crypto Ticker',
    description: 'Simula el comportamiento del mercado de criptomendas, cada cierto intervalo de tiempo el precio de un activo fluctua',
    stack: ['Go', 'Websockets', 'Channels'],
    architecture: 'Hexagonal',
    goal: 'Mejorar la comprensión en el uso de Websockets, Go routines y Channels',
    solution: 'Crear un Websocket Server para emular la constante fluctuación de activos como BTC o ETH',
    link: CryptoTickerLink
  },
]

export const FullStackProjects: Projects[] = [
  {
    type: 'production',
    title: 'Garage Go',
    description: 'Un ecommerce enfocado en ofrecer servicios del sector automotriz',
    stack: ['Next.js', 'TypeScript', 'MongoDB'],
    rol: 'Full Stack Developer',
    date: '21/04/2025 - Actualidad',
    manager: JavierManager,
    link: GarageGoLink
  },
  {
    type: 'in-process',
    title: 'Podo Vip',
    description: 'Plataforma de cursos online especializados en podología',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    rol: 'Full Stack Developer',
    date: '21/04/2025 - Actualidad',
    manager: JavierManager
  },
  {
    type: 'production',
    title: 'Gestiona Tus Datos',
    description: 'Empresa que transforma datos públicos en informes accesibles a la comunidad',
    stack: ['Next.js', 'TypeScript'],
    rol: 'Full Stack Developer',
    date: '21/04/2025 - Actualidad',
    manager: RicardoManager,
    link: GestionDatosLink
  },

  // Personal
  {
    type: 'personal',
    title: 'Teslo Shop',
    description: 'Una ecommerce que ofrece ropa de la marca Tesla',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    architecture: 'App Router | Server Actions',
    goal: 'Crear una tienda online desde el comienzo para entender los flujos y la complejidad que conlleva este tipo de apps',
    solution: 'Utilizar el poder de las Server Actions y una base de datos Postgres, donde se guardan todas las entidades relacionadas al negocio',
    link: TesloShopLink
  },
  {
    type: 'personal',
    title: 'Old Portfolio',
    description: 'Una ecommerce que ofrece ropa de la marca Tesla',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    goal: 'Crear un portfolio de presentación donde se muestren mis conocimientos y experiencias',
    architecture: 'App Router',
    solution: 'Autenticación utilizando Clerk, junto con Next.js y Postgres',
    link: OldPortfolioLink
  },
  {
    type: 'personal',
    title: 'Calculadora',
    description: 'Permite almacenar un historial de calculos, además de realizar operaciones complejas',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    architecture: 'App Router',
    goal: 'Crear una herramienta de cálculo que elimine la necesidad de recordar o reingresar resultados anteriores',
    solution: 'Permitir al usuario generar un historial de cálculos, mostrando el detalle de cada operación y su resultado',
    link: CalculatorLink
  },
  {
    type: 'personal',
    title: 'To Do',
    description: 'Una aplicación para crear y gestionar tareas pendientes',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    architecture: 'App Router',
    goal: 'Aprender a utilizar bases de datos para crear tareas y marcarlas como completadas',
    solution: 'Utilización de Postgres y formularios para la creación de las mismas',
    link: ToDoLink
  },
]

/*
! Projects to do
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
*/
