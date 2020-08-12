import React, { Component } from 'react'
import axios from "axios";

// base url
const baseUrl = 'https://dart-agrivator.herokuapp.com';

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state ={
        products:[],
        AuthData:[]
    }
    // =============================================
    // need a good auth 
    // just for working....
   
    login= async()=>{
        const response = await axios.post(`${baseUrl}/auth/local`, {
            identifier: "jithinksatheesh@gmail.com",
            password:"password123"
        })
        this.setState({AuthData:response.data})
        console.log(response.data)
        const token = response.data.jwt
        const user = response.data.user
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user))
        // setJwt(data.token)
        console.log(token)
        console.log("login called")


    }

     // =============================================
     // =============================================
     // =============================================
     // =============================================
     // =============================================
     // =============================================
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
        const res = axios.post(`${baseUrl}/products`,product)
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
