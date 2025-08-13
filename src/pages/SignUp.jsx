import * as Yup from "yup";

import { Alert, Snackbar } from "@mui/material";
import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { Box } from "@mui/system";
import { Formik } from "formik";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";

//Sign-up page component with form validation using Yup and Formik
// Validation schema for sign-up form fields
const validationSchema = Yup.object({
  username: Yup.string().required("نام کاربری الزامی است"),
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  password: Yup.string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "رمزها یکی نیستند")
    .required("تکرار رمز الزامی است"),
});

export default function SignUp() {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // initial form field values
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  // Form submission handler: calls signup API, shows success message, then redirects
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await signup(values);
      console.log("اطلاعات فرم ثبت نام: ", values);
      setOpenSnackbar(true); // show success snackbar
      resetForm(); // reset form fields
      setTimeout(() => {
        navigate("/login"); // redirect to login after 2 seconds
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          p: 5,
          gap: 1,
          maxWidth: 340,
          display: "flex",
          flexDirection: "column",
          borderRadius: 1,
        }}
      >
        {/* Page title */}
        <Typography
          variant="h5"
          align="center"
          sx={{ color: "text.primary", fontWeight: 400 }}
        >
          ثبت نام
        </Typography>
        {/* Subtitle */}
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 1, color: "text.secondary" }}
        >
          خوش آمدید. برای دسترسی به سایت ثبت نام کنید
        </Typography>
        {/* Sign-up form using Formik */}
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
                {/* Username input */}
                <TextField
                  label="* نام کاربری"
                  InputProps={{ sx: { height: 40 } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : undefined,
                      },
                      "&:hover fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : "secondary.main",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color:
                        errors.username && touched.username
                          ? "#a33649"
                          : undefined,
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color:
                        errors.username && touched.username
                          ? "#a33649"
                          : "secondary.main",
                    },
                  }}
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
                {/* Show username validation error */}
                {errors.username && touched.username && (
                  <div style={{ color: "#a33649" }}>{errors.username}</div>
                )}
                {/* Email input */}
                <TextField
                  label="* ایمیل"
                  InputProps={{ sx: { height: 40 } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : undefined,
                      },
                      "&:hover fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : "secondary.main",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color:
                        errors.username && touched.username
                          ? "#a33649"
                          : undefined,
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color:
                        errors.username && touched.username
                          ? "#a33649"
                          : "secondary.main",
                    },
                  }}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
                {/* Show email validation error */}
                {errors.email && touched.email && (
                  <div style={{ color: "#a33649" }}>{errors.email}</div>
                )}
                {/* Password input */}
                <TextField
                  label="* رمز عبور"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  InputProps={{ sx: { height: 40 } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : undefined,
                      },
                      "&:hover fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : "secondary.main",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color:
                        errors.username && touched.username
                          ? "#a33649"
                          : undefined,
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color:
                        errors.username && touched.username
                          ? "#a33649"
                          : "secondary.main",
                    },
                  }}
                />
                {/* Show password validation error */}
                {errors.password && touched.password && (
                  <div style={{ color: "#a33649" }}>{errors.password}</div>
                )}
                {/* Confirm Password input */}
                <TextField
                  label="* تکرار رمز عبور"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  InputProps={{ sx: { height: 40 } }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : undefined,
                      },
                      "&:hover fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor:
                          errors.username && touched.username
                            ? "#a33649"
                            : "secondary.main",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color:
                        errors.username && touched.username
                          ? "#a33649"
                          : undefined,
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color:
                        errors.username && touched.username
                          ? "#a33649"
                          : "secondary.main",
                    },
                  }}
                  fullWidth
                />
                {/* Show confirm password validation error */}
                {errors.confirmPassword && touched.confirmPassword && (
                  <div style={{ color: "#a33649" }}>
                    {errors.confirmPassword}
                  </div>
                )}
                {/* Submit button */}
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
                    "&:hover": { bgcolor: "text.secondary" },
                  }}
                  fullWidth
                >
                  ثبت نام
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Paper>
      {/* Snackbar for success message after sign up */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          ثبت نام با موفقیت انجام شد!
        </Alert>
      </Snackbar>
    </Box>
  );
}
