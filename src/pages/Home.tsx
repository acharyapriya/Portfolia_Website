import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonCompo from "../component/Button";
import TextAreaComponent from "../component/TextAreaComponent";

const MotionBox = motion(Box);
const MotionImg = motion.img;

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  const handleDownload = () => {
    const text = `
Sripriya Acharya
Frontend Developer
React | TypeScript | MUI
`;

    const blob = new Blob([text], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Sripriya_Acharya_CV.pdf";
    a.click();

    URL.revokeObjectURL(url);
  };




  return (
    <Box
      id="Home"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        scrollMarginTop: "90px"
      }}
      ref={ref}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          py: 4,
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >

        <MotionBox
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.8 }}
          sx={{ flex: 1 }}
        >
          <TextAreaComponent
            variant="h4"
            sx={{ fontSize: { xs: "28px", md: "36px" }, fontWeight: "bold" }}
          >
            Sripriya Acharya
          </TextAreaComponent>

          <TextAreaComponent
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: "18px", md: "20px" }, mt: 1 }}
          >
            Software Engineer
          </TextAreaComponent>

          <TextAreaComponent
            sx={{
              mt: 2,
              color: "#555",
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: 1.6,
            }}
          >
            Results-driven Software Engineer and Programmer with proven experience
            in developing and maintaining software applications. Skilled in
            analyzing requirements, solving technical challenges, and delivering
            robust solutions.
          </TextAreaComponent>

          <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
            <ButtonCompo
              variant="contained"
              sx={{ backgroundColor: "#000080" }}
              onClick={() =>
                document.getElementById("Contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Contact Me
            </ButtonCompo>

            <ButtonCompo
              variant="outlined"
              sx={{ borderColor: "#000080" }}
              onClick={handleDownload}
            >
              Download CV
            </ButtonCompo>

          </Box>
        </MotionBox>

        {/* RIGHT IMAGE */}
        <MotionImg
          src="/image/Home.png"
          alt="Sripriya Acharya"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            width: "600px",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
