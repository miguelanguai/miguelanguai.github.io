# Plan de mejoras UI/UX — miguelanguai.github.io

## Resumen ejecutivo

El portfolio transmite una identidad visual clara (rojo oscuro, tipografía limpia, tarjetas con efecto 3D) y tiene una estructura sencilla que funciona bien. Los puntos críticos son dos: **ausencia total de media queries** (el sitio se rompe en móvil) y **varios problemas de accesibilidad WCAG** que afectan a usuarios de teclado y lectores de pantalla.

---

## Problemas críticos

### 1. Sin media queries — el sitio se rompe en móvil

`styles.css` no tiene ningún breakpoint. El margen `margin: 4rem 14rem` en `main` y `footer` deja el contenido aplastado o con scroll horizontal en pantallas menores de ~900px. Toda la maquetación de tarjetas y textos usa unidades fijas que no se adaptan.

### 2. El idioma del HTML no coincide con el contenido - **Completado**

`<html lang="en">` pero todo el texto está en español. Los lectores de pantalla pronunciarán mal el contenido.

**Fix:** Cambiar a `lang="es"`.

### 3. Sin skip link — teclado atrapado en el header - **Completado**

No hay `<a href="#main-content" class="skip-link">` para saltar la navegación repetida. Viola WCAG 2.4.1 (Level A).

### 4. El header fijo tapa el contenido al navegar

`main` no tiene `padding-top` suficiente para compensar el header fijo. Al navegar a `#experience` o `#about`, el título queda oculto debajo del header.

---

## Problemas altos

### 5. Tarjetas de experiencia: interacción invisible - **Completado**

El flip 3D al hacer hover es el único modo de ver el contenido de la tarjeta. No hay indicación visual de que es interactiva (sin `cursor: pointer`, sin hint de texto). En móvil (sin hover) el contenido **nunca se ve**. También falla para usuarios de solo teclado (WCAG 2.1).

**Fix:** Añadir estado `:focus-within` y un indicador visual ("Ver detalle").

### 6. Contenido del flip visible para lectores de pantalla en todo momento - **Completado**

`.job-card_content` está ocultado con `transform: rotateX(-90deg)` pero sin `visibility: hidden` ni `aria-hidden`. Los lectores de pantalla leen el texto del anverso y del reverso simultáneamente.

**Fix:** Añadir `visibility: hidden` en el estado por defecto y `visibility: visible` en hover/focus.

### 7. Ausencia de estados de foco visibles - **Completado**

El CSS solo define `:hover`. No hay `:focus` ni `:focus-visible` en ningún elemento interactivo (nav links, tarjetas, links de introducción). Viola WCAG 2.4.7.

### 8. Contraste insuficiente en la descripción de las tarjetas

`.job-card_description` usa `color: #777` sobre fondo `#f2f2f2` → ratio ≈ 4.1:1. No supera el mínimo WCAG AA (4.5:1) para texto normal.

**Fix:** Usar `#636363` o más oscuro.

### 9. Badge "Disponible para trabajar" — intención opaca - **Completado**

El elemento no indica que lleva a LinkedIn ni que es un enlace externo. Un visitante nuevo no lo identificará como interactivo.

---

## Problemas medios

### 10. Tipografía: `line-height` con unidad `rem` en lugar de unitless

`line-height: 1.4rem` en `body`. Si el usuario escala la fuente del navegador, la proporción se rompe.

**Fix:** Usar `line-height: 1.5` (sin unidad).

### 11. Colisión de clase y elemento en los títulos de sección - **Completado**

`<h2 class="section-title">` dentro de un `<div class="section-title">` crea un conflicto: el `div` hereda `display: inline` aplicado al encabezado. Reestructurar para que solo el `div` tenga la clase de layout.

### 12. HTML inválido: `</section>` huérfano - **Completado**

Hay una etiqueta `</section>` de cierre justo antes de `</main>` que no corresponde a ningún `<section>` abierto (`<article id="about">` cierra con ella).

### 13. `copyMail.js` no está conectado al HTML

La función `copiarTexto()` existe en `assets/scripts/copyMail.js` pero ningún elemento del HTML la invoca.

**Fix:** Conectarla a un botón de copia de email o eliminar el archivo.

### 14. Header con `margin: 1rem` y `width: 100%` genera desbordamiento - **Completado**

El margen lateral sumado al ancho total provoca overflow horizontal.

**Fix:** Usar `left: 0; right: 0` y controlar el ancho interno con padding en el `nav`.

### 15. Falta `font-display: swap` en los webfonts - **Completado**

`assets/fonts/stylesheet.css` no especifica `font-display`. Puede causar texto invisible durante la carga (FOIT — Flash of Invisible Text).

---

## Problemas bajos

### 16. Sin `<meta name="theme-color">`

En Chrome/Android, la barra del navegador no adopta el color de marca.

### 17. Imágenes de logo con tamaño fijo en las tarjetas

`<img src="capgeminiLogo.png" width="400">` con atributo fijo puede sobrepasar el contenedor en móvil.

**Fix:** Eliminar el atributo `width` del HTML y controlar el tamaño desde CSS con `max-width: 100%`.

### 18. Sin modo oscuro

El diseño es solo claro. Muchos usuarios tienen el sistema en modo oscuro (`prefers-color-scheme: dark`).

### 19. El footer duplica la navegación del header

En una single page tan corta, repetir "Sobre mí" y "Contacto" aporta poco. Se podría sustituir por los links de redes sociales (LinkedIn, GitHub).

---

## Orden de implementación recomendado

| # | Tarea | Prioridad |
|---|-------|-----------|
| 1 | Añadir media queries para móvil (≤768px) y tablet (≤1024px) | Crítica — **Completado** |
| 2 | Corregir `lang="es"` en el `<html>` | Crítica — **Completado** |
| 3 | Skip link + `padding-top` en `main` para el header fijo | Crítica — **Completado** |
| 4 | Estados `:focus-visible` en todos los elementos interactivos | Alta — **Completado** |
| 5 | `visibility: hidden/visible` en `.job-card_content` + foco en tarjetas | Alta — **Completado** |
| 6 | Mejorar contraste: `#777` → `#636363` en `.job-card_description` | Alta — **Completado** |
| 7 | Corregir HTML inválido (`</section>` huérfano) | Media — **Completado** |
| 8 | `line-height` sin unidad + `font-display: swap` | Media — **Completado** |
| 9 | Conectar o eliminar `copyMail.js` | Media — **Completado** |
| 10 | Dark mode básico con `prefers-color-scheme` | Baja |
