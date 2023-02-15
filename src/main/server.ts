import express from 'express'
import { router } from './routes'
import bodyParser from "body-parser";

export class App {
    public server;
    constructor() {
        this.server = express();
        this.config()
        this.router()
    }

    public router() {
        this.server.use(router)
    }
    private config(): void {
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: false }));
    }
}
