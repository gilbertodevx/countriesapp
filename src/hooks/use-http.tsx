import { useCallback, useState } from 'react';

const { REACT_APP_RESTCOUNTRIES_BASE_URL: restcountriesUrl } = process.env;

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig: {}, applyData: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${restcountriesUrl}/all`, requestConfig);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      applyData(data);
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return { isLoading: isLoading, error: error, sendRequest };
};

export default useHttp;
