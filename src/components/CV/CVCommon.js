import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Search from '../Search/Search';
import OperatingMode from '../OperatingMode/OperatingMode';
import VacancyCategory from '../VacancyCategory/VacancyCategory';
import PremiumCV from '../Premium/PremiumCV';
import CommonCV from '../CommonCV/CommonCV';

const CVCommon= () => {
    return (
        <div className='container mt-3 mb-3 mt-sm-5'>
            {/* <Search /> */}
            <div className="ui grid">
                <div className="col-md-4 p-0 mt-3 col-sm-5 four wide column">
                    <OperatingMode />
                </div>
                <div className="col-md-8 col-sm-7 twelve wide stretched column">
                    <VacancyCategory />
                </div>
            </div>
            <PremiumCV/>
            <CommonCV/>
        </div>
    );
};

export default CVCommon;