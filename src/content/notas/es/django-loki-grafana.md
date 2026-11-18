---
title: Observabilidad en Django con Loki y Grafana
descripcion: Una plantilla con Docker Compose para tener los logs de Django en Grafana desde el primer día.
fecha: 2025-09-17
---

Mientras desarrollaba [VITUclim](/proyectos/vituclim/) monté una infraestructura para monitorizar el proyecto a gran escala. Me gustó tanto el resultado que hice una versión mínima para reutilizarla como punto de partida en otros proyectos: [django-loki-grafana-logging](https://github.com/miguelanguai/django-loki-grafana-logging).

## Qué incluye

Un `docker compose up -d` levanta tres piezas:

- **Django**, el backend que genera los logs.
- **Loki**, que los recoge y los guarda (con Grafana Alloy como agente que los envía).
- **Grafana**, para consultarlos y montar paneles.

No hay que tocar el código de Django para que sus logs lleguen a Grafana: se capturan automáticamente desde el contenedor.

## Cómo se usa

1. Clonar el repositorio y ejecutar `docker compose up -d`.
2. Entrar en Grafana y añadir Loki como origen de datos (`http://loki:3100`).
3. Crear un panel filtrando por la etiqueta `service_name = backend`.
4. Afinar la consulta, por ejemplo con un filtro de línea para ver solo los `ERROR`.

El README tiene cada paso con capturas.

## Por qué merece la pena

Con los logs centralizados, cuando algo falla en producción no hay que entrar en el servidor a buscar en ficheros: se filtra por servicio, por nivel o por texto, y se ve qué pasó y cuándo. Montarlo al principio cuesta poco; montarlo con el primer incidente encima cuesta mucho más.

Si te resulta útil, dale una ⭐ al repositorio o haz un fork para mejorarlo.
