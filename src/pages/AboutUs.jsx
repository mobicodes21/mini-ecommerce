import { Box, Container, Grid, Typography } from "@mui/material";

{/* AboutUs - This section includes
  -Mission, vision and overview of the shop
  -Team information
  -A video about shop  */}
const AboutUs = () => {
  {/* team members data */}
  const teamMembers = [
    {
      name: "سارا احمدی",
      role: "مدیر پشتیبانی",
      image: "/images/support (2).jpg",
    },
    { name: "مهدی کرمی", role: "مدیر فنی", image: "/images/technical.jpg" },
    {
      name: "نگار طاهری",
      role: "کارشناس بازاریابی",
      image: "/images/founder.jpg",
    },
    {
      name: "رضا احمدی",
      role: "مدیر منابع انسانی",
      image: "/images/hr (2).jpg",
    },
    {
      name: "زهره کرمی",
      role: "مدیر پروژه",
      image: "/images/project-managment.jpg",
    },
    { name: "رها رحیمی", role: "برنامه نویس", image: "/images/support.jpg" },
  ];

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url(/images/aboutus.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          درباره ما
        </Typography>
      </Box>
      <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          {/* general description text */}
          <Typography sx={{ mb: 3, fontFamily: "IRANSansfanum" }}>
            ما در <strong>مای‌شاپ</strong> با هدف ارائه‌ی بهترین محصولات با
            بالاترین کیفیت، راه‌اندازی شده‌ایم. تیم ما از افراد متخصص و با تجربه
            تشکیل شده است و ما به ارائه‌ی خدماتی فراتر از انتظارات شما متعهد
            هستیم.
          </Typography>
          <Typography sx={{ mb: 3, fontFamily: "IRANSansfanum" }}>
            هدف اصلی ما، ایجاد تجربه‌ای بی‌نظیر برای شماست. محصولات ما به‌طور
            دقیق انتخاب شده‌اند تا نیازهای شما را به‌خوبی برآورده کنند. علاوه بر
            این، تیم پشتیبانی ما همیشه آماده است تا در هر زمان که نیاز داشتید،
            کمک‌تان کند.
          </Typography>
          <Typography sx={{ mb: 5, fontFamily: "IRANSansfanum" }}>
            ما به روابط بلندمدت با مشتریان‌مان ارزش می‌دهیم و تلاش می‌کنیم تا
            همیشه رضایت شما را جلب کنیم.
          </Typography>

          {/* team introduction */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mt: 6,
              mb: 2,
              fontFamily: "IRANSansfanum",
            }}
          >
            اعضای تیم ما
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: "100%",
                      maxWidth: 120,
                      height: "auto",
                      aspectRatio: "1 / 1",
                      borderRadius: "50%",
                      objectFit: "cover",
                      mb: 1,
                    }}
                  />
                  <Typography
                    sx={{ fontWeight: "bold", fontFamily: "IRANSansfanum" }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "gray",
                      fontFamily: "IRANSansfanum",
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* shop introduction video */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mt: 6,
              mb: 2,
              fontFamily: "IRANSansfanum",
            }}
          >
            ویدیوی معرفی فروشگاه
          </Typography>
          <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID" // لینک ویدیو رو اینجا بذار
              title="ویدیوی معرفی"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "10px",
              }}
              allowFullScreen
            ></iframe>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
