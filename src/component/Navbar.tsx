import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Json from "../jsonstructure/Navbar.json";

const pages = Json.navbar;

const Navbar = () => {
  return (
    <AppBar
      elevation={1}
      sx={{
        backgroundColor: "#0E0E69",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          padding: "20px",
        }}
      >
        {pages.map((page) => (
         <Button
  key={page}
  onClick={() => {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  sx={{
    color: "#ffffff",
    textTransform: "none",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      height: "2px",
      width: 0,
      backgroundColor: "#ffffff",
      transition: "width 0.3s ease",
    },
    "&:hover::after": {
      width: "100%",
    },
    "&:focus": {
      outline: "none",
    },
  }}
>
  {page}
</Button>

        ))}
      </Box>
    </AppBar>
  );
};

export default Navbar;
