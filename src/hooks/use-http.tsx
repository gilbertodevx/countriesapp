import { useCallback, useState } from 'react';
import ICountryObj from '../models/ICountryObj';

const { REACT_APP_RESTCOUNTRIES_BASE_URL: restcountriesUrl } = process.env;

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (
      requestConfig: {},
      applyData: (p: Array<ICountryObj>) => void
    ): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${restcountriesUrl}/all`, requestConfig);
        const data = (await response.json()) as Array<ICountryObj>;
        console.log(data);
        if (!response.ok) {
          throw new Error('Request failed!');
        }

        applyData(data);
      } catch (err: any) {
        setIsLoading(false);
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading: isLoading, error: error, sendRequest };
};

export default useHttp;
