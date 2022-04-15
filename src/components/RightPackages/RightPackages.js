import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTypography, MDBCardImage } from 'mdb-react-ui-kit';
import { MdAccountCircle } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const RightPackages = () => {
    return (
        <div className='row'>
            <div className='col-md-4 mt-3 mb-1 '>
                <MDBCard background='white' >
                    <MDBCardHeader>
                        <div className='row '>
                            <div className='col-md-12 justify-content-center'>
                                <h4 style={{ textAlign:"center" }} >Standart</h4>
                                <p style={{ textAlign:"center" }}> Elan sayi 1 eded</p>
                                <p style={{ textAlign:"center" }}>Sosial sebekelerde reklam </p>
                                <p style={{ textAlign:"center" }}>sirkete ozel sehfe yaradilmasi </p>
                                <p style={{ textAlign:"center" }}> E-pocta ve telefona baxis statistikasinin gonderilmesi </p>
                            </div>
                        </div>

                    </MDBCardHeader>

                    <MDBCardBody>
                        <MDBTypography blockquote className='mb-0'>
                            <footer className='blockquote-footer'>
                                15 AZN <cite title='Source Title' style={{ cursor: "pointer", float: "right" }}> <button className='btn btn-primary'> Paket AL </button>  </cite>
                            </footer>
                        </MDBTypography>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-md-4 mt-3 mb-1 '>
                <MDBCard background='white' >
                    <MDBCardHeader>
                        <div className='row '>
                            <div className='col-md-12 justify-content-center'>
                                <h4 style={{ textAlign:"center" }}>Biznes</h4>
                                <p style={{ textAlign:"center" }}> Elan sayi 3 eded</p>
                                <p style={{ textAlign:"center" }}>Sosial sebekelerde reklam </p>
                                <p style={{ textAlign:"center" }}>sirkete ozel sehfe yaradilmasi </p>
                                <p style={{ textAlign:"center" }}> E-pocta ve telefona baxis statistikasinin gonderilmesi </p>
                            </div>
                        </div>

                    </MDBCardHeader>

                    <MDBCardBody>
                        <MDBTypography blockquote className='mb-0'>
                            <footer className='blockquote-footer'>
                                35 AZN <cite title='Source Title' style={{ cursor: "pointer", float: "right" }}> <button className='btn btn-primary'> Paket AL </button>  </cite>
                            </footer>
                        </MDBTypography>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='col-md-4 mt-3 mb-1 '>
                <MDBCard background='white' >
                    <MDBCardHeader>
                        <div className='row '>
                            <div className='col-md-12 justify-content-center'>
                                <h4 style={{ textAlign:"center" }}>Premium</h4>
                                <p style={{ textAlign:"center" }}> Elan sayi 10 eded</p>
                                <p style={{ textAlign:"center" }}>Sosial sebekelerde reklam </p>
                                <p style={{ textAlign:"center" }}>sirkete ozel sehfe yaradilmasi </p>
                                <p style={{ textAlign:"center" }}> E-pocta ve telefona baxis statistikasinin gonderilmesi </p>
                            </div>
                        </div>

                    </MDBCardHeader>

                    <MDBCardBody>
                        <MDBTypography blockquote className='mb-0'>
                            <footer className='blockquote-footer'>
                                100 AZN <cite title='Source Title' style={{ cursor: "pointer", float: "right" }}> <button className='btn btn-primary'> Paket AL </button>  </cite>
                            </footer>
                        </MDBTypography>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    );
};

export default RightPackages;