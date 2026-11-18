---
title: FireSpotter
resumen: A wildfire spread predictor built in 48 hours on NASA and weather data.
fecha: October 2023
rol: Developer in a team of five
stack: [JavaScript, HTML, CSS, Leaflet, NASA FIRMS, OpenWeatherMap, Git, Jira]
logro: Winner, NASA Space Apps Valencia 2023
destacado: true
orden: 2
demo: https://miguelanguai.github.io/FireSpotter/
repo: https://github.com/miguelanguai/FireSpotter
imagen: /img/proyectos/firespotter.png
imagenAlt: Map of the Iberian Peninsula and North Africa with fire icons over active wildfires and a colour legend
---

## The problem

When a wildfire is active, knowing where it will spread in the next few hours helps decide where to send resources and whom to evacuate. The data to estimate it exists (satellite-detected hotspots, wind, temperature, humidity), but it is scattered and hard to read in the middle of an emergency.

## The solution

FireSpotter brings the active fires detected by NASA satellites and the current weather at each hotspot together on one map, and draws where each fire is likely to spread.

- **Fire data**: the [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov/) API provides the hotspots detected by the MODIS and VIIRS sensors for each country. We used Fire Radiative Power (FRP) to tell real fires apart from mere hot spots.
- **Weather data**: for each hotspot we fetch the current wind speed and direction, temperature and humidity (OpenWeatherMap).
- **Spread model**: we designed our own formula that multiplies wind speed by several factors: fuel (based on the Campbell fire curve), wind angle, temperature, humidity and terrain. The result is how far the fire can travel in an hour.
- **Visualisation**: each hotspot is drawn as a cone pointing with the wind, with a colour arc showing whether the risk is rising or falling. A cone is easy to read at a glance, for firefighting teams and the public alike.

All in framework-free JavaScript with Leaflet for the map, organised with Git and Jira during the 48 hours of the NASA Space Apps Challenge (7–8 October 2023).

## My role

I was part of a team of five classmates from the Web Application Development course, and the project lives in my GitHub repository. I mainly owned the visual side:

- I built the fan on the map that shows where each hotspot is heading, with its colour arc, and the legend that explains it.
- I built the interface: typography, mobile layout, logo and favicon.
- After the hackathon, I redesigned the landing page that presents the project.

## Outcome

- **Overall first prize** at NASA Space Apps Valencia 2023.
- **Best Use of Data award.**
- The demo is still live and runs in the browser.
- We documented a next step: using LiDAR data to turn the cone into 3D over the real terrain.
