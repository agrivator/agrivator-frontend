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


        const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDlmZWY4MjQwOTMzMDAxN2Q4OWQyZSIsImlhdCI6MTU5NzI1NzMyNSwiZXhwIjoxNTk5ODQ5MzI1fQ.ZgQhO2MuuZDAIXrn1qi2oC32It6nwBDJU2FaEQ-3oNI"
        // const jwt = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        const token = `Bearer ${jwt}`
        console.log("Token:", token)
        // console.log(user)
        console.log("Reg data:", product)

        // The error was 
        // 1. The way we set the Authorization header.
        // 2. The product object contained some data that wasn't supposed to filled by the user.
        // 3. axios.post is an async function. So either use await. or use callback functions.

        // 1. During Login time, do this also. Or set this data from localstorage or something. Idk how that works.
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
        // 2. During product creation, only send these fields. Other fields, like created_by and all are filled by the server.
        const res = await axios.post(`${baseUrl}/products`, {
            name: product['name'],
            description: product['description'],
            category: product['category'],
            subCategory: product['subCategory']
        });
        console.log("res:", res)
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
