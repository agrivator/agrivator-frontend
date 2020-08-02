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
            {(products.length === 0)? 

                <div className="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>

            : 
                products.map((product)=>{
                    return <ViewDataCard key={product.id} product={product} />
                })
            
            
            }
            {console.log(products)}
        
        </>
    )
}

export default Products;
