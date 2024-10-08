const allowedOrigins: string[] = require('../config/allowedOrigins');

/*
    Cors opsiyonları belirlediğimiz obje
*/
const corsOptions = {
    origin: (origin: string, callback: any) => {
        if (allowedOrigins.indexOf(origin) !== -1 || origin !== '') {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

export default corsOptions;