import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import {
  Box, Button, TextField, Typography,
  Paper, CircularProgress, Alert
} from "@mui/material";
import { registerUser } from "../../services/firebaseService";
import { registerSchema } from "../../utils/validators";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      nom: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setError("");
      setLoading(true);
      try {
        await registerUser(values.nom, values.email, values.password);
        navigate("/dashboard"); // redirige vers dashboard user
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setError("Cet email est déjà utilisé.");
        } else {
          setError("Une erreur est survenue. Réessayez.");
        }
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5">
      <Paper elevation={4} sx={{ p: 4, width: 420, borderRadius: 3 }}>
        
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
          Créer un compte
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Box component="form" onSubmit={formik.handleSubmit} display="flex" flexDirection="column" gap={2}>
          
          <TextField
            label="Nom complet"
            name="nom"
            value={formik.values.nom}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.nom && Boolean(formik.errors.nom)}
            helperText={formik.touched.nom && formik.errors.nom}
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />

          <TextField
            label="Mot de passe"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
          />

          <TextField
            label="Confirmer le mot de passe"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ mt: 1 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "S'inscrire"}
          </Button>

          <Typography textAlign="center" variant="body2">
            Déjà un compte ?{" "}
            <Link to="/login" style={{ color: "#1976d2" }}>Se connecter</Link>
          </Typography>

        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;