import React from 'react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTypography, MDBCardImage } from 'mdb-react-ui-kit';
import { MdAccountCircle } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";


const ReadyPackages = () => {
    return (
        <div className='container mt-3 mb-3 mt-sm-5'>
            <div className='row'>
                <div className="ui grid">
                    <ProfileMenu />
                    <div className="col-md-8 col-sm-7 twelve wide stretched column">
                        <div className="ui segment">
                            <div className='col-md-4 mt-3 mb-1 '>
                                <MDBCard background='white' >
                                    <MDBCardHeader>
                                        <div className='row '>
                                            <div className='col-md-12 justify-content-center'>
                                                <h4 style={{ textAlign: "center" }} >Standart</h4>
                                                <p style={{ textAlign: "center" }}> Elan sayi 1 eded</p>
                                                <p style={{ textAlign: "center" }}>Sosial sebekelerde reklam </p>
                                                <p style={{ textAlign: "center" }}>sirkete ozel sehfe yaradilmasi </p>
                                                <p style={{ textAlign: "center" }}> E-pocta ve telefona baxis statistikasinin gonderilmesi </p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadyPackages;