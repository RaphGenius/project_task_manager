import { validateRequest } from "@/middlewares/validationRequest";
import { body } from "express-validator";

const loginValidationSchema = [
  body("email").isEmail().withMessage("L'adresse mail n'est pas valide;"),
  body("password").notEmpty().withMessage("Le champ mot de passe est requis."),
];

const loginValidationRules = [loginValidationSchema, validateRequest];

const signupValidationSchema = [
  body("email").isEmail().withMessage("L'adresse mail n'est pas valide."),
  body("firstname").notEmpty().withMessage("Le champ prénom est obligatoire."),
  body("lastname").notEmpty().withMessage("Le chanpm nom est obligatoire."),
  body("password").notEmpty().withMessage("Le mot de passe est obligatoire."),
];

const signupValidationRules = [signupValidationSchema, validateRequest];

export { loginValidationRules, signupValidationRules };
