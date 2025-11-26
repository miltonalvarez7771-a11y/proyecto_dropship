import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, IconButton, Badge, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const Layout = () => {
    const cart = useCartStore((state) => state.cart);
    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static">
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component={RouterLink}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                flexGrow: 1
                            }}
                        >
                            NOVELTY DROP
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button component={RouterLink} to="/" color="inherit">
                                Home
                            </Button>
                            <Button component={RouterLink} to="/products" color="inherit">
                                Products
                            </Button>
                        </Box>

                        <Box sx={{ flexGrow: 0, ml: 2 }}>
                            <IconButton component={RouterLink} to="/checkout" color="inherit">
                                <Badge badgeContent={cartItemCount} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="main" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>

            <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
                <Container maxWidth="sm">
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'Copyright © '}
                        <RouterLink color="inherit" to="/">
                            Novelty Drop
                        </RouterLink>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Layout;
