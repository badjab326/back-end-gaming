# BackEndGaming

This project was created using create-payload-app, and serves as the backend and admin panel for the BlackInGaming app found here: https://github.com/badjab326/black-in-gaming

## How to Use

`yarn dev` will start up your application and reload on any changes.

### Docker

If you have docker and docker-compose installed, you can run `docker-compose up`

To build the docker image, run `docker build -t my-tag .`

Ensure you are passing all needed environment variables when starting up your container via `--env-file` or setting them with your deployment.

The 3 typical env vars will be `MONGODB_URI`, `PAYLOAD_SECRET`, and `PAYLOAD_CONFIG_PATH`

`docker run --env-file .env -p 3000:3000 my-tag`

## Getting Started

[Check out the admin panel here!](https://back-end-gaming-production.up.railway.app/admin)
(Note: Account access must be requested before use.)

[Check out the live frontend here!](https://black-in-gaming-production.up.railway.app/dashboard)
