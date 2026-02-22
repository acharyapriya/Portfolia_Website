import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Json from "../jsonstructure/Navbar.json";

const pages = Json.navbar;

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleScroll = (page: string) => {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <AppBar elevation={1} sx={{ backgroundColor: "#0E0E69" }}>
      <Toolbar
        sx={{
          justifyContent: {
            xs: "flex-start", // Mobile → left
            md: "center",     // Desktop → center
          },
        }}
      >
        {/* Mobile Hamburger (LEFT) */}
        {isMobile && (
          <IconButton onClick={() => setOpen(true)} sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>
        )}

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4 }}>
            {pages.map((page: string) => (
              <Button
                key={page}
                onClick={() => handleScroll(page)}
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
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {pages.map((page: string) => (
              <ListItem key={page} disablePadding>
                <ListItemButton onClick={() => handleScroll(page)}>
                  <ListItemText primary={page} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;