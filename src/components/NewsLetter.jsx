import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import React from "react";

export default function NewsLetter() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "background.paper",
        p: { xs: 4, md: 8 },
        borderRadius: "5px",
        textAlign: "center",
        maxWidth: "100%",
        transition: "all 0.3s ease",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 15,
      }}
    >
      {/* افکت موجی در پس‌زمینه */}
      <Box
        sx={{
          position: "absolute",
          top: "-20px",
          left: "50%",
          width: "120%",
          height: "80px",
          background:
            "radial-gradient(circle, rgba(105,164,129,0.3) 10%, rgba(105,164,129,0) 80%)",
          transform: "translateX(-50%) rotate(5deg)",
          filter: "blur(30px)",
          zIndex: -1,
        }}
      />

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          {/* Title with icon and heading */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <EmailIcon
              sx={{
                fontSize: 40,
                color: "secondary.main",
                mb: 1,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            />
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={1}
              sx={{
                color: "secondary.main",
                display: "inline",
                transition: "color 0.3s ease",
                "&:hover": { color: "text.secondary" },
              }}
            >
              عضویت در خبرنامه
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: "text.secondary" }} m={1}>
            ایمیل خود را وارد کنید تا جدیدترین اخبار را دریافت کنید
          </Typography>
        </Box>
        {/* Subscription form */}
        <Box
          component="form"
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: 500,
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Email input with animation */}
          <TextField
            label="ایمیل شما"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: "5px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" },
              "& .MuiInputBase-input": {
                transition: "all 0.5s ease",
                opacity: 0.7,
                "&:focus": { opacity: 1 },
              },
            }}
          />

          {/* Subscribe button with hover effects */}
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              width: { xs: "100%", md: 120 },
              fontWeight: 500,
              bgcolor: "secondary.main",
              color: "secondary.contrastText",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "primary.main",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
              },
            }}
          >
            عضویت
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
