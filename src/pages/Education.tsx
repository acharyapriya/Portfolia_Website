import { Box, Divider, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
import TextAreaComponent from "../component/TextAreaComponent";

const educationData = [
  {
    degree: "Bachelor of Information Technology",
    institute: "Veltech High Tech Engineering College (Anna University)",
    duration: "2016 – 2020",
    description:
      "Completed a comprehensive academic program focused on problem-solving, analytical thinking, and structured learning through coursework and academic projects.",
  },
  {
    degree: "Higher Secondary Education (Science)",
    institute: "Rukmani Vidyalaya Higher Secondary School",
    duration: "2013 – 2015",
    description:
      "Completed higher secondary education with a focus on analytical thinking, discipline, and conceptual understanding.",
  },
];

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    // threshold: 0.3,   
  });

  return (
    <Box
    id="Education"
      ref={ref}
      sx={{
        width: "100%",
        py: { xs: 3, md: 4 },
        display: "flex",
        justifyContent: "center",
        scrollMarginTop: "90px", 
      }}
    >
      
      <Fade in={inView} timeout={3000}>
        <Box sx={{ width: { xs: "90%", md: "70%" } }}>
          <TextAreaComponent
            variant="h5"
            fontWeight={600}
            sx={{
              mb: 4,
              letterSpacing: 0.5,
              fontSize: { xs: "18px",sm:"20", md: "22px" },
              textAlign: "center",
              
            }}
          >
            Education
          </TextAreaComponent>

          <Box sx={{ position: "relative", pl: 4 }}>
            <Box
              sx={{
                position: "absolute",
                left: 10,
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: "#bfbfbf",
              }}
            />

            {educationData.map((edu, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  mb: 5,
                  p: 3,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
              
                <Box
                  sx={{
                    position: "absolute",
                    left: -28,
                    top: 24,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#0E0E69",
                  }}
                />

                <TextAreaComponent
                  variant="h6"
                  fontWeight={600}
                  sx={{ fontSize: { xs: "16px", md: "18px" } }}
                >
                  {edu.degree}
                </TextAreaComponent>

                <TextAreaComponent
                  color="text.secondary"
                  sx={{ mt: 0.5, fontSize: { xs: "13px", md: "14px" } }}
                >
                  {edu.institute} 
                </TextAreaComponent>

                <TextAreaComponent
                  variant="body2"
                  sx={{
                    mt: 0.5,
                    color: "#6b7280",
                    fontSize: { xs: "12px", md: "13px" },
                  }}
                >
                  {edu.duration} - India
                </TextAreaComponent>

                {edu.description && (
                  <>
                    <Divider sx={{ my: 1.5 }} />
                    <TextAreaComponent
                      sx={{
                        color: "#4b5563",
                        maxWidth: 650,
                        fontSize: { xs: "12px", md: "13px" },
                      }}
                    >
                      {edu.description}
                    </TextAreaComponent>
                  </>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Education;
