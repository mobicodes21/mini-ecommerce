import * as Yup from "yup";

import { Button, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { Box } from "@mui/system";
import { Formik } from "formik";
import { login } from "../services/authService";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل خود را وارد کنید"),
  password: Yup.string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر داشته باشد")
    .required("رمز عبور خود را وارد کنید"),
});

export default function LoginPage() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const user = await login(values.email, values.password);
      console.log("ورود موفق", user);
      navigate("/");
    } catch (error) {
      console.log("خطا:", error);
      setErrors({ password: "ایمیل یا رمز عبور اشتباه است" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f9f9f9",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          p: 4,
          gap: 3,
          maxWidth: 340,
          display: "flex",
          flexDirection: "column",
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ color: "text.primary", fontWeight: 400 }}
        >
          ورود به حساب کاربری
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
  label="* ایمیل"
  name="email"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  InputProps={{ sx: { height: 40 } }}
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: errors.email && touched.email ? "#a33649" : undefined,
      },
      "&:hover fieldset": {
        borderColor: errors.email && touched.email ? "#a33649" : "secondary.main",
      },
      "&.Mui-focused fieldset": {
        borderColor: errors.email && touched.email ? "#a33649" : "secondary.main",
      },
    },
    "& .MuiInputLabel-root": {
      direction: "rtl",
      color: errors.email && touched.email ? "#a33649" : undefined,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: errors.email && touched.email ? "#a33649" : "secondary.main",
    },
  }}
  fullWidth
/>
{errors.email && touched.email && (
  <div
    style={{
      color: "#a33649",
      fontSize: "15px",
      textAlign: "right",
      marginTop: "4px",
    }}
  >
    {errors.email}
  </div>
)}

                <TextField
  label="* رمزعبور"
  name="password"
  type="password"
  value={values.password}
  onChange={handleChange}
  onBlur={handleBlur}
  InputProps={{ sx: { height: 40 } }}
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: errors.password && touched.password ? "#a33649" : undefined,
      },
      "&:hover fieldset": {
        borderColor: errors.password && touched.password ? "#a33649" : "secondary.main",
      },
      "&.Mui-focused fieldset": {
        borderColor: errors.password && touched.password ? "#a33649" : "secondary.main",
      },
    },
    "& .MuiInputLabel-root": {
      direction: "rtl",
      color: errors.password && touched.password ? "#a33649" : undefined,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: errors.password && touched.password ? "#a33649" : "secondary.main",
    },
  }}
  fullWidth
/>
{errors.password && touched.password && (
  <div
    style={{
      color: "#a33649",
      fontSize: "15px",
      textAlign: "right",
      marginTop: "4px",
    }}
  >
    {errors.password}
  </div>
)}

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "secondary.main",
                    color: "#fff",
                    textTransform: "none",
                    py: 1,
                    fontWeight: "bold",
                    fontSize: "15px",
                    mt: 1,
                    "&:hover": {
                      bgcolor: "text.secondary",
                    },
                  }}
                  fullWidth
                >
                  ورود
                </Button>
              </Box>
            </form>
          )}
        </Formik>

        <Typography variant="body2" align="center" sx={{ fontSize: "15px" }}>
          حساب کاربری نداری؟
          <Link
            to="/signup"
            style={{
              color: "#7c1f31",
              fontWeight: "bold",
              textAlign: "center",
              marginLeft: 5,
            }}
          >
            ثبت نام
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
