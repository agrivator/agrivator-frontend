import React, { Component } from 'react'

class ViewDataCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: ["", "", "", ""]
        }
    }

    render() {
        return (
            <div>
                {this.state.products.map(() => {
                    return (
                        <div>

                        <div className="card-1">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <table className="table">
                                        <tbody>
                                            <tr>

                                                <td>
                                                <svg width="24" height="24" fill="grey" ><path d="M11.499 12.03v11.971l-10.5-5.603v-11.835l10.5 5.467zm11.501 6.368l-10.501 5.602v-11.968l10.501-5.404v11.77zm-16.889-15.186l10.609 5.524-4.719 2.428-10.473-5.453 4.583-2.499zm16.362 2.563l-4.664 2.4-10.641-5.54 4.831-2.635 10.474 5.775z"/></svg>
                                                  &nbsp;  Product name </td>
                                                <td>Carrot</td>

                                            </tr>
                                            <tr>

                                                <td>
                                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"/></svg>
                                                    &nbsp;  Category</td>
                                                <td>Vegetable</td>

                                            </tr>
                                            <tr>

                                                <td>
                                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M14.078 4.232l-12.64 12.639-1.438 7.129 7.127-1.438 12.641-12.64-5.69-5.69zm-10.369 14.893l-.85-.85 11.141-11.125.849.849-11.14 11.126zm2.008 2.008l-.85-.85 11.141-11.125.85.85-11.141 11.125zm18.283-15.444l-2.816 2.818-5.691-5.691 2.816-2.816 5.691 5.689z"/></svg>
                                                    &nbsp;  Description</td>
                                                <td>Fresh carrot :)</td>

                                            </tr>
                                            <tr>
                                                <td>
                                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M11.28 0h-8.28v8.058l10.271 10.296 8.302-8.07-10.293-10.284zm-2.72 5.559c-.585.585-1.535.585-2.12 0-.586-.584-.586-1.533 0-2.118.585-.585 1.535-.585 2.12 0 .586.584.586 1.533 0 2.118zm12.01 8.407l1.43 1.409-8.688 8.625-10.312-10.317v-2.833l10.349 10.291 7.221-7.175z"/></svg>
                                                    &nbsp; Price</td>
                                                <td>₹ --</td>

                                            </tr>
                                            <tr>

                                                <td>
                                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M0 18.343l5.656 5.657 18.344-18.343-5.657-5.657-18.343 18.343zm21.171-12.686l-15.514 15.514-2.829-2.829 1.04-1.008 2.122 2.122.707-.707-2.122-2.122 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414 1.414 1.414.707-.707-1.414-1.414 1.414-1.414 2.122 2.122.707-.708-2.121-2.122 1.414-1.414 1.414 1.414.707-.707-1.414-1.414 1.414-1.414 1.414 1.414.707-.707-1.414-1.414 1.414-1.415 2.121 2.122.707-.707-2.121-2.122 1.039-1.071 2.829 2.83z"/></svg>
                                                    &nbsp; Size</td>
                                                <td>30</td>

                                            </tr>
                                            <tr>

                                                <td>
                                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M9 2c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6zm12.561 12l-1.2 6h-16.721l-1.2-6h19.121zm2.439-2h-24l2 10h20l2-10zm-1-5v3h-2v-1h-18v1h-2v-3h22z"/></svg>
                                                    &nbsp; Unit</td>
                                                <td>Kg</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-12  col-md-6 text-center">
                                    <img src="img/carrot.png" alt="" class="img-fluid " />
                                </div>
                            </div>
                        </div>
                        <div className="space-20"></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ViewDataCard
