import React, { Component } from 'react'
import Navbar from './components/Navbar'
import InputForm from './components/InputForm'
import PrimaryButton from './components/PrimaryButton'
import ViewDataCard from './components/ViewDataCard'
import TextDisplay from './components/TextDisplay'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div className="container">
                <TextDisplay message="Hi, you can enter your product data here."/>
                <InputForm/>
                <div className="space-50"></div>
                <TextDisplay message="You can view all your product entries here!" />
                <div className="space-20"></div>
                <ViewDataCard/>
                </div>
            </div>
        )
    }
}

export default Home
