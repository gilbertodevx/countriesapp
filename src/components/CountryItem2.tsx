import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectedCountriesActions } from '../store/redux-store';

const CountryItem2 = ({
  data,
  onShowModal,
  action,
  isFavorite,
  onAdd,
}: any) => {
  // const selectedCountries = useSelector(
  //   (state: any) => state.selectedCountries
  //   //   state.selectedCountries?.find(
  //   // 	(el: any) => el.name.common === item.name.common
  //   //   )
  // );

  // const dispatch = useDispatch();

  // const clickHandler = (event: any) => {
  //   event.preventDefault();
  // };

  return (
    <div key={data.key}>
      {console.log('RE RENDER')}
      {/* {countryClicked === '' && !showModal && ( */}
      <span>{data.country.name.common}</span>
      <button
        style={{ cursor: 'pointer' }}
        onClick={() => onShowModal(data.country.name.common)}
      >
        See Details
      </button>
      {!isFavorite(data.country.name.common) && (
        <button
          onClick={
            onAdd

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
            //   action.addCountriesChecked({
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
      {isFavorite(data.country.name.common) && <span>FAV</span>}
      {/* )} */}
      {/* {data.countries.length > 0 && data.countryClicked && data.showModal && (
        <CountryDetails
          name={data.countryClicked}
          onClose={data.hideModalDetailsHandler}
        />
      )} */}
    </div>
  );
};
export default CountryItem2;
