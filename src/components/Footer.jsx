import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Twitter,
} from "@mui/icons-material";

import { Link as RouterLink } from "react-router-dom";
{/* Footer component:
 - Displays the website footer with three main sections:
  1. About the shop with a brief description
  2. Navigation links to main pages (Home, About, Contact)
  3. Contact info and social media icons with hover effects
 - Uses MUI components and custom styling for layout and theme consistency
 - Includes responsive grid layout for different screen sizes
 - Shows the current year dynamically in the copyright notice
 */}
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "text.primary",
        color: "secondary.contrastText",
        pt: 6,
        pb: 4,
        // mt: 15
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "space-around", alignItems: "flex-start" }}
        >
          <Grid item xs={12} md={4} sx={{ wordBreak: "break-word" }}>
            <Box sx={{ maxWidth: 200 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bolder",
                  mb: 1,
                  color: "secondary.main",
                  opacity: 0.8,
                  letterSpacing: 1.2,
                }}
              >
                پوشا مد
              </Typography>
              <Typography
                variant="body2"
                sx={{ lineHeight: 1.8, maxWidth: 280, opacity: 0.85 }}
              >
                فروشگاهی با تنوع بی‌نظیر از محصولات باکیفیت! ارسال رایگان برای
                سفارش‌های بالای ۵۰۰ هزار تومان، ضمانت اصالت کالا و پشتیبانی ۲۴
                ساعته. خرید آسان و مطمئن را تجربه کنید!
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ maxWidth: 300, px: 6 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2, fontSize: "1.1rem" }}
              >
                صفحات
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Link
                  component={RouterLink}
                  to="/"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    color: "secondary.main",
                    "&:hover": {
                      color: "primary.main",
                      pl: 1,
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  خانه
                </Link>
                <Link
                  component={RouterLink}
                  to="/about"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    color: "secondary.main",
                    "&:hover": {
                      color: "primary.main",
                      pl: 1,
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  درباره ما
                </Link>
                <Link
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    color: "secondary.main",
                    "&:hover": {
                      color: "primary.main",
                      pl: 1,
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  تماس با ما
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 2, fontSize: "1.1rem" }}
            >
              ما را دنبال کنید
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Typography variant="body2">09123456789</Typography>
              <Phone fontSize="small" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
              <Typography variant="body2">myshop@gmail.com</Typography>
              <Email fontSize="small" />
            </Box>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <IconButton>
                <Instagram
                  sx={{
                    color: "secondary.main",
                    "&:hover": { color: "secondary.contrastText" },
                  }}
                />
              </IconButton>
              <IconButton>
                <Facebook
                  sx={{
                    color: "secondary.main",
                    "&:hover": { color: "secondary.contrastText" },
                  }}
                />
              </IconButton>
              <IconButton>
                <Twitter
                  sx={{
                    color: "secondary.main",
                    "&:hover": { color: "secondary.contrastText" },
                  }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            borderTop: "1px solid #ffffff22",
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            مای‌شاپ | تمام حقوق محفوظ است © {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
