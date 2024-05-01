# Car Database REST API

This repository contains a RESTful API built with Node.js and Express.js to retrieve information about car models and their common problems from a JSON database.

## Features

- **Get All Brands**: Retrieve a list of all car brands.
- **Get Models by Brand**: Retrieve a list of car models for a specific brand.
- **Get Problems by Model**: Retrieve common problems reported for a specific car model.

## Usage

### Prerequisites

- Node.js installed on your local machine

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/SerhatKaraman0/car-database-rest-api.git
   ```

2. Navigate to the project directory:
  
  ```bash
  cd car-database-rest-api
  ```

3. Install dependencies

  ```bash
    npm install express
  ```

### Usage
1. Start the server
  ```bash
  npm start
```
2. Use the following endpoints to retrieve data:
- GET /: Retrieve a list of all car brands.
- GET /:brandName: Retrieve a list of car models for a specific brand.
- GET /:brandName/:carModel: Retrieve common problems reported for a specific car model.
- Replace :brandName and :carModel with the desired brand name and car model, respectively.

### Example
Retrieve a list of car models for the brand "Acura":
```bash
  GET http://localhost:3000/Acura/CL
```
### Link to website 
- You can also use the link https://car-database-api.up.railway.app/


