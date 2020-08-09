import React, { useState, useMemo } from 'react'
import InputForm from './components/InputForm'
import Navbar from './components/Navbar'
// import ViewDataCard from './components/ViewDataCard'
import TextDisplay from './components/TextDisplay'
import GetProducts from './helpers/GetProducts'
//Contexts
import { ProductContext } from './context/ProductContext'

const Home = () => {
    const [productsGlobal, setProductsGlobal] = useState([])
    const providerValue = useMemo(() => ({ productsGlobal, setProductsGlobal }), [productsGlobal, setProductsGlobal])

    return (
        <div>
            <Navbar />
            <div className="space-50"></div>
            <div className="space-50"></div>
            <div className="container">
            <TextDisplay message="Hi, you can enter your product data here." />
            <ProductContext.Provider value={providerValue} >
                <InputForm />
                <div className="space-50"></div>
                <TextDisplay message="You can view all your product entries here!" />
                <div className="space-20"></div>
                {/* <ViewDataCard/> */}
                <GetProducts />
            </ProductContext.Provider>
            </div>
        </div>
    )
}

export default Home
