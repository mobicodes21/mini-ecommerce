import { Box, Container, Typography } from "@mui/material";
// Banner component displays a promotional message at the top of the page
export default function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "#ffffff",
        textAlign: "center",
        padding: "8px 0",
        fontSize: "0.875rem",
        fontWeight: 600,
        fontFamily: "IRANSansfanum",
      }}
    >
      ارسال رایگان برای سفارش های بالای 900 هزار تومان
    </Box>
  );
}
