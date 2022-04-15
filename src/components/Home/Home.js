import React, { useEffect } from 'react';
import Cards from '../Cards/Cards';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Search from '../Search/Search';
import OperatingMode from '../OperatingMode/OperatingMode';
import VacancyCategory from '../VacancyCategory/VacancyCategory';
import "./home.scss"
import CommonVacancies from '../CommonVacancies/CommonVacancies';
import PremiumVacancies from '../Premium/PremiumVacancies';
import MovieAPI from '../../Common/Apis/MovieAPI';
import { APIKey } from '../../Common/Apis/MovieAPIKeys';
import {useDispatch} from "react-redux";
import {addMovies} from "../../Redux/MovieSlce/MovieSlice"
const Home = () => {
  
  const MovieText = "Harry";
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchMoives = async () => {
      const response = await MovieAPI.get(`?apiKey=${APIKey}&s=${MovieText}&type=movie`)
        .catch((err) => {
          console.log("Error: ", err);
        });
      dispatch(addMovies(response.data))
    };
    fetchMoives()
  }, []);

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
      <PremiumVacancies />
      <CommonVacancies />
    </div>
  );
};

export default Home;