---
title: FireSpotter
resumen: Predictor del avance de incendios forestales a partir de datos de la NASA y del tiempo, hecho en 48 horas.
fecha: Octubre 2023
rol: Desarrollador en un equipo de cinco
stack: [JavaScript, HTML, CSS, Leaflet, NASA FIRMS, OpenWeatherMap, Git, Jira]
logro: Ganador NASA Space Apps Valencia 2023
destacado: true
orden: 2
demo: https://miguelanguai.github.io/FireSpotter/
repo: https://github.com/miguelanguai/FireSpotter
imagen: /img/proyectos/firespotter.png
imagenAlt: Mapa de la península ibérica y el norte de África con iconos de fuego sobre los incendios activos y una leyenda de colores
---

## El problema

Cuando hay un incendio activo, saber hacia dónde va a avanzar en las próximas horas ayuda a decidir dónde concentrar los medios y a quién evacuar. Los datos para estimarlo existen (focos detectados por satélite, viento, temperatura, humedad), pero están dispersos y no son fáciles de interpretar en plena emergencia.

## La solución

FireSpotter junta en un mismo mapa los incendios activos que detectan los satélites de la NASA con el tiempo que hace en cada foco, y dibuja hacia dónde es probable que avance.

- **Datos de incendios**: la API de [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov/) da los focos detectados por los sensores MODIS y VIIRS de cada país. Usamos la potencia radiativa del fuego (FRP) para separar los incendios reales de los simples puntos calientes.
- **Datos meteorológicos**: para cada foco se consulta en tiempo real la velocidad y dirección del viento, la temperatura y la humedad (OpenWeatherMap).
- **Modelo de propagación**: diseñamos una fórmula propia que multiplica la velocidad del viento por varios factores: combustible (a partir de la curva de Campbell), ángulo del viento, temperatura, humedad y terreno. El resultado es la distancia que puede recorrer el fuego en una hora.
- **Visualización**: cada foco se dibuja como un cono orientado según el viento, con un arco de colores que indica si el riesgo aumenta o disminuye. Un cono es fácil de leer de un vistazo, tanto para equipos de extinción como para el público.

Todo con JavaScript sin frameworks y Leaflet para el mapa, organizándonos con Git y Jira durante las 48 horas del NASA Space Apps Challenge (7 y 8 de octubre de 2023).

## Mi papel

Formé parte de un equipo de cinco compañeros del ciclo de Desarrollo de Aplicaciones Web, y el proyecto vive en mi repositorio de GitHub. Me encargué sobre todo de la parte visual:

- Programé en el mapa el abanico que muestra hacia dónde avanza cada foco, con su arco de colores, y la leyenda que lo explica.
- Hice la interfaz: tipografía, versión móvil, logo y favicon.
- Después del hackathon rediseñé la página de inicio que presenta el proyecto.

## Resultado

- **Primer premio general** del NASA Space Apps Valencia 2023.
- **Premio al mejor uso de datos.**
- La demo sigue publicada y se puede probar en el navegador.
- Dejamos documentada una línea de futuro: usar datos LiDAR para pasar el cono a 3D sobre el relieve real.
