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
    


    logout = () => {
        delete axios.defaults.headers.common['Authorization']
        localStorage.removeItem('token')
        
    }


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
        if(res.status === 200)
        {
            let newProductsState = [...this.state.products,res.data]
            this.setState({
                products:newProductsState
            })
        }


        // this.loadProducts()
    }

    deleteProduct = async(id)=>{

        const jwt = localStorage.getItem('token')
        const token = `Bearer ${jwt}`
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

        const res = await axios.delete(`${baseUrl}/products/${id}`)
        console.log(res)
        if(res.status == 200)
        {
            let newProductState = this.state.products.filter(p => p.id !== res.data.id)
            this.setState({
                products:newProductState
            })

        }
        
        // this.loadProducts()

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

        // update state 
        if(res.status == 200)
        {
            let newProductState = this.state.products.map((p)=>{
                if(p.id === res.data.product.id){
                    p.product_inventories.push(res.data)
                }
                return p
            })
            this.setState({
                products:newProductState
            })
        }
        console.log(res)

    }

    // detete Inventory

    deleteInventory = async(id)=>{
        
        const jwt = localStorage.getItem('token')
        const token = `Bearer ${jwt}`
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

        const res = await axios.delete(`${baseUrl}/product-inventories/${id}`)
        console.log(res)

        if(res.status === 200)
        {
            let newProductState = this.state.products.map((p)=>{
                if(p.id === res.data.product.id){
                    p.product_inventories = p.product_inventories.filter(data => data.id !== res.data.id)
                }
                return p
            })
            this.setState({
                products:newProductState
            })
            
        }



    }

    


    // =========================================
    // sending all state and functions through context provider


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                logout:this.logout,
                postProduct:this.postProduct,
                putProductStock:this.putProductStock,
                postInventory:this.postInventory,
                deleteInventory:this.deleteInventory,
                deleteProduct:this.deleteProduct

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }

}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}
