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
        // const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDlmZWY4MjQwOTMzMDAxN2Q4OWQyZSIsImlhdCI6MTU5NzI1NzMyNSwiZXhwIjoxNTk5ODQ5MzI1fQ.ZgQhO2MuuZDAIXrn1qi2oC32It6nwBDJU2FaEQ-3oNI"
        const jwt = localStorage.getItem('token')
        const token = `Bearer ${jwt}`
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

        const res = await axios.post(`${baseUrl}/products`, {
            name: product['name'],
            description: product['description'],
            category: product['category'],
            subCategory: product['subCategory']
        });
        console.log("res:", res)

        this.loadProducts()
    }



    putProductStock = async(id) =>{
        console.log("put product",id)
    }



    postInventory = async(inventory)=>{

        const jwt = localStorage.getItem('token')
        const token = `Bearer ${jwt}`
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

        const res = await axios.post(`${baseUrl}/product-inventories`, {
            product:inventory.product,
            unit:inventory.unit,
            type:inventory.type,
            price:inventory.price,
            loose:inventory.loose

        });
        if(res.status == 200)
        {
            this.loadProducts()
        }
        console.log(res)

    }

    deleteInventory = async(id)=>{
        
        const jwt = localStorage.getItem('token')
        const token = `Bearer ${jwt}`
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

        const res = await axios.delete(`${baseUrl}/product-inventories/${id}`)
        console.log(res)
        this.loadProducts()

    }


    // =========================================
    // sending all state and functions through context provider


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                postProduct:this.postProduct,
                putProductStock:this.putProductStock,
                postInventory:this.postInventory,
                deleteInventory:this.deleteInventory

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }

}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}
