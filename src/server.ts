import { App } from "./app";
import { Database } from "./config/sequelize";
import "dotenv/config";


try {
    await Database.connect();
    const { app } = new App();
    const PORT = Number(process.env.PORT ?? 3000);
    app.listen(PORT, () => {
        console.log(`The server started on localhost:${PORT}`);
    });
} catch (err) {
    console.error("connection to database has failed", err);
    process.exit(1);
}