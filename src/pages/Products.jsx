import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box, CircularProgress, ToggleButton, ToggleButtonGroup, Container } from '@mui/material';
import { db } from '../services/db';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await db.getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleFilterChange = (event, newFilter) => {
        if (newFilter !== null) {
            setFilter(newFilter);
        }
    };

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth={false} sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Our Products
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                <ToggleButtonGroup
                    value={filter}
                    exclusive
                    onChange={handleFilterChange}
                    aria-label="product category"
                >
                    <ToggleButton value="All">All</ToggleButton>
                    <ToggleButton value="Household">Household</ToggleButton>
                    <ToggleButton value="Pets">Pets</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Grid container spacing={3}>
                {filteredProducts.map((product) => (
                    <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;
