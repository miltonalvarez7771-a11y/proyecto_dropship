import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Chip, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useCartStore from '../store/cartStore';

const ProductCard = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6,
            }
        }}>
            <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <Chip label={product.category} color={product.category === 'Pets' ? 'secondary' : 'primary'} size="small" />
            </Box>
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                    ${product.price.toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    fullWidth
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
