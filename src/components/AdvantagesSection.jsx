import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

// array of advantages to display, each with title, description, and icon
const advantages = [
  {
    id: 1,
    title: "ارسال رایگان",
    description: "برای سفارشه های بالای 500 هزار تومان",
    icon: <LocalShippingIcon />,
  },
  {
    id: 2,
    title: "ضمانت اصالت کالا",
    description: "همه ی محصولات با ضمانت ارائه می شوند",
    icon: <VerifiedUserIcon />,
  },
  {
    id: 3,
    title: "پشتیبانی 24 ساعته",
    description: " ما در تمام ایام هفته پاسخ گوی شما هستیم",
    icon: <SupportAgentIcon />,
  },
];

export default function AdvantagesSection() {
  return (
    <Box sx={{ p: 1, my: 4, overflow: "hidden" }}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: "text.primary",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        مزایای فروشگاه
      </Typography>

      <Grid
        container
        spacing={5}
        sx={{
          py: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Loop through advantages array to render each card */}
        {advantages.map((adv) => (
          <Grid item xs={12} md={4} key={adv.id}>
            <Box sx={{ width: "100%", height: "100%" }}>
              {/* Paper component to create card with shadow and padding */}
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  p: 4,
                  gap: 2,
                  borderRadius: "12px",
                  boxShadow: 2,
                  cursor: "pointer",
                  overflow: "hidden",

                  transition: "all 0.4s ease-in-out",
                  // Hover effects for card
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                    backgroundColor: "rgba(163, 177, 138, 0.8)",
                    transform: "scale(1.13)",
                  },
                  // Hover effect for icon avatar inside card
                  "&:hover .icon-avatar": {
                    bgcolor: "#fff",
                    color: "secondary.main",
                    transform: "translate(-60px) scale(1.2)",
                    transition: "all 0.4s ease-in-out",
                  },
                  // Hover effect for title text
                  "&:hover .title-hover": {
                    color: "#fff",
                    transform: "scale(1.1)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  },
                  // Hover effect for description text
                  "&:hover .desc-hover": {
                    color: "text.secondary",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                {/* Icon inside a circular avatar */}
                <Avatar
                  className="icon-avatar"
                  sx={{
                    bgcolor: "primary.main",
                    width: 65,
                    height: 65,
                    fontWeight: "bold",
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  {adv.icon}
                </Avatar>
                {/* Container for title and description */}
                <Box
                  className="title-hover"
                  sx={{ pt: 3, color: "primary.main" }}
                >
                  {/* Advantage title */}
                  <Typography variant="h6" fontWeight="bold">
                    {adv.title}
                  </Typography>
                  <Typography
                    className="desc-hover"
                    variant="body2"
                    color="text.secondary"
                  >
                    {/* Advantage description */}
                    {adv.description}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
