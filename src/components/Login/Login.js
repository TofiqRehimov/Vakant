import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { Confirm } from 'react-st-modal';
import Register from '../Register/Register';
import FogetPassword from '../fogetPassword/FogetPassword';
import "./Login.scss";


const Login = () => {
    
     const registerHandler =()=>{
        
            const result =  Confirm(<Register/>,
                'Qeydiiyatdan kecin');

            if (result) {
                // Сonfirmation confirmed
            } else {
                // Сonfirmation not confirmed
              
        }
     }

     const fogetPasswordHandler =()=>{
        
        const result =  Confirm(<FogetPassword/>,
            'SIfreni deyis');

        if (result) {
            // Сonfirmation confirmed
        } else {
            // Сonfirmation not confirmed
          
    }
 }

    return (
        <div>
            <form className="">
            <MDBInput label='Email' id='typeEmail' type='email' size="lg" className='mt-3 mb-3' />
            <MDBInput label='Password' id='typePassword' type='password' size="lg" className='mt-3 mb-3' />
            <button className='btn btn-group-toggle mt-3 mb-3' > Daxil ol </button>
            </form>
            <span className='userInfo' onClick={registerHandler} > Qeydiyyat</span>
            <span className='userInfo' onClick={fogetPasswordHandler} > sifreni unutdun?</span>
        </div>
    );
};

export default Login;