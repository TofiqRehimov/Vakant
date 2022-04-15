import React from 'react';
import Advertisements from '../Advertisements/Advertisements';
import ReadyAds from '../Advertisements/ReadyAds';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const Announcement = () => {
    return (

        <div className='container mt-3 mb-3 mt-sm-5'>
            <div className='row'>
                <div className="ui grid">
                    <ProfileMenu/>
                    <div className="col-md-8 col-sm-7 twelve wide stretched column">
                        <div className="ui segment">
                            <Advertisements/>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcement;