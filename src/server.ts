import { App } from "./app";
import 'dotenv/config';

const { app } = new App();

const PORT = Number(process.env.PORT ?? 3000);
app.listen(PORT, () => {
    console.log(`The server started on localhost:${PORT}`);
})