import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import data from "../jsonstructure/Navbar.json";
import TextAreaComponent from "../component/TextAreaComponent";

const MotionBox = motion(Box);

const Experience = () => {
  return (
    <Box
      id="Experience"
      sx={{
        width: "100%",
        py: { xs: 3, md: 4 },
        display: "flex",
        justifyContent: "center",
        scrollMarginTop: "90px",
      }}
    >
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
          Experience
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

          {data?.Experience?.map((exp, index) => (
            <InView key={index} threshold={0.2} triggerOnce={true}>
              {({ ref, inView }) => (
                <MotionBox
                  ref={ref}
                  initial={{ x: -100, opacity: 0 }} 
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  sx={{
                    position: "relative",
                    mb: 5,
                    p: 3,
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.04)",
                    "&:hover": {
                      boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
                      transform: "translateY(-4px)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
               
                  <Box
                    sx={{
                      position: "absolute",
                      left: -26.5,
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
                    {exp.Project}
                  </TextAreaComponent>

                  <TextAreaComponent
                    variant="body2"
                    sx={{
                      mt: 0.5,
                      color: "#6b7280",
                      fontSize: { xs: "12px", md: "13px" },
                    }}
                  >
                    {exp.Year}
                  </TextAreaComponent>
                   <TextAreaComponent
                    variant="body2"
                    sx={{
                      mt: 0.5,
                      color: "#6b7280",
                      fontSize: { xs: "12px", md: "13px" },
                    }}
                  >
                    {exp.Location}
                  </TextAreaComponent>

                  {exp.Client && (
                    <TextAreaComponent
                      sx={{
                        color: "#0E0E69",
                        fontWeight:200,
                        maxWidth: 650,
                        fontSize: { xs: "12px", md: "13px" },
                      }}
                    >
                      {exp.Client}
                    </TextAreaComponent>
                  )}

                  {exp.Description && (
                    <>
                      <Divider sx={{ my: 1.5 }} />
                      <TextAreaComponent
                        sx={{
                          color: "#4b5563",
                         // maxWidth: 650,
                          fontSize: { xs: "12px", md: "13px" },
                        }}
                      >
                        {exp.Description}
                      </TextAreaComponent>
                    </>
                  )}

                  {exp.Duties && (
                    <>
                      <Divider sx={{ my: 1.5 }} />
                      <Box component="ul" sx={{ pl: 3, color: "#4b5563" }}>
                        {exp.Duties.map((duty, idx) => (
                          <li key={idx}>
                            <TextAreaComponent
                              component="span"
                              sx={{ fontSize: { xs: "12px", md: "13px" } }}
                            >
                              {duty}
                            </TextAreaComponent>
                          </li>
                        ))}
                      </Box>
                    </>
                  )}
                </MotionBox>
              )}
            </InView>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
