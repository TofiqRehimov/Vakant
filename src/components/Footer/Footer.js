import React from 'react';
import  "./Footer.scss";
import { FaFacebookF,FaTwitter,FaGoogle,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted mt-4">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >

                    <div className="me-5 d-none d-lg-block">
                        <span>Sosial sebeke:</span>
                    </div>

                    <div>
                        <a href="" className="me-4 text-reset">
                            <FaFacebookF/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FaTwitter/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FaGoogle/>
                        </a>
                        <a href="" className="me-4 text-reset">
                           <FaInstagram/>
                        </a>
                        <a href="" className="me-4 text-reset">
                           <FaLinkedin/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FaGithub/>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Vakant.az
                                </h6>
                                <p>
                                Saytın rəhbərliyi reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Is elanlari
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Tam stat</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Tecrube proqrami</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Serbest is</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Yarim stat isler</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                   CV-ler
                                </h6>   
                                <p>
                                    <a href="#!" className="text-reset">Tam stat</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Tecrube</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Serbest is</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Yarim stat isler</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center p-4 FooterColor">
                    © 2021:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Vakant.az</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;