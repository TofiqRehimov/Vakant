import React, { useState } from 'react';
import "./Search.scss";
import { FaSearch } from "react-icons/fa";
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn, MDBCheckbox } from 'mdb-react-ui-kit';
const Search = () => {

    const [isOpen, SetOpen] = useState(false)

    const onClickHandler = ()=>{
             SetOpen(!isOpen)
            }
    return (
        <div className='container mt-3 mb-3'>
            <div className="col-md-12 d-flex input-group inputSearch">
                <div id="search-autocomplete" className="form-outline col-md-9   mb-2">
                    <input type="search" id="form1" className="form-control pt-4 pb-4" />
                    <label className="form-label" htmlFor="form1">Search</label>
                </div>
                <div size="lg" className='col-md-1 mt-3'> <button className='btn btn-primary pt-3 pb-3'> <FaSearch /> </button></div>
                <div className='col-md-12 mt-3'> <button className='btn btn-secondary ml-2' onClick={onClickHandler}> Etrafli axtar</button></div>
              
     
                
               
            </div>
            {/* <MDBInput label='Example label' id='form1' type='text' /> */}
            <div className='col-md-12 mt-4 searchDetails'style={isOpen ?{display:"block"} :{display:"none"}}>
                <div className='row'>
                    <div className='col-md-4 mt-2'>
                        <div className="form-group">
                            <label htmlFor="exampleSelect">Elanin novu</label>
                            <select className="form-control" id="exampleSelect">
                                <option>Is axtariram</option>
                                <option>Isci axtariram</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className='col-md-4 mt-2'>
                        <div className="form-group">
                            <label htmlFor="exampleSelect">Kateqoriya</label>
                            <select className="form-control" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-4 mt-2'>
                        <div className="form-group">
                            <label htmlFor="exampleSelect">Tehsil</label>
                            <select className="form-control" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-4 mt-2'>
                        <div className="form-group">
                            <label htmlFor="exampleSelect">Maas</label>
                            <select className="form-control" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-4 mt-2'>
                        <div className="form-group">
                            <label htmlFor="exampleSelect">Is tecrubesi</label>
                            <select className="form-control" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-4 mt-2'>
                        <div className="form-group">
                            <label htmlFor="exampleSelect">Seher</label>
                            <select className="form-control" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-12 mt-3 mb-3'>
                        <div className='row'>
                            <div className='col-md-6 row'>
                                <div className='col-md-3 col-sm-3 pt-1 pb-1 '>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Part-time' />
                                </div>
                                <div className='col-md-3 col-sm-3 pt-1 pb-1 '>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Full-time' />
                                </div>
                                <div className='col-md-3 col-sm-3 pt-1 pb-1 '>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Frilans' />
                                </div>
                                <div className='col-md-3 col-sm-3 pt-1 pb-1 '>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Tecrube' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                             
                                <MDBBtn size='lg' className='me-2 float-end' active>
                                  Sil
                                </MDBBtn>
                                <MDBBtn size='lg' className='me-2 float-end' active>
                                   Netice 234
                                </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/TofiqRehimov/Vakant.git
// git push -u origin main
