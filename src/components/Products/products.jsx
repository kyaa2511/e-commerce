import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/product';
import useStyles from './styles'



const Products = ({ products, onAddToCart }) => {

    const classes = useStyles();
    return (
        <main>
            <div className={classes.toolbar} />
        <Grid container justify = "center" spacing = {4} >
            {
                products.map((products) => (
                                                //for screen responsiveness
                    <Grid item key = {products.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product products={products} onAddToCart = {onAddToCart} />
                    </Grid>
                ))
            }
        </Grid>
    </main>
    )

    
}

export default Products;