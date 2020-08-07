import React, { Component } from 'react'

class InputForm extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
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
                                <input type="text" className="form-control" id="inputPassword" name="name"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"/></svg>
                                &nbsp;
                                Category </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" name="category" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M14.078 4.232l-12.64 12.639-1.438 7.129 7.127-1.438 12.641-12.64-5.69-5.69zm-10.369 14.893l-.85-.85 11.141-11.125.849.849-11.14 11.126zm2.008 2.008l-.85-.85 11.141-11.125.85.85-11.141 11.125zm18.283-15.444l-2.816 2.818-5.691-5.691 2.816-2.816 5.691 5.689z"/></svg>
                                &nbsp;
                                Description </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" name="description" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M11.28 0h-8.28v8.058l10.271 10.296 8.302-8.07-10.293-10.284zm-2.72 5.559c-.585.585-1.535.585-2.12 0-.586-.584-.586-1.533 0-2.118.585-.585 1.535-.585 2.12 0 .586.584.586 1.533 0 2.118zm12.01 8.407l1.43 1.409-8.688 8.625-10.312-10.317v-2.833l10.349 10.291 7.221-7.175z"/></svg>
                                &nbsp;
                                Price </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" name="price" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                <svg fill="grey" width="24" height="24" viewBox="0 0 24 24"><path d="M0 18.343l5.656 5.657 18.344-18.343-5.657-5.657-18.343 18.343zm21.171-12.686l-15.514 15.514-2.829-2.829 1.04-1.008 2.122 2.122.707-.707-2.122-2.122 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414 1.414 1.414.707-.707-1.414-1.414 1.414-1.414 2.122 2.122.707-.708-2.121-2.122 1.414-1.414 1.414 1.414.707-.707-1.414-1.414 1.414-1.414 1.414 1.414.707-.707-1.414-1.414 1.414-1.415 2.121 2.122.707-.707-2.121-2.122 1.039-1.071 2.829 2.83z"/></svg>
                                &nbsp;
                                Size </label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="inputPassword" name="type" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Unit </label>
                            <div className="col-sm-4">
                                <select className="form-control" >
                                    <option value="">Kilogram</option>
                                    <option value="">Litre</option>
                                    <option value="">Packet</option>
                                    <option value="">Box</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Image </label>
                            <div className="col-sm-4">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" name="unit"/>
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn rounded-1 btn-success bg-primary-1 text-white">SUBMIT</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default InputForm  
