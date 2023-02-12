import { useState } from "react";
import {
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import {
  LoginButton,
  NavBox,
  SignupButton,
  StyledAppbar,
  StyledLink,
  StyledToolbar,
} from "./headerStyle";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Link } from "react-router-dom";

const navLinks = ["Home", "Products", "About Us", "Become a Seller"];

function Header() {
  const { currentUser } = useContext(UserContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppbar position="static" elevation={0}>
      <StyledToolbar variant="dense">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginRight: "32px",
            }}
          >
            FLUX
          </Typography>
          <NavBox sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{link}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </NavBox>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              margin: 0,
            }}
          >
            FLUX
          </Typography>
          <NavBox sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <StyledLink
                key={link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white" }}
              >
                {link}
              </StyledLink>
            ))}
          </NavBox>
        </Box>
        {currentUser ? (
          <Box>
            <Avatar sx={{ width: 32, height: 32 }} />
          </Box>
        ) : (
          <Box>
            <StyledLink to="/auth/signin">
              <LoginButton variant="text">Login</LoginButton>
            </StyledLink>
            <StyledLink to="/auth/signup">
              <SignupButton variant="contained">Sign Up</SignupButton>
            </StyledLink>
          </Box>
        )}
      </StyledToolbar>
    </StyledAppbar>
  );
}

export default Header;
