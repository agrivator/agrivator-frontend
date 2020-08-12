import React, { Component } from 'react'
import {ProductConsumer} from '../contextAPI/context'

class ProductForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            category: "fruitsAndVegetables",
            subCategory: "vegetables",
            description: ""
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

    render() {
        return (
            <div>
                <div className="space-20"></div>
                <div className="card-1">
                    <div className="space-20"></div>
                    <div className="form">

                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                <svg width="24" height="24" fill="grey" ><path d="M11.499 12.03v11.971l-10.5-5.603v-11.835l10.5 5.467zm11.501 6.368l-10.501 5.602v-11.968l10.501-5.404v11.77zm-16.889-15.186l10.609 5.524-4.719 2.428-10.473-5.453 4.583-2.499zm16.362 2.563l-4.664 2.4-10.641-5.54 4.831-2.635 10.474 5.775z"/></svg>
                                &nbsp;
                                Product name </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" name="name" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"/></svg>
                                &nbsp;
                                Category </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" name="category" value={this.state.category} onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"/></svg>
                                &nbsp;
                                Subcategory </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" name="subCategory" value={this.state.subCategory} onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M14.078 4.232l-12.64 12.639-1.438 7.129 7.127-1.438 12.641-12.64-5.69-5.69zm-10.369 14.893l-.85-.85 11.141-11.125.849.849-11.14 11.126zm2.008 2.008l-.85-.85 11.141-11.125.85.85-11.141 11.125zm18.283-15.444l-2.816 2.818-5.691-5.691 2.816-2.816 5.691 5.689z"/></svg>
                                &nbsp;
                                Description </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" name="description" value={this.state.description}  onChange={this.handleChange}/>
                            </div>
                        </div>

                        <div className="space-50"></div>
                        <div className="form-group">
                        <ProductConsumer>
                            {(value)=>{
                                return (
                                    
                                    <button className=" btn-now rounded-1  bg-primary-1 text-white"
                                        onClick={()=> {
                                            const product = {
                                                name : this.state.name,
                                                category:this.state.category,
                                                subCategory:this.state.subCategory,
                                                description:this.state.description,
                                                product_inventories:[""],
                                                created_by:"",
                                                updated_by:""
                                            }
                                            console.log(product)
                                            value.postProduct(product)
                                        }}
                                    
                                    >SUBMIT</button>
                                )
                            }}
                        </ProductConsumer>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProductForm
