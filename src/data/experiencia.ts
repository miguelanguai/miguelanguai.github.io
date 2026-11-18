import type { Lang } from '../i18n/ui';

type Texto = Record<Lang, string>;

export interface Puesto {
  empresa: string;
  logo?: string;
  puesto: Texto;
  lugar: Texto;
  /** "AAAA-MM" */
  inicio: string;
  /** "AAAA-MM" o null si es el trabajo actual */
  fin: string | null;
  practicas?: boolean;
  logros: Record<Lang, string[]>;
  stack: string[];
  /** Slug de un caso en src/content/proyectos */
  caso?: string;
}

// Más reciente primero.
export const experiencia: Puesto[] = [
  {
    empresa: 'Kaizen Consulting Europa',
    logo: '/img/logos/kaizenLogo.svg',
    puesto: {
      es: 'Desarrollador full stack y responsable de IT',
      en: 'Full stack developer and IT lead',
    },
    lugar: { es: 'València', en: 'Valencia' },
    inicio: '2026-02',
    fin: null,
    logros: {
      es: [
        'Desarrollo de una plataforma modular que procesa documentación con IA generativa y genera informes de forma automática para el equipo de negocio.',
        'Extracción de datos de PDF y documentos con Google Gemini y Document AI, con validación de los datos extraídos.',
        'APIs con FastAPI y Pydantic sobre PostgreSQL; frontend en React + TypeScript.',
        'Más de 600 pull requests en 9 meses, con tests (pytest, Vitest), CI con GitHub Actions y despliegue en Docker.',
        'Desarrollo asistido por IA con Claude Code, incluidas skills propias para revisar el código.',
      ],
      en: [
        'Building a modular platform that processes documents with generative AI and produces reports automatically for the business team.',
        'Data extraction from PDFs and documents with Google Gemini and Document AI, including validation of the extracted data.',
        'APIs with FastAPI and Pydantic on PostgreSQL; React + TypeScript frontend.',
        'Over 600 pull requests in 9 months, with tests (pytest, Vitest), CI on GitHub Actions and Docker deployments.',
        'AI-assisted development with Claude Code, including custom skills for code review.',
      ],
    },
    stack: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'React', 'TypeScript', 'Gemini', 'Document AI', 'pytest', 'Vitest', 'Docker', 'GitHub Actions'],
  },
  {
    empresa: 'Fundación CEAM',
    logo: '/img/logos/ceamLogo.svg',
    puesto: { es: 'Desarrollador full stack', en: 'Full stack developer' },
    lugar: { es: 'Paterna', en: 'Paterna' },
    inicio: '2024-11',
    fin: '2026-02',
    logros: {
      es: [
        'Diseño y desarrollo en solitario de VITUclim, el visor público de la red de calor urbano de València.',
        'Backend con Django REST Framework y PostGIS; frontend en Angular con mapas de Leaflet.',
        'Carga y transformación de datos históricos con pandas, y una app en Python para que los técnicos validen los datos.',
        'Despliegue en Docker y Nginx, con observabilidad (Grafana, Loki, Prometheus) y pruebas de carga.',
      ],
      en: [
        'Designed and built VITUclim on my own: the public viewer for Valencia’s urban heat sensor network.',
        'Django REST Framework and PostGIS backend; Angular frontend with Leaflet maps.',
        'Historical data loading and transformation with pandas, plus a Python app for technicians to validate the data.',
        'Deployed with Docker and Nginx, with observability (Grafana, Loki, Prometheus) and load testing.',
      ],
    },
    stack: ['Python', 'Django REST', 'PostGIS', 'Angular', 'Leaflet', 'pandas', 'Docker', 'Nginx', 'Grafana', 'Prometheus'],
    caso: 'vituclim',
  },
  {
    empresa: 'Capgemini',
    logo: '/img/logos/capgeminiLogo.png',
    puesto: { es: 'Desarrollador en prácticas', en: 'Developer intern' },
    lugar: { es: 'València', en: 'Valencia' },
    inicio: '2024-03',
    fin: '2024-06',
    practicas: true,
    logros: {
      es: ['Desarrollo de funcionalidades con Spring Boot, Angular y MySQL en un equipo ágil (Scrum).'],
      en: ['Built features with Spring Boot, Angular and MySQL in an agile (Scrum) team.'],
    },
    stack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Git'],
  },
];
