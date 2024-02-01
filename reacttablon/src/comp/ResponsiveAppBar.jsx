import { useState } from 'react';
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
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { Link } from 'react-router-dom';

const pages = [
	{label: 'Inicio', ruta: '/'},
	{label: 'Mis anuncios', ruta: '/misanuncios'},
	{label: 'Nuevo anuncio', ruta: '/nuevoanuncio'},
	{label: 'Destacados', ruta: '/destacados'},
];
const settings = ['Configuración', 'Salir'];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);
	const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
	const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget); };
	const handleCloseNavMenu = () => { setAnchorElNav(null); };
	const handleCloseUserMenu = () => { setAnchorElUser(null); };

	return (
		<AppBar position="static" sx={{ marginBottom: "1rem" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<StickyNote2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography variant="h6" noWrap component={Link} to="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>ANUNCIOS</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
							anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
							keepMounted
							transformOrigin={{ vertical: 'top', horizontal: 'left', }}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page,i) => (
								<MenuItem key={i} onClick={handleCloseNavMenu}>
									<Typography textAlign="center" component={Link} to={page.ruta} sx={{ color: 'inherit', textDecoration: 'none' }}>
											{page.label}
									</Typography>

								</MenuItem>
							))}
						</Menu>
					</Box>
					<StickyNote2Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography variant="h5" noWrap component={Link} to="/"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						ANUNCIOS
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page,i) => (
							<Button
								key={i}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
								component={Link}
								to={page.ruta}
							>
								{page.label}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Abrir configuración">
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
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;