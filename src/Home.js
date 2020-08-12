import React, { Component } from 'react'

import Navbar from './components/Navbar'
import ProductForm from './components/ProductForm'
import ProductView from './components/ProductView'

class Home extends Component {
   
    render() {
        return (
            <div className="container">
                <Navbar/>

                {/* ========================= */}
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div className="h4 font-weight-light text-secondary">Hi! &nbsp; Enter product data here!</div>
                {/* ========================= */}


                <ProductForm/>

                
                {/* ========================= */}
                <div className="space-50"></div>
                <div className="h4 font-weight-light text-secondary">View data </div>
                {/* ========================= */}


                <ProductView/>
                
            </div>
        )
    }
}

export default Home
