import React from 'react';

import CountryItem from './CountryItem';

const Countries = ({ countriesByContinent }: any) => {
  return (
    <>
      {countriesByContinent.data.length > 0 ? (
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

          {countriesByContinent.data?.map((country: any, i: number) => {
            return <CountryItem key={i} data={{ country }} />;
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
