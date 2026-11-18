# Contenido del portfolio: qué tiene que haber y qué falta

Análisis hecho el 15/11/2026 cruzando cuatro fuentes:
- **CV 2026**: `Empleo/00_ACTUAL/CV_MiguelAngelGuaita_2026.pdf`
- **Datos maestros**: `Empleo/01_BUSQUEDA/Formación y certificaciones.md`
- **LinkedIn** (perfil público y publicaciones)
- **GitHub** (`miguelanguai`, perfil y repos)

La web actual (`index.html`) se quedó en el perfil de 2024: «Programador Junior. Spring Boot + Angular». Tu perfil real hoy es **Full Stack Developer · Python · FastAPI · React · IA aplicada**, con 2 años en producción. El portfolio nuevo debe contar eso.

---

## 1. Contenido que ya tienes (solo hay que pasarlo a la web)

| Bloque | Fuente | Estado en la web actual |
|---|---|---|
| Titular y perfil (full stack, Python/FastAPI/React, IA) | CV, LinkedIn «Acerca de» | ❌ Desactualizado (Spring Boot + Angular) |
| Kaizen Consulting (feb. 2026 – hoy) | CV | ❌ «Descripción pendiente», stack solo «Python» |
| CEAM / VITUclim (nov. 2024 – feb. 2026) | CV, publicación de CEAM en LinkedIn | ❌ «Descripción pendiente», stack solo «Python» |
| Capgemini (prácticas) | CV | ⚠️ Fechas distintas (ver §3) |
| FireSpotter, NASA Space Apps 2023 | CV, LinkedIn, `02_PORTFOLIO/NASA SpaceApps` | ✅ Está, pero como «experiencia» |
| finma (proyecto personal) | CV, GitHub | ❌ No aparece |
| django-loki-grafana-logging (plantilla de observabilidad) | GitHub, publicación en LinkedIn | ❌ No aparece |
| Picoop (proyecto final del DAW) | GitHub (`picoopSpring`, `picoopAngular` + demo en Vercel) | ✅ Está, pero como «experiencia» |
| Formación (Máster FP Cloud, DAW, Magisterio) | CV | ❌ No aparece |
| Cursos y badges (AWS Academy, Anthropic ×3) | Datos maestros | ❌ No aparece |
| Idiomas | CV | ❌ No aparece |
| Árbitro de fútbol, Work & Travel EE. UU. | CV | ❌ No aparece |
| Foto | `00_ACTUAL/foto_perfil.jpg` | ✅ Hay dos fotos |

---

## 2. Contenido que falta y tienes que crear tú

### Imprescindible
- [ ] **Casos de proyecto** (lo que te gusta del ejemplo 4). Para cada uno de los proyectos principales (Kaizen, VITUclim, FireSpotter, finma), con este guion:
  - Problema: qué había que resolver y para quién
  - Tu papel: solo o en equipo; qué hiciste tú
  - Solución y stack
  - Resultado con números (sensores, PR, usuarios, tiempos ahorrados…)
  - Una o dos imágenes: captura, diagrama de arquitectura o GIF
  - Enlaces: demo, repositorio, publicación
- [ ] **Capturas de VITUclim**: el visor es público. Falta la URL y 2-3 capturas (mapa, detalle de sensor, panel de Grafana).
- [ ] **Material de Kaizen sin datos confidenciales**: tienes un anexo de no competencia y una cláusula LOPD. La plataforma no se puede enseñar, así que hace falta un **diagrama de arquitectura genérico** (PDF → Gemini/Document AI → validación con Pydantic → informe) y un texto sin nombres de clientes ni del ERP. Revísalo con la empresa si tienes dudas.
- [ ] **Capturas o GIF de finma** y un README con descripción. En GitHub el repo no tiene descripción ni web.
- [ ] **CV descargable en PDF** (ES y EN; ya tienes los dos en `00_ACTUAL`), enlazado desde la web.
- [ ] **Texto «Sobre mí» nuevo**. El actual habla de «búsqueda activa» y de que te interesaste por programar a los 16. Base mejor: tu «Acerca de» de LinkedIn (IA con criterio, sistemas testeados, arbitraje = decidir bajo presión).

