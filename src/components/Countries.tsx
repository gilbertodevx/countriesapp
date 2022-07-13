import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import CountryDetails from './CountryDetails';
import CountryItem from './CountryItem';
// import { selectedCountriesActions } from '../store/redux-store';

const Countries = ({ countriesByContinent }: any) => {
  //   console.log(countriesByContinent.data);
  // const [showCountries, setShowCountries] = useState(false);

  // const selectedCountries = useSelector(
  //   (state: any) => state.selectedCountries
  //   //   state.selectedCountries?.find(
  //   // 	(el: any) => el.name.common === item.name.common
  //   //   )
  // );

  // const existsCountryInFavorite = (countryName: string) =>
  //   selectedCountries?.some((item: any) => item.name.common === countryName);

  // const dispatch = useDispatch();

  return (
    <>
      {console.log('RE RENDER')}
      {countriesByContinent.data.length > 0 ? (
        // && !showModal
        <div>
          <button
            onClick={() => {
              countriesByContinent.resetHandler();
              console.log('GO Continents!');
            }}
          >
            Go back
          </button>
          <h2> {countriesByContinent.continent}</h2>

          {countriesByContinent.data?.map((country: any) => {
            return (
              <CountryItem key={country} data={{ country }} />
              // <div>
              //   <CountryItem
              //     data={{
              //       key: i,
              //       country,
              //       countries: countriesByContinent.data,
              //     }}
              //     onShowModal={showModalDetailsHandler}
              //     action={selectedCountriesActions}
              //     isFavorite={existsCountryInFavorite}
              //     onAdd={() =>
              //       dispatch(
              //         selectedCountriesActions.addCountriesChecked({
              //           country,
              //           isChecked: true,
              //         })
              //       )
              //     }
              //   />
              // </div>
              ///////////////////////////////////////////////////////////
              // <li key={i}>
              //   <span>{country.name.common}</span>
              //   <button
              //     style={{ cursor: 'pointer' }}
              //     onClick={() => showModalDetailsHandler(country.name.common)}
              //   >
              //     See Details
              //   </button>
              //   {!existsCountryInFavorite(country.name.common) && (
              //     <button
              //       onClick={() => {
              //         console.log(`ADD TO FAV: ${country.name.common}`);

              //         // console.log(
              //         //   `Exists in favorites? ${existsCountryInFavorite}`
              //         // );
              //         // if (!existsCountryInFavorite) {
              //         //INFO
              //         // dispatch({
              //         //   type: 'ADD_COUNTRIES_CHECKED',
              //         //   payload: {
              //         //     country,
              //         //     isChecked: true,
              //         //   },
              //         // });
              //         dispatch(
              //           selectedCountriesActions.addCountriesChecked({
              //             country,
              //             isChecked: true,
              //           })
              //         );

              //         // }
              //       }}
              //     >
              //       Add Fav
              //     </button>
              //   )}
              //   {
              //     existsCountryInFavorite(country.name.common) && (
              //       <span>FAV</span>
              //     )
              //     // (
              //     //   <button
              //     //     onClick={() => {
              //     //       console.log(`ADD TO FAV: ${country.name.common}`);

              //     //       // console.log(
              //     //       //   `Exists in favorites? ${existsCountryInFavorite}`
              //     //       // );
              //     //       // if (!existsCountryInFavorite) {
              //     //       dispatch({
              //     //         type: 'REMOVE_COUNTRIES_CHECKED',
              //     //         payload: {
              //     //           country,
              //     //           isChecked: true,
              //     //         },
              //     //       });
              //     //       // }
              //     //     }}
              //     //   >
              //     //     Remove Fav
              //     //   </button>
              //     // )
              //   }
              // </li>
            );
          })}
        </div>
      ) : (
        <p> Nothing to show!</p>
      )}

      {/* {showModal && (
        <CountryDetails
          name={countryClicked}
          onClose={hideModalDetailsHandler}
        />
      )} */}
    </>
  );
};

export default Countries;
