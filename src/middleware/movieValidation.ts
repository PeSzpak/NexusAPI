import { error } from "console";
import { body } from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("O titulo é obrigatorio")
            .isLength({min:5})
            .withMessage("Titulo precisa ter no minimo 5 caracteres"),

            body("rating")
            .isNumeric()
            .withMessage("A nota precisa ser um numero")
            .custom((value: number) => {
                if (value < 0 || value > 10) {
                    throw new Error("A nota precisa ser entre 0 a 10")
                }return true
            }),

            body("description")
            .isString()
            .withMessage("A descrição é obrigatoria"),

            body("director")
            .isString()
            .withMessage("O diretor é obrigatorio"),

            body("poster")
            .isURL()
            .withMessage("O poster precisa ser uma URL")
            
    ]
}