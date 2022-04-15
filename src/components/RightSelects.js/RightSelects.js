import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTypography, MDBCardImage } from 'mdb-react-ui-kit';
import { MdAccountCircle } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const RightSelects = () => {
    return (
        <div>
          <div className='col-md-4 mt-3 mb-1 '>
                                <MDBCard background='white' >
                                    <MDBCardHeader>
                                        <div className='row d-flex'>
                                            <div className='col-md-4 col-sm-3'>
                                                {/* <MdAccountCircle fontSize={50} /> */}
                                                <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid style={{ width: "70px", height: "70px", borderRadius: "100%" }} className="justify-content-center" />
                                            </div>
                                            <div className='col-md-7 col-sm-7'>
                                                <h5>Front-end</h5>
                                                <h6>Tofiq Rehimov</h6>
                                                <span>Tam stat</span>
                                            </div>

                                        </div>

                                    </MDBCardHeader>

                                    <MDBCardBody>
                                        <MDBTypography blockquote className='mb-0'>
                                            {/* <p>Bilikler: React js, redux/toolkit</p> */}
                                            <footer className='blockquote-footer'>
                                                600 AZN <cite title='Source Title' style={{ cursor: "pointer", float: "right" }}>Etrafli</cite>
                                            </footer>
                                        </MDBTypography>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
        </div>
    );
};

export default RightSelects;