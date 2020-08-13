import React, { Component } from 'react'
import ProductStockForm from './ProductStockForm'

class ProductCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addStockForm:false     
        }
    }

    render() {
        return (
                <>
                <div className="card-1">
                    <div className="row alert">
                        <div className="col-12 ">
                            <table className="table tabel-responsive">
                                <tbody>
                                    <tr className="alert-success">

                                        <td>
                                            <svg width="24" height="24" fill="grey" ><path d="M11.499 12.03v11.971l-10.5-5.603v-11.835l10.5 5.467zm11.501 6.368l-10.501 5.602v-11.968l10.501-5.404v11.77zm-16.889-15.186l10.609 5.524-4.719 2.428-10.473-5.453 4.583-2.499zm16.362 2.563l-4.664 2.4-10.641-5.54 4.831-2.635 10.474 5.775z" /></svg>
                                            &nbsp;   </td>


                                        <td>
                                            <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z" /></svg>
                                            &nbsp;  </td>
                                    

                                        <td>
                                        <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M13.473 7.196c-.425-.439-.401-1.127.035-1.552l4.461-4.326c.218-.211.498-.318.775-.318.282 0 .563.11.776.331l-6.047 5.865zm-7.334 11.021c-.092.089-.139.208-.139.327 0 .25.203.456.455.456.115 0 .229-.042.318-.128l.748-.729-.633-.654-.749.728zm8.212-6.482l-2.57 2.481c-.824.799-1.607 1.328-2.705 1.79.496-1.084 1.05-1.852 1.873-2.65l2.569-2.479-1.049-1.083-2.564 2.485c-1.378 1.336-2.08 2.63-2.73 4.437l1.133 1.169c1.824-.593 3.14-1.255 4.518-2.591l2.563-2.486-1.038-1.073zm7.878-7.243l-5.527 5.359-1.239-1.279 5.529-5.361c.824-.803 2.087.456 1.237 1.281zm-.643-3.036c-.572 0-1.156.209-1.64.678l-6.604 6.405 3.326 3.434 6.604-6.403c.485-.47.728-1.094.728-1.719 0-1.426-1.181-2.395-2.414-2.395zm-3.586 12.01v7.534h-16v-12h8.013l2.058-2h-12.071v16h20v-11.473l-2 1.939z"/></svg>
                                            &nbsp;  </td>

                                        
                                        

                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold h5" > {this.props.product.name}  </td>
                                        <td>{this.props.product.category}</td>
                                        <td>{this.props.product.description}</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>    
                    <div className="alert ">
                        {/* inventory */}
                        <table className="table">
                            <tbody>
                                {(this.props.product.product_inventories.length!==0)?
                                    <tr className="alert-secondary font-weight-bold" >
                                        <td>
                                            Type
                                        </td>
                                        <td>
                                            Price
                                        </td>
                                        <td>
                                            Unit
                                        </td>
                                        <td>
                                            Packing
                                        </td>
                                        <td>
                                            Action
                                        </td>
                                    </tr>
                                :
                                    <tr>
                                        <td>
                                        <svg fill="red" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                                        &nbsp; &nbsp;
                                        <span className="h5 text-danger">Out of stock</span>
                                        </td>
                                    </tr>
                                
                                }
                                
                               
                                    {this.props.product.product_inventories.map((inventory)=>{
                                            return (
                                                <tr key={inventory.id}>
                                                    <td>{inventory.type}</td>
                                                    <td>₹{inventory.price}</td>
                                                    <td>{inventory.unit}</td>
                                                    <td>{(inventory.loose)?"Loose":"Packet"}</td>
                                                    {/* delete button */}
                                                    <td>
                                                        <button className="btn btn-light"
                                                        onClick={()=>{
                                                            this.props.deleteInventory(inventory.id)
                                                        }}
                                                        >
                                                        <svg fill="red" width="18" height="18" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                    })}

                                    {/* show or hide input form */}
                                    {(this.state.addStockForm)?
                                        <ProductStockForm key={this.props.product.id} productID={this.props.product.id}/>
                                    :
                                        ""
                                    }

                                    {/* change color of button "add stock in" */}
                                    {/* ===================================== */}
                                    <tr>
                                        <td>
                                    {(!this.state.addStockForm)?

                                        <button
                                            className="btn-now rounded-1  bg-primary-1 text-white"
                                            onClick={()=>{
                                                
                                                this.setState({addStockForm:true})
                                            }}
                                            >
                                            <svg fill="white" width="15" height="15" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                                            &nbsp;
                                            Stock IN
                                        </button>
                                    
                                    :
                                        <button
                                            className="btn-now rounded-1  bg-secondary text-white"
                                            onClick={()=>{
                                            
                                                this.setState({addStockForm:false})
                                            }}
                                            >
                                            <svg fill="white" width="14" height="14" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                            &nbsp;
                                            Cancel
                                        </button>
                                    
                                    }
                                        

                                        </td>
                                    </tr>
                                    
                                    
                                
                               
                            </tbody>
                        </table>
                    </div>
                    <div className="space-20"></div>
                </div>
                <div className="space-20"></div>
                </>
        )
    }
}

export default ProductCard
