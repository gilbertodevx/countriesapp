import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCountriesActions } from '../store/redux-store';
import CountryDetails from './CountryDetails';

const CountryItem = ({ data, onModalEvents }: any) => {
  const [countryClicked, setCountryClicked] = useState('');
  const [showModal, setShowModal] = useState(false);

  const selectedCountries = useSelector(
    (state: any) => state.selectedCountries
    //   state.selectedCountries?.find(
    // 	(el: any) => el.name.common === item.name.common
    //   )
  );

  const dispatch = useDispatch();

  // const clickHandler = (event: any) => {
  //   event.preventDefault();
  // };

  const existsCountryInFavorite = (countryName: string) =>
    selectedCountries?.some((item: any) => item.name.common === countryName);

  const showModalDetailsHandler = (country: string) => {
    setShowModal(true);
    setCountryClicked(country);
  };

  const hideModalDetailsHandler = () => {
    setShowModal(false);
    setCountryClicked('');
  };

  return (
    <div key={data.key}>
      {console.log('RE RENDER')}
      {/* {countryClicked === '' && !showModal && ( */}
      <span>{data.country.name.common}</span>
      <button
        style={{ cursor: 'pointer' }}
        onClick={() => showModalDetailsHandler(data.country.name.common)}
      >
        See Details
      </button>
      {!existsCountryInFavorite(data.country.name.common) && (
        <button
          onClick={
            () => {
              dispatch(
                selectedCountriesActions.addCountriesChecked({
                  country: data.country,
                  isChecked: true,
                })
              );
            }

            // (event: any) => {
            // event.preventDefault();
            // console.log(`ADD TO FAV: ${data.country.name.common}`);
            // // console.log(
            // //   `Exists in favorites? ${existsCountryInFavorite}`
            // // );
            // // if (!existsCountryInFavorite) {
            // //INFO
            // // dispatch({
            // //   type: 'ADD_COUNTRIES_CHECKED',
            // //   payload: {
            // //     country,
            // //     isChecked: true,
            // //   },
            // // });
            // dispatch(
            //   selectedCountriesActions.addCountriesChecked({
            //     country: data.country,
            //     isChecked: true,
            //   })
            // );

            // }
            // }
          }
        >
          Add Fav
        </button>
      )}
      {existsCountryInFavorite(data.country.name.common) && <span>FAV</span>}
      {/* )} */}
      {countryClicked && showModal && (
        <CountryDetails
          name={countryClicked}
          onClose={hideModalDetailsHandler}
        />
      )}
    </div>
  );
};
export default CountryItem;
