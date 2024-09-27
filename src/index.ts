import express, { Express } from "express";

import dotenv from "dotenv";

dotenv.config();

// Create an Express application
const app: Express = express();
// Set the port number for the server
const PORT = process.env.PORT || 8080;
const path = require("path");

// Helpers
const connectDB = require('./helpers/database');

// Cors
import cors from 'cors';
const corsOptions = require("./config/corsOptions");

// Middlewares
const errorHandler = require('./middleware/errorHandler');
const credentials = require('./middleware/credentials');

app.use(credentials);
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine","ejs");
app.set('views','./src/views');
app.use('/static', express.static(path.join(__dirname, '../public')))

// Routes
const homeRoutes = require('./routes/home')
const productRoutes = require('./routes/product');

app.use(homeRoutes);
app.use('/product', productRoutes);
app.use(errorHandler);

const startUp = async () => {

    app.listen(PORT, () => {
        connectDB();
        console.log('Server is running at ' + PORT);
    })
}
startUp();