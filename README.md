# miguelanguai.github.io

Portfolio personal de **Miguel Ángel Guaita**, desarrollador full stack (Python · FastAPI · React · IA aplicada) en València.

🌐 **[miguelanguai.github.io](https://miguelanguai.github.io/)** · Español / English

## Contenido

- **Experiencia**: Kaizen Consulting, Fundación CEAM y Capgemini
- **Proyectos destacados**: [FireSpotter](https://github.com/miguelanguai/FireSpotter) (ganador del NASA Space Apps Valencia 2023) y VITUclim
- **Sobre mí**: formación, idiomas y stack
- **Notas**: artículos cortos sobre desarrollo

## Stack

- [Astro](https://astro.build/): sitio estático con varias páginas e i18n (ES/EN)
- CSS propio, sin frameworks, con modo claro y oscuro
- Contenido en Markdown (`src/content/`)
- Despliegue en GitHub Pages con GitHub Actions

## Desarrollo

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ en local
```

## Estructura

```text
src/
├── content/
│   ├── proyectos/{es,en}/   # casos de proyecto
│   └── notas/{es,en}/       # notas
├── data/experiencia.ts      # experiencia profesional
├── layouts/Base.astro       # cabecera, pie, metadatos y tema
├── pages/                   # rutas
└── styles/global.css        # variables de color, tipografía y modo oscuro
```

## Despliegue

Cada push a `main` lanza el workflow `.github/workflows/deploy.yml`, que construtHub Pages.

## Licencia

© 2024–2026 Miguel Ángel Guaita Villaseñor. Todos los derechos reservados (ver [LICENSE](LICENSE)).