### Recomendable
- [ ] **Imagen para compartir** (Open Graph, 1200×630) y metadatos `og:` / `twitter:`. Ahora mismo, al pegar el enlace en LinkedIn no sale vista previa.
- [ ] **Versión en inglés** (tienes Resume EN y README de GitHub en inglés).
- [ ] **Sección de notas o escritos** (como mxb.dev o timmyomahony.com): ya tienes material en LinkedIn (patrones de diseño, Claude Code 101, observabilidad con Loki y Grafana). Podrían ser 3-4 entradas cortas.
- [ ] **Testimonio o referencia** (el artículo de Mailchimp lo recomienda): por ejemplo, de tu responsable en el CEAM.

### Limpieza en GitHub (el portfolio enlaza ahí)
- [ ] Fijar (pin) 4-6 repos: finma, FireSpotter, django-loki-grafana-logging, picoopSpring/picoopAngular, hello-angular-django-geoserver.
- [ ] Añadir descripción y temas a los repos fijados (casi ninguno tiene).
- [ ] Valorar archivar los ejercicios de clase (`ejerciciosHTML`, `ejerciciosCSS`, `hello-*`, `tutorialCG`…) para que no tapen los proyectos.
- [ ] Publicar como perfil el README de `Empleo/Claude outputs/README.md` (repo `miguelanguai/miguelanguai`). Ojo: dice «fintech company», cuando el CV dice consultora: unifícalo.

---

## 3. Incoherencias entre fuentes (decididas el 18/11/2026, issue #22)

| Dato | Web antigua | CV 2026 | LinkedIn / datos maestros | ✅ Decisión |
|---|---|---|---|---|
| Titular | Programador Junior. Spring Boot + Angular | Full Stack Developer · Python · FastAPI · React · IA aplicada | Full Stack Developer \| Python · FastAPI · Django · React \| Applied AI. Bajo el nombre aún pone «Programador Web» | Full stack · Python · FastAPI · React · IA aplicada |
| Disponibilidad | «Disponible para trabajar», «búsqueda activa» | — | Contrato indefinido en Kaizen | No mencionarla |
| Capgemini | mar. – may. 2024 | mar. – jun. 2024 | mar. – jun. 2024 | **mar. – jun. 2024** |
| Árbitro desde | — | 2018 | LinkedIn: 2017. Datos maestros: sept. 2018 | **2017** |
| Categoría de árbitro | — | Lliga Comunitat | 2ª FFCV | **Lliga Comunitat** |
| NASA Space Apps | Ganador | Solo «Best Use of Data» | Ganador general **y** mejor uso de datos | **Ganador general y mejor uso de datos** |
| Sensores de VITUclim | — | más de 100 | Publicación del CEAM: más de 70 en València + 17 en Alzira (≈87) | **130** (los que muestra vituclim.org como activos; actualizado el 18/11/2026) |
| Valenciano | — | C1 (JQCV) | C1 (EOI) | **C1 (JQCV)** |
| AWS Cloud Foundations | — | Sí | No está en LinkedIn | **Sí**: badge en Credly, abril de 2023 |
| Copyright del pie | © 2023 | — | — | Año actual automático |
| Picoop | Experiencia laboral (mar. – jun. 2024) | No aparece | Proyecto del DAW | Fuera de Experiencia |

---

## 4. Decisiones tomadas (15/11/2026)

| Tema | Decisión |
|---|---|
| Idioma | Español por defecto + versión en inglés con selector |
| Disponibilidad | No poner nada (ni «Disponible para trabajar» ni «búsqueda activa») |
| Estilo visual | Minimalista y basado en texto, con el rojo `#A60505` como único color de marca, y modo oscuro |
| Tipografía | Sans para el texto + monoespaciada para detalles (fechas, stack) |
| Tecnología | Astro, varias páginas, desplegado en GitHub Pages con una Action |
| Código actual | Rama nueva; la web actual sigue en `main` hasta que la nueva esté lista |
| Secciones | Portada, Experiencia, Sobre mí + formación, Notas/blog, Contacto |
| Proyectos destacados | FireSpotter y VITUclim |

