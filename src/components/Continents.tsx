import { Fragment, useState } from 'react';
import useRestCountries from '../hooks/use-restcountries';
import Countries from './Countries';

const Continents = () => {
  const [continents, setContinents] = useState<any>([]);
  const [isContinentClicked, setIsContinentClicked] = useState<any>(false);
  const [continentClicked, setContinentClicked] = useState('');

  const {
    isLoading,
    error,
    data: restCountries,
  } = useRestCountries(continents, setContinents);

  const countriesData = () =>
    restCountries?.filter((item: any) =>
      item.continents[0].includes(continentClicked)
    );

  const continentHandler = (continent: any) => {
    setIsContinentClicked(true);
    setContinentClicked(continent);

    console.log(continent);
  };

  const resetHandler = () => {
    setIsContinentClicked(false);
    setContinentClicked('');
  };

  return (
    <>
      {/* {console.log('RE RENDER')} */}
      {isLoading && <p> LOADING...</p>}
      {error && <p> Something went wrong!</p>}

      {!isLoading &&
        !error &&
        !isContinentClicked &&
        continentClicked === '' &&
        restCountries
          ?.map((item: any) => item.continents[0])
          .filter(
            (value: any, index: any, self: any) => self.indexOf(value) === index
          )
          .map((c: any, index: number) => {
            return (
              <button key={index} onClick={() => continentHandler(c)}>
                {c}
              </button>
            );
          })}

      {isContinentClicked && continentClicked && (
        <Countries
          countriesByContinent={{
            data: countriesData(),
            continent: continentClicked,
            resetHandler,
          }}
        />
      )}
    </>
  );
};
export default Continents;
