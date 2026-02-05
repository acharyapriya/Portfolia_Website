import { Box, Container, Grid, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import data from "../jsonstructure/Navbar.json";
import contactImage from "../../public/image/contact_image.png";
import TextAreaComponent from "../component/TextAreaComponent";

const Contact = () => {
  const contactItems = data?.Contact || [];

  const getIcon = (item: any) => {
    if (item.Email) return <EmailIcon sx={{ color: "#0E0E69", fontSize: 18 }} />;
    if (item.Contact) return <PhoneIcon sx={{ color: "#0E0E69", fontSize: 18 }} />;
    if (item.Watapp) return <WhatsAppIcon sx={{ color: "#0E0E69", fontSize: 18 }} />;
      // if (item.Watapp) return <WhatsAppIcon sx={{ color: "#0E0E69", fontSize: 18 }} />;
    return null;
  };

  const getLabel = (item: any) => {
    if (item.Email) return "Email";
    if (item.Contact) return "Phone";
    if (item.Watapp) return "WhatsApp";
    return "";
  };

  const getValue = (item: any) => item.Email || item.Contact || item.Watapp;

  return (
    <Box
      id="Contact"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: "#f7f9ff",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="center"
        >
          <Grid >
            <Box
              component="img"
              src={contactImage}
              alt="Contact"
              sx={{
                width: "100%",
                maxWidth: 320,
                display: "block",
                mx: { xs: "auto", md: 0 },
              }}
            />
          </Grid>

          <Grid justifyContent="center">
            <TextAreaComponent
              sx={{
                fontSize: { xs: 20, md: 26 },
                fontWeight: 700,
                color: "#0E0E69",
                mb: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Get in Touch
            </TextAreaComponent>

            <TextAreaComponent
  sx={{
    fontSize: { xs: 13, md: 14 },
    color: "#555",
    mb: 4,
    maxWidth: 420,
    textAlign: { xs: "center", md: "left" },
    mx: { xs: "auto", md: 0 },
    lineHeight: 1.6,
  }}
>
  I’m always open to discussing new projects, freelance opportunities,
  collaborations, or full-time roles. Feel free to reach out — I’ll get
  back to you as soon as possible.
</TextAreaComponent>


            <Grid container spacing={2}>
              {contactItems.map((item, index) => (
                <Grid  key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      border: "1px solid #e6e9ff",
                      backgroundColor: "#fff",
                      transition: "0.3s",
                      "&:hover": {
                        borderColor: "#0E0E69",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        backgroundColor: "#E6ECFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {getIcon(item)}
                    </Box>

                    <Box>
                      <TextAreaComponent
                        sx={{
                          fontSize: 12,
                          color: "#777",
                        }}
                      >
                        {getLabel(item)}
                      </TextAreaComponent>
                      <TextAreaComponent
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#222",
                          wordBreak: "break-word",
                        }}
                      >
                        {getValue(item)}
                      </TextAreaComponent>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
