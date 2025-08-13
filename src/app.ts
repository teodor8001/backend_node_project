import express, { Application } from "express";

export class App {
    public readonly app: Application;

    constructor() {
        this.app = express();
        this.setupMiddlewares();
        this.setupRoutes();
    }

    private setupMiddlewares(): void {
        this.app.use(express.json());
    }

    private setupRoutes(): void {
        this.app.get("/", (req, res) => {
            res.send("Hello World");
        });
    }
}
