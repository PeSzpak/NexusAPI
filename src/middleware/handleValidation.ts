import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if(errors.isEmpty()) {
        return next()
    }

    const extractedErrors: object[] = []

    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg}))

    res.status(422).json({
        errors: extractedErrors,
    })
}
