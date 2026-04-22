import * as Yup from "yup";

export const registerSchema = Yup.object({
  nom: Yup.string()
    .min(2, "Minimum 2 caractères")
    .required("Le nom est obligatoire"),

  email: Yup.string()
    .email("Email invalide")
    .required("L'email est obligatoire"),

  password: Yup.string()
    .min(6, "Minimum 6 caractères")
    .required("Le mot de passe est obligatoire"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas")
    .required("La confirmation est obligatoire")
});