import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada archivo vive en src/content/<colección>/<idioma>/<slug>.md
// El id que genera Astro es "<idioma>/<slug>".

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    resumen: z.string(),
    fecha: z.string(),
    rol: z.string(),
    stack: z.array(z.string()),
    logro: z.string().optional(),
    destacado: z.boolean().default(false),
    orden: z.number().default(99),
    demo: z.string().optional(),
    repo: z.string().optional(),
    publicacion: z.string().optional(),
    imagen: z.string().optional(),
    imagenAlt: z.string().optional(),
  }),
});

const notas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
  }),
});

export const collections = { proyectos, notas };
