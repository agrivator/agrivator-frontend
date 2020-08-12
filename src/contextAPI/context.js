import React, { Component, useState } from 'react'
import axios from "axios";

// base url
const baseUrl = 'https://dart-agrivator.herokuapp.com';

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state ={
        products:[],
    }
    
     // =============================================
    componentDidMount(){

        this.getProducts()
        
    }

    // =============================================
     // =============================================
     // =============================================
     // =============================================
     // =============================================
     // =============================================
     // =============================================


    getProducts = async () =>{
        const res = await axios.get(`${baseUrl}/products`);
        const data = res.data;
        this.setState({products:data})
    }

    // function to trigger fetching process of data...
    loadProducts = ()=>{
        this.getProducts()
    }

    postProduct = async (product) =>{

        const jwt = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        const token = `Bearer ${jwt}`
        console.log(token)
        console.log(user)
        console.log(product)
        const res = axios.post(`${baseUrl}/products`,{
            data:product,
            headers: {
              'Authorization': token
            }
          });
        
        console.log(res)
    }

    // =========================================
    // sending all state and functions through context provider


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                postProduct:this.postProduct,

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }

}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}
