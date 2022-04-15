import React from 'react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import RightSelects from '../RightSelects.js/RightSelects';

const Selects = () => {
    return (
        <div className='container mt-3 mb-3 mt-sm-5'>
            <div className='row'>
                <div className="ui grid">
                    <ProfileMenu/>
                    <div className="col-md-8 col-sm-7 twelve wide stretched column">
                        <div className="ui segment">
                            <RightSelects/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selects;