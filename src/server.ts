import "reflect-metadata";
import express, { NextFunction, Request, response, Response } from 'express';

import { router } from "./routes";
import "./database";

const app = express();

app.use(express.json());
app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log('Server is runnings'));
