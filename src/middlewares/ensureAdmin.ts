import { NextFunction, Request, Response } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    // Obrigar o usuário ser administrador.
    const admin = true;

    if(admin) {
        return next();
    }

    return res.status(401).json({
        error: "User is not admin!"
    })
}
