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
                <div className="text-danger">This is home page</div>
                <Navbar/>
                <TextDisplay message="Hi, input your data" />
                <InputForm/>
                <TextDisplay message="View your data" />
                <ViewDataCard/>
            </div>
        )
    }
}

export default Home
