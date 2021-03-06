import React from 'react';
import { Confirm } from 'react-st-modal';
import Login from '../Login/Login';
import "./Modals.scss";

const Modals = () => {


    return (
        <div>
            <button className='btn btn-primary ml-4'
                onClick={async () => {
                    const result = await Confirm(<Login />,
                        '–°onfirmation title');

                    if (result) {
                        // –°onfirmation confirmed
                    } else {
                        // –°onfirmation not confirmed
                    }
                }}
            >
                Daxil ol
            </button>
        </div>
    );
};

export default Modals;