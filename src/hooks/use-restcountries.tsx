import { useEffect } from 'react';
import useHttp from './use-http';

const useRestCountries = (data: any, setData: any) => {
  const { isLoading, error, sendRequest: fetchRestCountries } = useHttp();

  useEffect(() => {
    fetchRestCountries({ method: 'GET' }, (dataObj: any) => {
      const loadRestCountries = [];

      for (const rC in dataObj) {
        loadRestCountries.push(dataObj[rC]);
      }

      setData(loadRestCountries);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, error, data };
};

export default useRestCountries;
