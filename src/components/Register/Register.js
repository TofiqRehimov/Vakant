import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import Login from '../Login/Login';
import { Confirm } from 'react-st-modal';
import { Link } from 'react-router-dom';

const Register = () => {


    return (
        <div>
            <form className="">
            <MDBInput label='Ad' id='typeText' type='Text' size="lg" className='mt-3 mb-3' />
            <MDBInput label='Soyad' id='typeText' type='Text' size="lg" className='mt-3 mb-3' />
            <MDBInput label='Email' id='typeEmail' type='email' size="lg" className='mt-3 mb-3' />
            <MDBInput label='Sifre' id='typePassword' type='password' size="lg" className='mt-3 mb-3' />
            <MDBInput label='Sifreni tekrarla' id='typePassword' type='password' size="lg" className='mt-3 mb-3' />
            <button className='btn btn-group-toggle mt-3 mb-3' > Qeydiyyatdan kec </button>
            </form>
            
            {/* <span className='userInfo' >Daxil ol</span> */}
        </div>
    );
};

export default Register;