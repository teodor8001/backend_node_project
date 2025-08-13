import 'dotenv/config';

export const env = {
    db: {
        host: process.env.host || "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
    }
};