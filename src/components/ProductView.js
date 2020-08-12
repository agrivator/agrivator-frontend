import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {ProductConsumer} from '../contextAPI/context'


class ProductView extends Component {
    
    render() {
        return (
            <div className="">
                <ProductConsumer>
                    {(value)=>{
                        return (
                            <>  
                                {value.products.length === 0 ?
                                    <div className="text-center">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                :""}
                                {/* ===================================== */}
                                {value.products.map((product)=>{
                                    return <ProductCard product={product} key={product.id} />
                                })}
                            </>
                        )
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

export default ProductView
