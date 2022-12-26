---
title: Quick Start Installation of OhMyForm
---

## Recommended method is via Docker

Docker affords us the luxury of only really having to deal with a very limited number of possible deployment scenarios as we get to ship the entire environment with the app without costing you or us much in the process. Before docker to achieve this we would've had to ship an entire virtual machine or even worse build you an identical server and ship it your way.  Now its just a `docker pull` away from reality.  This is why we're going with Docker, there will be documentation on how to do things directly with the source however ideally that will only be Contributor facing.

Three official images are provided via the [OhMyForm organization on Docker Hub](https://hub.docker.com/u/ohmyform). You can choose standalone [API](https://hub.docker.com/r/ohmyform/api) and [UI](https://hub.docker.com/r/ohmyform/ui) containers for optimal load-balancing and scalability. For smaller installations, the [combined image](https://hub.docker.com/r/ohmyform/ohmyform) will be sufficient.

## Installation of a Production Instance

OhMyForm recently underwent heavy re-certification and re-factoring and we do not yet recommend that you use it in production. We have managed to achieve the goal of having a working updated and CVE free pre 1.0 release available. We are going to aim for [a number of things to be completed before we consider it 1.0 stable](https://github.com/ohmyform/ohmyform#on-the-roadmap-for-v100) but you're welcome to run it for small campaigns. It's unlikely that we're going to break the storage system.

### Docker Compose

[Docker Compose](https://docs.docker.com/compose/) is a container orchestration tool for managing multi-container docker applications. Multiple [example configurations](https://github.com/ohmyform/ohmyform/tree/master/examples) are available to choose from depending on the features you want and your scalability requirements.

### CapRover

OhMyForm can be installed [as a CapRover one-click app](https://caprover.com/docs/one-click-apps.html). It is configured to set up a fully-featured scalable OhMyForm installation using the official docker images. [CapRover](https://caprover.com/) is an extremely easy to use free and open source self-hosted app/database deployment & web server manager that provides a simple-to-use interface for using Docker, nginx, LetsEncrypt and NetData. You'll need a [CapRover server](https://caprover.com/docs/get-started.html) to use this method.

### Heroku

You can deploy OhMyForm on the hosted PaaS platform [Heroku](https://heroku.com/deploy?template=https://github.com/ohmyform/ohmyform/tree/master).

## Local Development

The steps are as follows:
* Step One: `git clone https://github.com/ohmyform/ohmyform.git`
* Step Two: Modify anything you want to in the source.
* Step Three: `cd ohmyform`
* Step Four: `git submodule update --init`
* Step Five: `docker-compose up -d`
* Step Six: `docker-compose ps`

You should at this point have a working instance to play with at `http://localhost:5000/` within moments.

### Console playback of Local Development installation
<!-- TODO: Make sure to include asciinema embedable from https://github.com/lbryio/lbry-docker/tree/master/contrib/k8s-lbry/kick-ascii that includes an asciinema recording of the deployment of a local dev env. -->
[![asciicast](https://ohmyform.com/docs/kick-ascii/cast/dev-env-install.png)](https://ohmyform.com/docs/kick-ascii/?cast=dev-env-install)

## Compile from source

This won't typically be supported and most QA via Git Issues will have this line cited and will be closed to triage edge cases, we don't want to support infinite possible edge cases.  Conversely we will definitely consider all issues fairly however if it will require a significant effort or distracts heavily from scope without reasonable cause we will likely triage it out of the tracker.
