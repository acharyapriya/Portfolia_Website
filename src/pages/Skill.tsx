import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import skilldata from "../jsonstructure/Navbar.json";
import TextAreaComponent from "../component/TextAreaComponent";

const MotionBox = motion(Box);

const Skill = () => {
  const { frontend = [], backend = [], softwareDevelopmentTool = [] } = skilldata?.skill || {};

  const renderSkills = (skills: any[]) => (
    <Grid container spacing={4} >
      {skills.map((item) => (
      

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 1,
                width: "100%",
                gap: 4,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                {item.name}
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: 14, color: "#0E0E69" }}>
                {item.level}%
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: 4,
                borderRadius: 5,
                backgroundColor: "#e0e0e0",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: `${item.level}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #0E0E69 0%, #1E90FF 100%)",
                  borderRadius: "5px 0 0 5px",
                  transition: "width 1s ease-in-out",
                }}
              />
            </Box>
          </MotionBox>
      
      ))}
    </Grid>
  );

  return (
    <Box
      id="Skill"
      sx={{
        width: "100%",
        py: { xs: 3, md: 6 },
        scrollMarginTop: "90px",
        background: "#f2f2f25c",

      }}
    >
      <Box sx={{ width: { xs: "90%", md: "60%" }, mx: "auto" }}>
        {/* Title */}
        <TextAreaComponent
          variant="h5"
          sx={{
              fontSize: { xs: "18px",sm:"20", md: "22px" },
            fontWeight: "bold",
            textAlign: "center",
            mb: 6,
            color: "#003366",
          }}
        >
          My Skills
        </TextAreaComponent>

        {/* Frontend & Backend side by side */}
        <Grid container spacing={6}>
          <Grid  >
            <TextAreaComponent variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#0E0E69" }}>
              Frontend
            </TextAreaComponent>
            {renderSkills(frontend)}
          </Grid>
          <Grid >
            <TextAreaComponent variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#0E0E69" }}>
              Backend
            </TextAreaComponent>
            {renderSkills(backend)}
          </Grid>
        </Grid>

        {/* Tools below */}
        <Box sx={{ mt: 6 }}>
          <TextAreaComponent variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#0E0E69" }}>
           Software Development Tools
          </TextAreaComponent>
          {renderSkills(softwareDevelopmentTool)}
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;
