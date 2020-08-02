import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ViewDataCard from './ViewDataCard';

import { getProducts } from '../helpers/ProductService';

const Products = () => {
    const [products, setProducts] = useState([]);     

    useEffect(() => {
        (async () => {
            const resData = await getProducts();
            setProducts(resData);
        })();
        
    }, [])

    return (
        <>
            <ViewDataCard/>     
        </>
    )
}

export default Products;
