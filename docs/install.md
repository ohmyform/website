---
title: Quick Start Installation of OhMyForm
---

### Recommended method is via Docker
Docker affords us the luxury of only really having to deal with a very limited number of possible deployment scenarios as we get to ship the entire environment with the app without costing you or us much in the process. Before docker to achieve this we would've had to ship an entire virtual machine or even worse build you an identical server and ship it your way.  Now its just a `docker pull` away from reality.  This is why we're going with Docker, there will be documentation on how to do things directly with the source however ideally that will only be Contributor facing.

### Local Development

The steps are as follows:
* Step One: `git clone https://github.com/ohmyform/ohmyform.git`
* Step Two: Modify anything you want to in the source.
* Step Three: `cd ohmyform`
* Step Four: `docker-compose up -d`
* Step Five: `docker-compose ps`

You should at this point have a working instance to play with at `http://localhost:5000/` within moments.

### Console playback of Local Development installation
<!-- TODO: Make sure to include asciinema embedable from https://github.com/lbryio/lbry-docker/tree/master/contrib/k8s-lbry/kick-ascii that includes an asciinema recording of the deployment of a local dev env. -->
[![asciicast](https://ohmyform.com/docs/kick-ascii/cast/dev-env-install.png)](https://ohmyform.com/docs/kick-ascii/?cast=dev-env-install&bg=dev-env-install.png)

## Installation of a Production Instance

OhMyForm is still under heavy re-certification and re-factoring before we would recommend that you use it in production however it's not unreasonable to want to give a go at it so we're going to aim to have some kind of suggested `docker-compose.yml` example available asap within the repositories `./ohmyform/Docker/compose/` directory.

## Compile from source
This won't be supported and most QA via Git Issues will have this line cited and will be closed to triage edge cases, we don't want to support infinite possible edge cases.  Conversely we will definitely consider all issues fairly however if it will require a significant effort or distracts heavily from scope without reasonable cause we will likely triage it out of the tracker.
