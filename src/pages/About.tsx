import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
import TextAreaComponent from "../component/TextAreaComponent";

const About = () => {
  // Detect when About section comes into view
  const { ref, inView } = useInView({
    triggerOnce: true,  // Animates every time it comes into view
    threshold: 0.3,      // 30% visible triggers animation
  });

  return (
    <Box
    id="About"
      ref={ref}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: { xs: 3, md: 4 },
        background: "#f9f9f9",
      scrollMarginTop: "90px",
      }}
    >
      {/* Pure Fade animation */}
      <Fade in={inView} timeout={2000}>
        <Box
          sx={{
            width: { xs: "90%", md: "70%" },
            textAlign: "center",
          }}
        >
          <TextAreaComponent
            variant="h5"
            sx={{
               fontSize: { xs: "18px",sm:"20", md: "22px" },
              fontWeight: "bold",
            }}
          >
            About Me
          </TextAreaComponent>

          <TextAreaComponent
            sx={{
              pt: 2,
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: 1.7,
              color: "text.secondary",
            }}
          >
            I am a dedicated Software Engineer and Developer with experience
            in designing and delivering high-quality software solutions. I
            enjoy tackling complex problems, improving processes, and
            collaborating with cross-functional teams in Agile environments.
            My focus is on creating efficient, scalable, and user-friendly
            applications while continuously learning and adapting to new
            challenges.
          </TextAreaComponent>
        </Box>
      </Fade>
    </Box>
  );
};

export default About;
