import React from 'react';
import Advertisements from '../Advertisements/Advertisements';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import RightCv from '../RightCv/RightCv';

const Cv = () => {
    return (

        <div className='container mt-3 mb-3 mt-sm-5'>
            <div className='row'>
                <div className="ui grid">
                    <ProfileMenu/>
                    <div className="col-md-8 col-sm-7 twelve wide stretched column">
                        <div className="ui segment">
                            <RightCv/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cv;