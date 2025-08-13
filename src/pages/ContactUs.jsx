import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import React, { useState } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PushPinIcon from "@mui/icons-material/PushPin";

{
  /* ContactUs page includes
  -Contact information
  -Contact form
  This component allows users to get in touch with the store */
}
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // update form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url(/images/contactus.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 6,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            color: "#fff",
            zIndex: 2,
            position: "relative",
          }}
        >
          تماس با ما
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* contact information section*/}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ height: "100%", flex: { md: 6 }, mb: { sx: 0, md: 4.75 } }}
            >
              <Typography variant="h6">
                شما می‌توانید از روش‌های زیر با ما در ارتباط باشید:
              </Typography>
              <Box sx={{ py: 4 }}>
                <Typography sx={{ mb: 2 }}>
                  <Phone fontSize="small" sx={{ color: "secondary.main" }} />{" "}
                  تلفن تماس: <strong>09123456789</strong>
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <Email fontSize="small" sx={{ color: "secondary.main" }} />{" "}
                  ایمیل: <strong>myshop@gmail.com</strong>
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <PushPinIcon
                    fontSize="small"
                    sx={{ color: "secondary.main" }}
                  />{" "}
                  آدرس دفتر:{" "}
                  <strong>
                    تهران، خیابان ولی‌عصر، بالاتر از تقاطع فاطمی، پلاک ۲۳۴، طبقه
                    دوم، واحد ۵
                  </strong>
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  <AccessTimeIcon
                    fontSize="small"
                    sx={{ color: "secondary.main" }}
                  />{" "}
                  ساعات پاسخگویی:{" "}
                  <strong>
                    شنبه تا چهارشنبه از ساعت ۹:۰۰ تا ۱۷:۰۰ — پنج‌شنبه‌ها از ساعت
                    ۹:۰۰ تا ۱۳:۰۰
                  </strong>
                </Typography>
              </Box>
            </Grid>

            {/* contact form section */}
            <Grid item xs={12} md={6} sx={{ flex: { md: 6 } }}>
              <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ pt: 2 }}>
                  فرم تماس
                </Typography>
                <TextField
                  fullWidth
                  label="نام"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  size="small"
                  required
                />
                <TextField
                  fullWidth
                  label="ایمیل"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  size="small"
                  required
                />
                <TextField
                  fullWidth
                  label="پیام"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  size="small"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "secondary.main",
                    color: "secondary.contrastText",
                  }}
                >
                  ارسال
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs;
