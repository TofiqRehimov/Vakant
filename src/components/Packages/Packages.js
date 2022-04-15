import React from 'react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import RightPackages from '../RightPackages/RightPackages';

const Packages = () => {
    return (
        <div className='container mt-3 mb-3 mt-sm-5'>
            <div className='row'>
                <div className="ui grid">
                    <ProfileMenu/>
                    <div className="col-md-8 col-sm-7 twelve wide stretched column">
                        <div className="ui segment">
                           <RightPackages/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;