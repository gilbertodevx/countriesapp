import { TextField } from '@mui/material';
import { useState } from 'react';

const SearchForm = (props: any) => {
  const [enteredTerm, setEnteredTerm] = useState('');
  const [isValid, setIsValid] = useState(true);

  const searchChangeHandler = (event: any) => {
    if (enteredTerm.trim().length > 0) {
      setIsValid(true);
    } else if (enteredTerm.trim().length === 0) {
      setEnteredTerm('');
    }

    props.onSaveTerm(event.target.value);
  };

  return (
    <div style={{ padding: '10px' }}>
      <TextField
        style={{ backgroundColor: '#F1F1F1' }}
        variant='outlined'
        size='small'
        type='search'
        id='search'
        value={props.value}
        onChange={searchChangeHandler}
        placeholder='Search...'
      />
      {!isValid && <span> Empty field </span>}
    </div>
  );
};

export default SearchForm;