⚠️ **Una cosa que no encaja**: has elegido proyectos destacados, pero no una sección de Proyectos. Propuesta:
- Enseñarlos en la **portada** con 2 tarjetas que llevan a su página de caso
- Enlazar VITUclim también desde **CEAM**, en Experiencia
- Poner FireSpotter como logro

## 4.1 Estructura de la web

1. **Portada**: nombre, titular en una línea, ubicación, foto pequeña, enlaces (email, LinkedIn, GitHub, CV) y 2 tarjetas de proyectos destacados
2. **Experiencia**: línea de tiempo sencilla (empresa, puesto, fechas, 2-3 logros, stack en mono)
3. **Páginas de caso**: `proyectos/firespotter` y `proyectos/vituclim`
4. **Sobre mí + formación**: texto corto, arbitraje, idiomas, estudios, cursos, y el stack agrupado (backend, frontend, IA, datos, DevOps) sin barras de «nivel»
5. **Notas**: entradas cortas a partir de tus publicaciones de LinkedIn
6. **Contacto / pie**

## 4.2 Pasos para hacerlo tú

1. **Crear la rama**
   ```bash
   git checkout -b astro-rewrite
   ```
2. **Crear el proyecto Astro** con la plantilla mínima, en la raíz o en una carpeta `site/`
   ```bash
   npm create astro@latest -- --template minimal
   ```
   Añade `node_modules/` y `dist/` a `.gitignore`.
3. **Configurar el despliegue**
   - En `astro.config.mjs`: `site: 'https://miguelanguai.github.io'` e `i18n: { defaultLocale: 'es', locales: ['es', 'en'] }`
   - En GitHub, ve a **Settings → Pages → Source** y elige **GitHub Actions**
   - Añade `.github/workflows/deploy.yml` con la Action oficial `withastro/action`
4. **Organizar el contenido como datos**
   - Casos de proyecto: `src/content/proyectos/{es,en}/*.md`, con frontmatter `title, fecha, stack, demo, repo, imagen`
   - Notas: `src/content/notas/{es,en}/*.md`
   - Experiencia: `src/data/experiencia.ts`
5. **Hacer un layout base** (`src/layouts/Base.astro`) con:
   - Cabecera, pie y selector de idioma
   - Metadatos `og:` y `twitter:`
   - El script de tema actual, que puedes reaprovechar tal cual
6. **Definir el estilo en un CSS global**
   - Variables en `:root`: `--accent: #A60505`, fondo y texto, con su versión oscura
   - Una sola columna de unos 680–720px de ancho
   - Fuente mono: JetBrains Mono o IBM Plex Mono, en `.woff2` local como Fira Sans
7. **Montar las páginas**: `index`, `experiencia`, `sobre-mi`, `notas/[slug]` y `proyectos/[slug]`
8. **Escribir el contenido** siguiendo las listas de los apartados 1 y 2. Antes, corrige las incoherencias del apartado 3 y usa la misma versión en el CV, LinkedIn y la web
9. **Fusionar con `main`** cuando esté listo, y borra `index.html`, `assets/styles` y `assets/scripts`

---

## 5. Qué tomar de cada referencia

| # | Portfolio | Qué tomar |
|---|---|---|
| 1 | Max Bock (mxb.dev) | Va al grano: qué haces en la primera frase. Sencillo y cuidado |
| 2 | Olaolu (olaolu.dev) | Un toque de personalidad (color, forma) sin perder la sencillez |
| 4 | Kemi Adeleke (kemiadeleke.com) | Casos de proyecto con contexto, proceso y resultado; la persona detrás del trabajo |
| 9 | Gift Egwuenu (giftegwuenu.com) | Casi todo lo importante en la portada; enlaces a perfiles que respaldan lo que dices |
| 11 | Timmy O'Mahony (timmyomahony.com) | Perfil backend: estructura simple, pocas secciones y claras, resumen de skills por encima del efectismo |

**Conclusión**: diseño minimalista y basado en texto, con un único acento de personalidad, y el peso puesto en los **casos de proyecto**. Encaja con un perfil backend/full stack: lo que convence es lo que has construido, no las animaciones.
