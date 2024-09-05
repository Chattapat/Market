// src/components/Navbar.tsx
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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'; // นำเข้า Link จาก Next.js
import { useState } from 'react';
import { useTheme } from 'next-themes'; // นำเข้า useTheme จาก next-themes
import { FaMoon, FaSun } from 'react-icons/fa'; // ไอคอน Moon และ Sun

const pages = [
  { name: 'HOME', icon: '/icon/home.png', path: '/home' },
  { name: 'SHOP', icon: '/icon/shop.png', path: '/shop' },
  { name: 'CART', icon: '/icon/cart.png', path: '/cart' },
  { name: 'CONTACT', icon: '/icon/contact.png', path: '/contact' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State สำหรับสถานะการล็อกอิน
  const { theme, setTheme } = useTheme(); // ใช้ useTheme สำหรับการเปลี่ยนโหมด

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // ฟังก์ชันสำหรับการล็อกอิน/ออกจากระบบ
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); // สลับสถานะการล็อกอิน/ออกจากระบบ
  };

  // ฟังก์ชันสำหรับการเปลี่ยนโหมด
  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme === 'light' ? '#333' : '#1E1E1E' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Title Section */}
          <Typography
            variant="h6"
            noWrap
            component={Link} // ใช้ Link แทน a
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme === 'light' ? 'white' : '#E0E0E0',
              textDecoration: 'none',
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
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    href={page.path}
                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
                  >
                    <img src={page.icon} alt={page.name} style={{ width: 24, height: 24, marginRight: 8 }} />
                    <Typography sx={{ textAlign: 'center', color: theme === 'light' ? 'black' : 'white' }}>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation Buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: theme === 'light' ? 'white' : '#E0E0E0', display: 'flex', alignItems: 'center' }}
                component={Link}
                href={page.path}
              >
                <img src={page.icon} alt={page.name} style={{ width: 24, height: 24, marginRight: 8 }} />
                <Typography sx={{ ml: 1 }}>{page.name}</Typography>
              </Button>
            ))}
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
            <Tooltip title="ACCOUNT">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* เปลี่ยนรายการใน settings ตามสถานะการล็อกอิน */}
              {isLoggedIn ? (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={handleLoginLogout} sx={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography sx={{ textAlign: 'center', color: theme === 'light' ? 'black' : 'white' }}>LOG-OUT</Typography>
                  </Button>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography sx={{ textAlign: 'center', color: theme === 'light' ? 'black' : 'white' }}>LOGIN</Typography>
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
