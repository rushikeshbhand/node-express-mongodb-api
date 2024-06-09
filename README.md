# Basic API with Node.js, Express.js, and MongoDB

This repository contains a basic and simple API built using Node.js, Express.js, and MongoDB. The API provides basic CRUD (Create, Read, Update, Delete) operations for managing data.

## Features

- **Node.js:** Server-side JavaScript runtime environment.
- **Express.js:** Fast and minimalist web framework for Node.js.
- **MongoDB:** NoSQL database for storing and managing data.

## Endpoints

### Base URL: `/api`

1. **Create an Item**
   - **Endpoint:** `POST /items`
   - **Description:** Creates a new item.
   - **Request Body:**
     ```json
     {
       "name": "Item Name",
       "description": "Item Description",
       "price": 100
     }
     ```
   - **Response:**
     ```json
     {
       "_id": "60d9f9c9e13e4b6f9b8b4567",
       "name": "Item Name",
       "description": "Item Description",
       "price": 100,
       "createdAt": "2021-06-28T12:00:00.000Z",
       "updatedAt": "2021-06-28T12:00:00.000Z"
     }
     ```

2. **Get All Items**
   - **Endpoint:** `GET /items`
   - **Description:** Retrieves all items.
   - **Response:**
     ```json
     [
       {
         "_id": "60d9f9c9e13e4b6f9b8b4567",
         "name": "Item Name",
         "description": "Item Description",
         "price": 100,
         "createdAt": "2021-06-28T12:00:00.000Z",
         "updatedAt": "2021-06-28T12:00:00.000Z"
       },
       ...
     ]
     ```

3. **Get an Item by ID**
   - **Endpoint:** `GET /items/:id`
   - **Description:** Retrieves an item by its ID.
   - **Response:**
     ```json
     {
       "_id": "60d9f9c9e13e4b6f9b8b4567",
       "name": "Item Name",
       "description": "Item Description",
       "price": 100,
       "createdAt": "2021-06-28T12:00:00.000Z",
       "updatedAt": "2021-06-28T12:00:00.000Z"
     }
     ```

4. **Update an Item by ID**
   - **Endpoint:** `PUT /items/:id`
   - **Description:** Updates an item by its ID.
   - **Request Body:**
     ```json
     {
       "name": "Updated Item Name",
       "description": "Updated Item Description",
       "price": 150
     }
     ```
   - **Response:**
     ```json
     {
       "_id": "60d9f9c9e13e4b6f9b8b4567",
       "name": "Updated Item Name",
       "description": "Updated Item Description",
       "price": 150,
       "createdAt": "2021-06-28T12:00:00.000Z",
       "updatedAt": "2021-06-28T12:30:00.000Z"
     }
     ```

5. **Delete an Item by ID**
   - **Endpoint:** `DELETE /items/:id`
   - **Description:** Deletes an item by its ID.
   - **Response:**
     ```json
     {
       "message": "Item deleted successfully"
     }
     ```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rushikeshbhand/node-express-mongodb-api.git
