import "express-async-errors"
import express, { Request, Response, NextFunction } from "express"
import { routes } from "@/routes";

export const app = express();

app.use(express.json());
app.use(routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof Error) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
    console.log(err);
    return res.status(500).json({
        status:  "internal error",
        message: "internal server error "
    })
})
app.use((req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
        status: "not found",
        message: "Not found resource"
    })
})