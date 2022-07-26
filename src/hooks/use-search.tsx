import { useState } from 'react';

const useSearch = () => {
  const [searchFormTerm, setSearchFormTerm] = useState({ term_value: '' });

  const saveTermHandler = (term_value: string) => {
    setSearchFormTerm((prevTerm: any) => {
      return { ...prevTerm, term_value };
    });
  };

  const resetSaveTerm = (term_value: string = '') => {
    setSearchFormTerm((prevTerm: any) => {
      return { ...prevTerm, term_value: term_value };
    });
  };

  return { term: searchFormTerm.term_value, saveTermHandler, resetSaveTerm };
};

export default useSearch;
