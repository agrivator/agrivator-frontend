import React, { Component } from 'react'
import {ProductConsumer} from '../contextAPI/context'

class ProductStockForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
               type:"",
               price:"",
               unit:"",
               loose:false  
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,type,value,checked} = event.target
        type === "checkbox"
        ?
        this.setState({
          [name]  : checked
        })
        :
        this.setState({
          [name]  : value
        })
    }

    clearState=()=>{
        this.setState({
            type: "",
            price: "",
            unit: "",
            loose: false 
        })
    }

    render() {
        return (
            <tr>
                <td>
                    <input type="text" placeholder="Type e.g. 1,2..." name="type" value={this.state.type} onChange={this.handleChange} />
                </td>
                <td>
                    <input type="text" placeholder="Price e.g. 300,200" name="price" value={this.state.price} onChange={this.handleChange}/>
                </td>
                <td>
                    <input type="text" placeholder="unit e.g.kg, gram, litre " name="unit" value={this.state.unit} onChange={this.handleChange} />
                </td>
                <td>
                    <select name="loose" id="" value={this.state.loose} onChange={this.handleChange} >
                        <option value="true">Loose</option>
                        <option value="false">Packet</option>
                    </select>
                </td>

                <td>
                    <ProductConsumer>
                        {(value)=>{
                            return(
                                <button className="btn btn-primary"
                                    onClick={()=>{
                                        const inventory = {
                                            type:this.state.type,
                                            price:this.state.price,
                                            unit:this.state.unit,
                                            loose:this.state.loose,
                                            product:this.props.productID
                                        }
                                        console.log(inventory)
                                        value.postInventory(inventory)
                                        this.clearState()
                                    }}
                                    >
                                    <svg fill="white"  width="14" height="14" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                                </button>
                            )
                        }}
                    </ProductConsumer>
                    
                </td>
                <td>
                            
                </td>
            </tr>
        )
    }
}

export default ProductStockForm
