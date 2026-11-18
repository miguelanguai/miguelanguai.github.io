---
title: VITUclim
resumen: Visor público de la red de sensores de calor urbano de València, diseñado y desarrollado en solitario en la Fundación CEAM.
fecha: 2024 – 2026
rol: Único desarrollador (diseño, backend, frontend y despliegue)
stack: [Python, Django REST Framework, PostgreSQL, PostGIS, Angular, OpenLayers, pandas, Docker, Nginx, Grafana, Loki, Prometheus]
destacado: true
orden: 1
demo: https://vituclim.org/home
publicacion: https://www.linkedin.com/feed/update/urn:li:activity:7492492663385063424/
imagen: /img/proyectos/vituclim-mapa-sensores.jpg
imagenAlt: Mapa de València y su área metropolitana con decenas de puntos rojos, uno por sensor, y un panel lateral con la temperatura y la humedad actuales
---

## El problema

Las estaciones meteorológicas convencionales no captan cómo cambia la temperatura de un barrio a otro. El Área de Meteorología y Climatología de la Fundación CEAM despliega una red de sensores de temperatura y humedad en València, su área metropolitana y Alzira para estudiar la isla de calor urbana. Hacía falta una forma de cargar, validar y enseñar esos datos, tanto a investigadores como al público y a las administraciones.

## La solución

![Portada de VITUclim: «Red de sensores para la monitorización del calor urbano en el área metropolitana de Valencia y en la ciudad de Alzira»](/img/proyectos/vituclim-portada.png)

Diseñé y desarrollé VITUclim de principio a fin:

- **Backend** con Django REST Framework y PostGIS para guardar y consultar las series de cada sensor y su posición.
- **Frontend** en Angular con mapas de OpenLayers: cada sensor en el mapa, con sus datos y su histórico.
- **Datos**: carga y transformación de los datos históricos con pandas, y una aplicación en Python para que el personal técnico valide las mediciones antes de publicarlas.
- **Infraestructura**: despliegue con Docker y Nginx, observabilidad con Grafana, Loki y Prometheus, y pruebas de carga.

![Ficha de un sensor en el mapa: nombre, distrito, fechas de la primera y la última medición y número total de registros](/img/proyectos/vituclim-detalle-sensor.jpg)

![Informe de un sensor con la evolución de la temperatura y la humedad durante una semana](/img/proyectos/vituclim-informe-sensor.jpg)

## Mi papel

Fui el único desarrollador del proyecto: decidí la arquitectura, construí el backend, el frontend y las herramientas de datos, y lo desplegué. Trabajé mano a mano con el equipo de investigación para entender qué necesitaban.

## Resultado

- Más de 80 sensores de temperatura y humedad en València y Alzira, en una de las redes de observación del calor urbano más detalladas de España.
- Una plantilla de observabilidad para Django, sacada de este proyecto y publicada en abierto: [django-loki-grafana-logging](https://github.com/miguelanguai/django-loki-grafana-logging).
