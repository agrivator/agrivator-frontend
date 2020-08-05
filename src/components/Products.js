import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ViewDataCard from './ViewDataCard';

import { getProducts } from '../helpers/ProductService';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const resData = await getProducts();
            const flatResData = flattenProducts(resData);
            setProducts(flatResData);
        })();

    }, [])

    //* This works
    // let productsModded = [];
    // products.forEach(product => {
    //     product.product_inventories.forEach(product_inventory => {
    //         console.log(`${product.name} - ${product_inventory.unit} - ${product_inventory.price}`)
    //         const newProd = {...product, product_inventory};
    //         productsModded.push(newProd)
    //     })
    // }) 
    
    


    // *Function that flattens product_inventories array
    // *Creates a new key called product_inventory
    const flattenProducts = (inputProducts) => {
        let productsModded = [];
        inputProducts.forEach(product => {
            product.product_inventories.forEach(product_inventory => {
                console.log(`${product.name} - ${product_inventory.unit} - ${product_inventory.price}`)
                const newProd = { ...product, product_inventory };
                productsModded.push(newProd)
            })
        })
        return productsModded;
    }




    return (
        <>
            {(products.length === 0) ?

                <div className="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>

                :
                products.map((product) => {
                    return <ViewDataCard key={product.id} product={product} />
                })


            }

        </>
    )
}

export default Products;
