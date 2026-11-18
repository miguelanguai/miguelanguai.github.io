import type { Lang } from '../i18n/ui';

type Texto = Record<Lang, string>;

export const contacto = {
  email: 'miguelanguai@gmail.com',
  linkedin: 'https://www.linkedin.com/in/miguelangelguaita/',
  github: 'https://github.com/miguelanguai',
  // Rellena con la ruta del PDF en /public/cv/ cuando lo subas (issue #19).
  // Revisa antes que no lleve el teléfono ni otros datos que no quieras publicar.
  cv: { es: null, en: null } as Record<Lang, string | null>,
};

export const bio: Record<Lang, string[]> = {
  es: [
    'Soy desarrollador full stack en València. Construyo aplicaciones en Python que automatizan procesos reales de negocio y las llevo a producción.',
    'Me interesa usar la IA con criterio: dentro de sistemas fiables y testeados, y como herramienta de desarrollo. Trabajo a diario con Claude Code y con flujos propios.',
    'Llegué a la programación después de estudiar Magisterio. En 2023 gané el NASA Space Apps Valencia con un equipo de compañeros del ciclo, y desde entonces he trabajado en investigación ambiental y en consultoría.',
  ],
  en: [
    "I'm a full stack developer based in Valencia, Spain. I build Python applications that automate real business processes and take them to production.",
    'I care about using AI with judgement: inside reliable, well-tested systems, and as a development tool. I work with Claude Code every day, with my own workflows.',
    'I came to programming after a degree in Primary Education. In 2023 I won NASA Space Apps Valencia with classmates from my web development course, and since then I have worked in environmental research and consulting.',
  ],
};

export const stack: { grupo: Texto; items: string[] }[] = [
  { grupo: { es: 'Backend', en: 'Backend' }, items: ['Python', 'FastAPI', 'Pydantic', 'Django', 'Django REST Framework', 'Java', 'Spring Boot'] },
  { grupo: { es: 'Frontend', en: 'Frontend' }, items: ['React', 'TypeScript', 'Angular', 'Tailwind CSS', 'OpenLayers'] },
  { grupo: { es: 'IA', en: 'AI' }, items: ['IA generativa / LLM', 'Google Gemini', 'Document AI', 'Claude Code'] },
  { grupo: { es: 'Datos', en: 'Data' }, items: ['PostgreSQL', 'PostGIS', 'MySQL', 'pandas'] },
  { grupo: { es: 'Calidad y DevOps', en: 'Quality & DevOps' }, items: ['pytest', 'Vitest', 'JUnit', 'GitHub Actions', 'Docker', 'Nginx', 'Linux', 'Git'] },
  { grupo: { es: 'Observabilidad', en: 'Observability' }, items: ['Prometheus', 'Grafana', 'Loki', 'Sentry'] },
];

export const formacion: { titulo: Texto; centro: string; fechas: string }[] = [
  {
    titulo: { es: 'Máster de FP en Administración de Recursos y Servicios Cloud', en: 'Vocational Master in Cloud Resources and Services Administration' },
    centro: 'IES Juan de Garay, València',
    fechas: '2024 – 2025',
  },
  {
    titulo: { es: 'CFGS Desarrollo de Aplicaciones Web', en: 'Higher Vocational Diploma in Web Application Development' },
    centro: 'IES Juan de Garay, València',
    fechas: '2022 – 2024',
  },
  {
    titulo: { es: 'Grado en Maestro en Educación Primaria (mención en Inglés)', en: 'BA in Primary Education (English specialisation)' },
    centro: 'Universitat de València',
    fechas: '2018 – 2022',
  },
];

// ⚠️ AWS Academy Cloud Foundations no se ha incluido: pendiente de comprobar en Credly (issue #22).
export const cursos: { nombre: string; emisor: string; fecha: string }[] = [
  { nombre: 'Claude Code in Action', emisor: 'Anthropic', fecha: '2026' },
  { nombre: 'Introduction to Claude Cowork', emisor: 'Anthropic', fecha: '2026' },
  { nombre: 'Claude Code 101', emisor: 'Anthropic', fecha: '2026' },
  { nombre: 'AWS Academy Graduate – Cloud Developing (training badge)', emisor: 'AWS Training and Certification', fecha: '2024' },
];

export const idiomas: { idioma: Texto; nivel: Texto }[] = [
  { idioma: { es: 'Español', en: 'Spanish' }, nivel: { es: 'Nativo', en: 'Native' } },
  { idioma: { es: 'Valenciano', en: 'Valencian' }, nivel: { es: 'C1', en: 'C1' } },
  { idioma: { es: 'Inglés', en: 'English' }, nivel: { es: 'B2 (EOI)', en: 'B2 (EOI)' } },
  { idioma: { es: 'Francés', en: 'French' }, nivel: { es: 'A2 (EOI)', en: 'A2 (EOI)' } },
];

// ⚠️ Año de inicio como árbitro pendiente de unificar (issue #22).
export const fueraDelCodigo: Record<Lang, string[]> = {
  es: [
    'Árbitro de fútbol en la Federació de Futbol de la Comunitat Valenciana desde 2018. Me ha enseñado a decidir rápido y con calma bajo presión.',
    'Work & Travel en Hersheypark (Pensilvania, EE. UU.) en el verano de 2023: trabajo en un entorno internacional en inglés.',
  ],
  en: [
    'Football referee in the Valencian Football Federation since 2018. It has taught me to make fast, calm decisions under pressure.',
    'Work & Travel at Hersheypark (Pennsylvania, USA) in summer 2023: working in an international, English-speaking team.',
  ],
};
