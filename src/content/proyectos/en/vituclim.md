---
title: VITUclim
resumen: Public viewer for Valencia's urban heat sensor network, designed and built on my own at the CEAM Foundation.
fecha: 2024 – 2026
rol: Sole developer (design, backend, frontend and deployment)
stack: [Python, Django REST Framework, PostgreSQL, PostGIS, Angular, OpenLayers, pandas, Docker, Nginx, Grafana, Loki, Prometheus]
destacado: true
orden: 1
demo: https://vituclim.org/home
publicacion: https://www.linkedin.com/feed/update/urn:li:activity:7492492663385063424/
imagen: /img/proyectos/vituclim-mapa-sensores.jpg
imagenAlt: Map of Valencia and its metropolitan area with dozens of red dots, one per sensor, and a side panel with the current temperature and humidity
---

## The problem

Conventional weather stations can't capture how temperature changes from one neighbourhood to the next. The Meteorology and Climatology Area at the CEAM Foundation runs a network of temperature and humidity sensors across Valencia, its metropolitan area and Alzira to study the urban heat island. It needed a way to load, validate and show that data to researchers, the public and local authorities.

## The solution

![VITUclim home page: a sensor network to monitor urban heat in the Valencia metropolitan area and the city of Alzira (in Spanish)](/img/proyectos/vituclim-portada.png)

I designed and built VITUclim end to end:

- **Backend** with Django REST Framework and PostGIS to store and query each sensor's time series and location.
- **Frontend** in Angular with OpenLayers maps: every sensor on the map, with its data and history.
- **Data**: loading and transforming historical data with pandas, plus a Python app for technicians to validate measurements before publishing them.
- **Infrastructure**: deployed with Docker and Nginx, with observability through Grafana, Loki and Prometheus, and load testing.

![A sensor's card on the map: name, district, first and last measurement dates and total number of records](/img/proyectos/vituclim-detalle-sensor.jpg)

![A sensor report showing temperature and humidity over one week](/img/proyectos/vituclim-informe-sensor.jpg)

## My role

I was the project's only developer: I chose the architecture, built the backend, frontend and data tools, and deployed it. I worked closely with the research team to understand what they needed.

## Outcome

- Over 80 temperature and humidity sensors across Valencia and Alzira, one of the most detailed urban heat observation networks in Spain.
- An observability template for Django, extracted from this project and published as open source: [django-loki-grafana-logging](https://github.com/miguelanguai/django-loki-grafana-logging).
