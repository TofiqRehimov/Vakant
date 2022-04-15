import React from 'react';
import Announcement from '../Announcement/Announcement';
import Cv from '../CV/Cv';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import UserProfil from '../UserProfil/UserProfil';

const User = () => {
    return (

        <div className='container mt-3 mb-3 mt-sm-5'>
            <div className='row'>
                <div className="ui grid">
                    <ProfileMenu/>
                    <div className="col-md-8 col-sm-7 twelve wide stretched column">
                        <div className="ui segment">
                       <UserProfil/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default User;