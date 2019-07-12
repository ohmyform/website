---
title: Install
---

## Recommended method is via Docker

### Local Development

The steps are
Step one: `git clone https://github.com/ohmyform/ohmyform.git`
Step Two: `cd ./ohmyform/Docker/compose`
Step Three: `docker-compose up -d`
You should at this point have a working instance to play with at `http://localhost/` within moments.

### Installation of a Production Instance

OhMyForm is still under heavy re-certification and re-factoring before we would recommend that you use it in production however it's not unreasonable to want to give a go at it so we're going to aim to have some kind of suggested docker-compose.yml example available asap within the repositories `./ohmyform/Docker/compose/` directory.

### Compile from source
This won't be supported and most QA via Git Issues will have this line cited and will be closed to triage edge cases, we don't want to support infinite possible edge cases.  Conversely we will definitely consider all issues fairly however if it will require a significant effort or distracts heavily from scope without reasonable cause we will likely triage it out of the tracker.
