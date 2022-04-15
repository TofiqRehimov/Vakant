import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
const FogetPassword = () => {
    return (
        <div>
            <form className="">
          
            <MDBInput label='Email' id='typeEmail' type='email' size="lg" className='mt-3 mb-3' />
            <button className='btn btn-group-toggle mt-3 mb-3' > Sifreni deyis </button>
            </form>
        </div>
    );
};

export default FogetPassword;