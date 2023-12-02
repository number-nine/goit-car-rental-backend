# Car rental - Backend Part

This Node.js backend application provides the core functionality for the single user Car Rental web application.

## Table of Contents

- [Frontend](#frontend)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-docs)


## <a id="frontend">Frontend</a>

- [GitHub](https://github.com/number-nine/goit-car-rental)
- [Live page](https://number-nine.github.io/goit-car-rental)

## <a id="features">Features</a>

The Car Rental backend provides a set of functions that allow single user to interact with the system through API endpoints (see [Usage](#usage)):

- Getting a list of adverts
- Adding, deleting or viewing favorite adverts
- Getting collection parameters to constructing own filters

Backend based on Node.js

## <a id="getting-started">Getting Started</a>

### <a id="prerequisites">Prerequisites</a>

Before you can run the Power Pulse backend, you'll need to have the following software installed on your system:

- Node.js - JavaScript runtime
- npm or Yarn - Package manager for Node.js

### <a id="installation">Installation</a>

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/number-nine/goit-car-rental-backend
   ```
2. Change your current directory to the project folder:
   ```
   cd goit-car-rental-backend
   ```
3. Install the project dependencies:
   ```
   npm install
   or
   yarn install
   ```
4. Configure the environment variables. You will need to create a .env file in the project root and define the required variables (e.g., database connection details, API keys, etc) - see `.env.example` for required variables.
5. Start the server:
   ```
   npm run start:dev
   or
   yarn run start:dev
   ```

Your Rental Car backend should now be running and accessible at `http://localhost:3000`

## <a id="usage">Usage</a>

Here are some example use cases of the Power Pulse backend:

- To get adverts list of cars for rent, send a GET request to `/adverts`.
- To get collection parameters for constructing custom filters, send a GET request to `/filters`.
- To add an advert to favorites list, send a POST request to `/favorites`.
- To remove an advert to favorites list, send a DELETE request to `/favorites/:id`.
- To get list of a favorite adverts, send a GET request to `/favorites`.

These endpoints allow you to interact with various features on the Rental Car App.

## <a id="api-docs">API Documentation</a>

For detailed API documentation or tests, please refer to the [Swagger API Documentation](https://goit-car-rental.onrender.com/api-docs/).


The first opening may be long, because free render.com service is used for backend deployment.

