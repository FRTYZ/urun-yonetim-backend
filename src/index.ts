import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

// Create an Express application
const app: Express = express();
// Set the port number for the server
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const startUp = async () => {

    app.listen(PORT, () => {
        console.log('Server is running at ' + PORT);
    })
}
startUp();