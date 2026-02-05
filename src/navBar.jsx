import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CabinIcon from '@mui/icons-material/Cabin';
import FolderIcon from '@mui/icons-material/Folder';
import { Link } from "react-router-dom";

const pages = [
  { label: "Home", path: "/", symbol: true, external: false },
  { label: "Projects", path: "/projects", symbol: false, external: false }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [iconState, setIconState] = React.useState(true);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const whichIcon = (value) => setIconState(value);

  return (
    <AppBar position="static" style={{ backgroundImage: "url(/navBarBackGroundA.jpg)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {iconState ? (
            <CabinIcon sx={{   filter: "drop-shadow(4px 4px 16px rgba(0,0,0,0.5))", color: "black", display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          ) : (
            <FolderIcon sx={{  filter: "drop-shadow(4px 4px 16px rgba(0,0,0,0.5))",color: "#E0C097",display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              filter: "drop-shadow(1px 1px 4px rgba(0,0,0,0.5))",
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none'
            }}
          >
            Wilsons Web Page
          </Typography>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  component={page.external ? 'a' : Link}
                  to={page.external ? undefined : page.path}
                  href={page.external ? page.path : undefined}
                  target={page.external ? "_blank" : undefined}
                  rel={page.external ? "noopener noreferrer" : undefined}
                  onClick={() => {
                    handleCloseNavMenu();
                    whichIcon(page.symbol);
                  }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Wilsons Web Page
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              page.external ? (
                <Button
                  key={page.label}
                  component="a"
                  href={page.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => whichIcon(page.symbol)}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page.label}
                </Button>
              ) : (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.path}
                  onClick={() => whichIcon(page.symbol)}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page.label}
                </Button>
              )
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
