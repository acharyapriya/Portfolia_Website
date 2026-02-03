import { Box, Grid, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import data from "../jsonstructure/Navbar.json";
import ButtonCompo from "../component/Button";
import TextAreaComponent from "../component/TextAreaComponent";

const MotionBox = motion(Box);

const Project = () => {
  return (
    <Box id="Project" sx={{ width: "100%", py: { xs: 3, md: 4 }, background: "#f2f2f25c", scrollMarginTop: "90px", }}>
      <Box sx={{ width: { xs: "90%", md: "67%" }, mx: "auto", textAlign: "center" }}>
        <TextAreaComponent
          variant="h5"
          sx={{
            fontSize: { xs: "18px", sm: "20", md: "22px" },
            fontWeight: "bold",
            color: "#000080",
            mb: 6,
          }}
        >
          Projects
        </TextAreaComponent>

        <Grid container spacing={4} justifyContent="center">
          {data?.Project?.map((item, index) => {
            const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
            const fromLeft = index % 2 === 0;

            return (
              <Grid

                key={index}
                sx={{
                  width: { xs: "100%", sm: "47%" },
                  gap: 2,

                }}
              >
                <MotionBox
                  ref={ref}
                  initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: 3,
                      borderRadius: 2,
                      boxShadow: "0px 6px 18px rgba(0,0,0,0.04)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0px 12px 28px rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    {/* Top info */}
                    <Box sx={{ mb: 2 }}>
                      <TextAreaComponent
                        variant="subtitle1"
                        sx={{ fontWeight: 600, fontSize: { xs: "14px", md: "16px" } }}
                      >
                        {item.Project}
                      </TextAreaComponent>

                      <TextAreaComponent
                        variant="caption"
                        sx={{ fontSize: { xs: "11px", md: "12px" }, color: "text.secondary" }}
                      >
                        {item.Description}
                      </TextAreaComponent>
                    </Box>

                    {/* Buttons */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                      <ButtonCompo
                        startIcon={<VisibilityOutlinedIcon />}
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "#000080",
                          color: "#000080",
                          textTransform: "none",
                          borderRadius: "5px",
                          px: 1.5,
                          fontSize: "0.75rem",
                          "&:hover": { borderColor: "#000080" },
                        }}
                        onClick={() => window.open(item.GitHub, "_blank")}
                      >
                        GitHub
                      </ButtonCompo>

                      <ButtonCompo
                        startIcon={<VisibilityOutlinedIcon />}
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "#000080",
                          color: "#000080",
                          textTransform: "none",
                          borderRadius: "5px",
                          px: 1.5,
                          fontSize: "0.75rem",
                          "&:hover": { borderColor: "#000080" },
                        }}
                      >
                        Live Demo
                      </ButtonCompo>
                    </Box>
                  </Card>
                </MotionBox>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Project;
