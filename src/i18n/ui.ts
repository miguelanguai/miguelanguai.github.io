export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

/** Rutas de cada sección en cada idioma. */
export const routes = {
  home: { es: '/', en: '/en/' },
  experiencia: { es: '/experiencia/', en: '/en/experience/' },
  sobreMi: { es: '/sobre-mi/', en: '/en/about/' },
  notas: { es: '/notas/', en: '/en/notes/' },
  proyectos: { es: '/proyectos/', en: '/en/projects/' },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  es: {
    'site.description':
      'Miguel Ángel Guaita, desarrollador full stack en València: Python, FastAPI, React e IA aplicada.',
    'nav.experiencia': 'Experiencia',
    'nav.sobreMi': 'Sobre mí',
    'nav.notas': 'Notas',
    'nav.lang': 'English',
    'nav.langShort': 'EN',
    'nav.skip': 'Saltar al contenido',
    'theme.toDark': 'Cambiar a modo oscuro',
    'theme.toLight': 'Cambiar a modo claro',
    'home.titular': 'Desarrollador full stack · Python · FastAPI · React · IA aplicada',
    'home.lead':
      'Construyo aplicaciones en Python que automatizan procesos reales de negocio y las llevo a producción, con tests, CI/CD y Docker.',
    'home.ubicacion': 'València, España',
    'home.ahora': 'Ahora',
    'home.ahoraTexto':
      'Desarrollador full stack y responsable de IT en Kaizen Consulting Europa: una plataforma que extrae datos de documentos con IA generativa y genera informes automáticamente.',
    'home.destacados': 'Proyectos destacados',
    'home.experiencia': 'Experiencia',
    'home.verExperiencia': 'Ver la experiencia completa',
    'home.notas': 'Últimas notas',
    'home.verNotas': 'Ver todas las notas',
    'contact.email': 'Email',
    'contact.copy': 'Copiar email',
    'contact.copied': '¡Copiado!',
    'contact.cv': 'CV (PDF)',
    'exp.title': 'Experiencia',
    'exp.intro': 'Dónde he trabajado y qué he construido.',
    'exp.actualidad': 'actualidad',
    'exp.verCaso': 'Ver el caso',
    'exp.practicas': 'Prácticas',
    'about.title': 'Sobre mí',
    'about.stack': 'Stack',
    'about.formacion': 'Formación',
    'about.cursos': 'Cursos y badges',
    'about.idiomas': 'Idiomas',
    'about.fuera': 'Fuera del código',
    'about.fotoAlt': 'Miguel Ángel Guaita, sonriendo, con americana azul delante de un edificio de cristal',
    'notas.title': 'Notas',
    'notas.intro': 'Apuntes cortos sobre desarrollo, diseño de software y trabajo con IA.',
    'notas.volver': '← Todas las notas',
    'proyecto.rol': 'Mi papel',
    'proyecto.fecha': 'Fecha',
    'proyecto.stack': 'Stack',
    'proyecto.demo': 'Demo',
    'proyecto.repo': 'Repositorio',
    'proyecto.publicacion': 'Publicación',
    'proyecto.volver': '← Volver al inicio',
    'footer.rights': 'Todos los derechos reservados.',
    '404.title': 'Página no encontrada',
    '404.text': 'Esta página no existe o se ha movido.',
    '404.home': 'Volver al inicio',
  },
  en: {
    'site.description':
      'Miguel Ángel Guaita, full stack developer in Valencia, Spain: Python, FastAPI, React and applied AI.',
    'nav.experiencia': 'Experience',
    'nav.sobreMi': 'About',
    'nav.notas': 'Notes',
    'nav.lang': 'Español',
    'nav.langShort': 'ES',
    'nav.skip': 'Skip to content',
    'theme.toDark': 'Switch to dark mode',
    'theme.toLight': 'Switch to light mode',
    'home.titular': 'Full stack developer · Python · FastAPI · React · Applied AI',
    'home.lead':
      'I build Python applications that automate real business processes and take them to production, with tests, CI/CD and Docker.',
    'home.ubicacion': 'Valencia, Spain',
    'home.ahora': 'Now',
    'home.ahoraTexto':
      'Full stack developer and IT lead at Kaizen Consulting Europa: a platform that extracts data from documents with generative AI and produces reports automatically.',
    'home.destacados': 'Featured projects',
    'home.experiencia': 'Experience',
    'home.verExperiencia': 'See full experience',
    'home.notas': 'Latest notes',
    'home.verNotas': 'See all notes',
    'contact.email': 'Email',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied!',
    'contact.cv': 'Résumé (PDF)',
    'exp.title': 'Experience',
    'exp.intro': "Where I've worked and what I've built.",
    'exp.actualidad': 'present',
    'exp.verCaso': 'Read the case study',
    'exp.practicas': 'Internship',
    'about.title': 'About',
    'about.stack': 'Stack',
    'about.formacion': 'Education',
    'about.cursos': 'Courses and badges',
    'about.idiomas': 'Languages',
    'about.fuera': 'Beyond code',
    'about.fotoAlt': 'Miguel Ángel Guaita, smiling, in a blue blazer in front of a glass building',
    'notas.title': 'Notes',
    'notas.intro': 'Short notes on development, software design and working with AI.',
    'notas.volver': '← All notes',
    'proyecto.rol': 'My role',
    'proyecto.fecha': 'Date',
    'proyecto.stack': 'Stack',
    'proyecto.demo': 'Live demo',
    'proyecto.repo': 'Repository',
    'proyecto.publicacion': 'Post',
    'proyecto.volver': '← Back to home',
    'footer.rights': 'All rights reserved.',
    '404.title': 'Page not found',
    '404.text': "This page doesn't exist or has moved.",
    '404.home': 'Back to home',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key];
}

/** "2026-02" → "feb. 2026" / "Feb 2026" */
export function formatMonth(yyyyMm: string, lang: Lang) {
  const [y, m] = yyyyMm.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-GB', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(y, m - 1, 1)));
}

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Separa el id de una entrada ("es/firespotter") en idioma y slug. */
export function splitId(id: string) {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}
