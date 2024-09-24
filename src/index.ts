import express, { Express } from "express";

import dotenv from "dotenv";

dotenv.config();

// Create an Express application
const app: Express = express();
// Set the port number for the server
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Helpers
const connectDB = require('./helpers/database');

// Middlewares
const errorHandler = require('./middleware/errorHandler');

// Routes
const productRoutes = require('./routes/product');

app.use('/product', productRoutes);
app.use(errorHandler);

const startUp = async () => {

    app.listen(PORT, () => {
        connectDB();
        console.log('Server is running at ' + PORT);
    })
}
startUp();