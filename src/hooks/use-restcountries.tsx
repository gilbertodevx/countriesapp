import { useEffect } from 'react';
// import ICountryItem from '../models/ICountryItem';
import ICountryObj from '../models/ICountryObj';

import useHttp from './use-http';

const useRestCountries = (
  data: ICountryObj[],
  setData: (data: ICountryObj[]) => void
) => {
  const { isLoading, error, sendRequest: fetchRestCountries } = useHttp();

  useEffect(() => {
    fetchRestCountries({ method: 'GET' }, (dataObj: ICountryObj[]) => {
      const loadRestCountries: ICountryObj[] = [];

      for (const rC in dataObj) {
        const obj: ICountryObj = dataObj[rC];
        loadRestCountries.push(obj);
      }

      setData(loadRestCountries);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, error, data };
};

export default useRestCountries;
