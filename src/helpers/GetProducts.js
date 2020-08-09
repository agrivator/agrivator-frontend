import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import ViewDataCard from '../components/ViewDataCard';

import { getProducts } from './ProductService';
import { ProductContext } from './../context/ProductContext';

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const { productsGlobal, setProductsGlobal } = useContext(ProductContext);

    useEffect(() => {
        (async () => {
            const resData = await getProducts();
            setProductsGlobal(resData);
            const flatResData = flattenProducts(resData);
            setProducts(flatResData);
        })();

    }, [])


    // *Function that flattens product_inventories array
    // *Creates a new key called product_inventory
    const flattenProducts = (inputProducts) => {
        let productsModded = [];
        inputProducts.forEach(product => {
            product.product_inventories.forEach(product_inventory => {
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
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

                :
                products.map((product) => {
                    return <ViewDataCard key={product.product_inventory._id} product={product} />
                })


            }

        </>
    )
}

export default GetProducts;
