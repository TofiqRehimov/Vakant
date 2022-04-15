import React from 'react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTypography, MDBCardImage } from 'mdb-react-ui-kit';
import { MdAccountCircle } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const ReadyHolding = () => {
    return (
        <div className='container mt-3 mb-3 mt-sm-5'>
        <div className='row'>
            <div className="ui grid">
                <ProfileMenu/>
                <div className="col-md-8 col-sm-7 twelve wide stretched column">
                    <div className="ui segment">
                    <div className='col-md-4 mt-3 mb-1 '>
                                <MDBCard background='white' >
                                    <MDBCardHeader>
                                        <div className='row d-flex'>
                                            <div className='col-md-4 col-sm-3'>
                                                {/* <MdAccountCircle fontSize={50} /> */}
                                                <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid style={{ width: "70px", height: "70px", borderRadius: "100%" }} className="justify-content-center" />
                                            </div>
                                            <div className='col-md-6 col-sm-7'>
                                                <h5>Premium ajans mmc</h5>
                                                <h6>Reklam sirketi</h6>
                                                <span>Tam stat</span>
                                            </div>
                                            <div className='col-md-1 col-sm-1'>
                                                <RiDeleteBin6Line style={{ cursor: "pointer" }} className='mb-2 tox-cursor-format-painter' fontSize={20} />
                                                <RiEdit2Line style={{ cursor: "pointer" }} className='mb-2 tox-cursor-format-painter' fontSize={20} />
                                            </div>
                                        </div>

                                    </MDBCardHeader>

                                    <MDBCardBody>
                                        <MDBTypography blockquote className='mb-0'>
                                            {/* <p>Bilikler: React js, redux/toolkit</p> */}
                                            <footer className='blockquote-footer'>
                                                <cite title='Source Title' style={{ cursor: "pointer", float: "right" }}>Etrafli</cite>
                                            </footer>
                                        </MDBTypography>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ReadyHolding;