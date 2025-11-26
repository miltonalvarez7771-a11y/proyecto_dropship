import React from 'react';
import { Typography, Box, Button, Grid, Paper, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_1280.jpg)',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    p: 4
                }}
            >
                <Typography component="h1" variant="h2" color="inherit" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    Bienvenido a la alegría de comprar
                </Typography>
                <Typography variant="h5" color="inherit" paragraph sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                    Para tu hogar y mascotas
                </Typography>
                <Button variant="contained" color="secondary" size="large" component={RouterLink} to="/products">
                    Comprar
                </Button>
            </Paper>

            {/* Categories Preview */}
            <Container maxWidth={false} sx={{ py: 4 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper sx={{
                            p: 3,
                            textAlign: 'center',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            bgcolor: '#e0f7fa',
                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: 6,
                            }
                        }}>
                            <Typography variant="h4" gutterBottom>
                                Hogar
                            </Typography>
                            <Typography paragraph>
                                Upgrade your living space with our smart and quirky household items.
                            </Typography>
                            <Button variant="outlined" component={RouterLink} to="/products">
                                Hogar
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper sx={{
                            p: 3,
                            textAlign: 'center',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            bgcolor: '#fff3e0',
                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: 6,
                            }
                        }}>
                            <Typography variant="h4" gutterBottom>
                                Mascotas
                            </Typography>
                            <Typography paragraph>
                                Treat your furry friends to the latest in pet entertainment and comfort.
                            </Typography>
                            <Button variant="outlined" component={RouterLink} to="/products">
                                View Pet Supplies
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
