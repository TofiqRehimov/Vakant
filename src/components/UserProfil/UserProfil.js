import React from 'react';
import { Link } from 'react-router-dom';
const UserProfil = () => {
    return (
        <div>
            <ul className="list-group d-flex row works">
             <div className='col-md-3 mb-2 vacancyTitle'>
             <Link to='/ReadyAds' >
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                  Elanlar
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
               </Link>
              </div>
              <div className='col-md-3 mb-2 vacancyTitle'>
                <Link to="/ReadyCV">
                  
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                  CV - ler
                  <span className="badge bg-primary rounded-pill">2</span>
                </li>
                </Link>
              </div>
              <div className='col-md-3 mb-2 vacancyTitle'>
              <Link to="/ReadySelect">
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                Secilmisler
                  <span className="badge bg-primary rounded-pill">1</span>
                </li>
                </Link>
              </div>
              <div className='col-md-3 mb-2 vacancyTitle'>
              <Link to="/ReadyHolding">
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                Sirket
                  <span className="badge bg-primary rounded-pill">1</span>
                </li>
                </Link>
              </div>
              <div className='col-md-3 mb-2 vacancyTitle'>
              <Link to="/ReadyPackages">
                <li className="list-group-item d-flex  justify-content-between align-items-center">
                Paket
                  <span className="badge bg-primary rounded-pill">1</span>
                </li>
                </Link>
              </div>
            </ul>

        </div>
    );
};

export default UserProfil;