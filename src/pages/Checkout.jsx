import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Paper, Grid, Snackbar, Alert, Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import useCartStore from '../store/cartStore';
import { db } from '../services/db';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const onSubmit = async (data) => {
        const orderData = {
            customer: data,
            items: cart,
            total: total,
            date: new Date().toISOString()
        };

        try {
            await db.saveCustomer(orderData);
            setOpenSnackbar(true);
            clearCart();
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error('Error saving order:', error);
        }
    };

    if (cart.length === 0) {
        return (
            <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h5">Your cart is empty.</Typography>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/products')}>
                    Go Shopping
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth={false} sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Checkout
            </Typography>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Customer Information
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        {...register('firstName', { required: 'First name is required' })}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName?.message}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        {...register('lastName', { required: 'Last name is required' })}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName?.message}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        {...register('email', { required: 'Email is required' })}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        {...register('address', { required: 'Address is required' })}
                                        error={!!errors.address}
                                        helperText={errors.address?.message}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Button type="submit" variant="contained" size="large" fullWidth>
                                        Place Order
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 3, bgcolor: 'grey.100' }}>
                        <Typography variant="h6" gutterBottom>
                            Order Summary
                        </Typography>
                        {cart.map((item) => (
                            <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body2">
                                    {item.name} x {item.quantity}
                                </Typography>
                                <Typography variant="body2">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </Typography>
                            </Box>
                        ))}
                        <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid grey' }}>
                            <Typography variant="h6" align="right">
                                Total: ${total.toFixed(2)}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    Order placed successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Checkout;
