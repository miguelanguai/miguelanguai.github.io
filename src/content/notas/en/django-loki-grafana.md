---
title: Observability in Django with Loki and Grafana
descripcion: A Docker Compose template to get your Django logs into Grafana from day one.
fecha: 2025-09-17
---

While building [VITUclim](/en/projects/vituclim/) I set up an infrastructure to monitor the project at scale. I liked the result so much that I made a minimal version to reuse as a starting point in other projects: [django-loki-grafana-logging](https://github.com/miguelanguai/django-loki-grafana-logging).

## What's inside

A single `docker compose up -d` starts three pieces:

- **Django**, the backend that produces the logs.
- **Loki**, which collects and stores them (with Grafana Alloy as the agent that ships them).
- **Grafana**, to query them and build dashboards.

You don't have to change any Django code for its logs to reach Grafana: they are captured automatically from the container.

## How to use it

1. Clone the repository and run `docker compose up -d`.
2. Open Grafana and add Loki as a data source (`http://loki:3100`).
3. Create a dashboard filtering by the label `service_name = backend`.
4. Refine the query, for example with a line filter to show only `ERROR` lines.

The README walks through every step with screenshots.

## Why it's worth it

With centralised logs, when something breaks in production you don't have to SSH into the server and dig through files: you filter by service, level or text and see what happened and when. Setting it up early is cheap; setting it up in the middle of your first incident is not.

If you find it useful, give the repository a ⭐ or fork it to improve it.
