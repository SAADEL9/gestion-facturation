import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import {
  Box, Button, TextField, Typography,
  Paper, CircularProgress, Alert
} from "@mui/material";
import { loginUser } from "../../services/firebaseService";
import { LoginSchema } from "../../utils/validators";

const LoginPage =()=>{
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
        onSubmit: async (values) => {
          setError("");
          setLoading(true);
            try {
                await loginUser(values.email, values.password);
                navigate("/"); // redirige vers dashboard user
              } catch(err)
              {
                console.log(err);
              }finally {
        setLoading(false);
      }
    }
  });


 return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5">
      <Paper elevation={4} sx={{ p: 4, width: 420, borderRadius: 3 }}>
        
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
          login
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Box component="form" onSubmit={formik.handleSubmit} display="flex" flexDirection="column" gap={2}>
          
          

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

          

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ mt: 1 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "se connecter"}
          </Button>

         

        </Box>
      </Paper>
    </Box>
  );

};
export default LoginPage;