import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun, FaSignInAlt, FaSignOutAlt, FaCog, FaUserPlus } from 'react-icons/fa';

const pages = [
  { name: 'HOME', icon: '/icon/home.png', path: '/home' },
  { name: 'SHOP', icon: '/icon/shop.png', path: '/shop' },
  { name: 'CART', icon: '/icon/cart.png', path: '/cart' },
  { name: 'CONTACT', icon: '/icon/contact.png', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สถานะของการล็อกอิน
  const { theme, setTheme } = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleLoginLogout = () => {
    setIsLoggedIn(prev => !prev); // สลับสถานะการล็อกอิน
    handleCloseUserMenu();
  };

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const renderMenuItems = () =>
    pages.map((page) => (
      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
        <Link href={page.path} passHref>
          <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img src={page.icon} alt={page.name} style={{ width: 24, height: 24, marginRight: 8 }} />
            <Typography sx={{ color: theme === 'light' ? 'white' : 'grey.300', fontSize: '1rem' }}>
              {page.name}
            </Typography>
          </Box>
        </Link>
      </MenuItem>
    ));

  const renderUserMenuItems = () => {
    if (isLoggedIn) {
      return (
        <>
          <MenuItem key="account" onClick={handleCloseUserMenu}>
            <Link href="/account" passHref>
              <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <FaCog style={{ marginRight: '8px', fontSize: '1.2rem' }} />
                <Typography sx={{ color: theme === 'light' ? 'white' : 'grey.300', fontSize: '1rem' }}>
                  ACCOUNT
                </Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem key="logout" onClick={handleLoginLogout}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
              <FaSignOutAlt style={{ marginRight: '8px', fontSize: '1.2rem' }} />
              <Typography sx={{ color: theme === 'light' ? 'white' : 'grey.300', fontSize: '1rem' }}>
                LOG-OUT
              </Typography>
            </Box>
          </MenuItem>
        </>
      );
    } else {
      return (
        <>
          <MenuItem key="login" onClick={handleCloseUserMenu}>
            <Link href="/login" passHref>
              <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <FaSignInAlt style={{ marginRight: '8px', fontSize: '1.2rem' }} />
                <Typography sx={{ color: theme === 'light' ? 'white' : 'grey.300', fontSize: '1rem' }}>
                  LOGIN
                </Typography>
              </Box>
            </Link>
          </MenuItem>
          <MenuItem key="register" onClick={handleCloseUserMenu}>
            <Link href="/register" passHref>
              <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <FaUserPlus style={{ marginRight: '8px', fontSize: '1.2rem' }} />
                <Typography sx={{ color: theme === 'light' ? 'white' : 'grey.300', fontSize: '1rem' }}>
                  REGISTER
                </Typography>
              </Box>
            </Link>
          </MenuItem>
        </>
      );
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme === 'light' ? '#333' : '#1E1E1E' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Title Section */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme === 'light' ? 'white' : '#E0E0E0',
              textDecoration: 'none',
              fontSize: '1.5rem',
            }}
          >
            MARKET101
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: theme === 'light' ? 'white' : '#E0E0E0' }} />
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
              {renderMenuItems()}
            </Menu>
          </Box>

          {/* Desktop Navigation Buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {renderMenuItems()}
          </Box>

          {/* Theme Toggle Button */}
          <IconButton
            onClick={handleToggleTheme}
            sx={{ ml: 2 }}
            color="inherit"
            aria-label="toggle theme"
          >
            {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
          </IconButton>

          {/* User Avatar and Settings Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={isLoggedIn ? 'ACCOUNT' : 'LOGIN / REGISTER'}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={isLoggedIn ? '/icon/user.png' : '/icon/guest.png'} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {renderUserMenuItems()}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;


