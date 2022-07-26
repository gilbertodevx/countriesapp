import { Grid, Typography } from '@mui/material';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

import React from 'react';
import useSearch from '../hooks/use-search';
import ICountryObj from '../models/ICountryObj';
import { IContinentsState } from './Continents';

import CountryItem from './CountryItem';
import SearchForm from './SearchForm';

export interface ICountryItem {
  key?: number;
  country: ICountryObj;
  onClose?: () => void;
}

const Countries: React.FC<IContinentsState> = ({
  continents,
  continentClicked,
  resetHandler,
}) => {
  const { term: search_term_value, saveTermHandler } = useSearch();

  return (
    <>
      <ArrowCircleLeftRoundedIcon
        style={{ cursor: 'pointer' }}
        fontSize='large'
        onClick={resetHandler}
      />

      <Grid
        container
        direction='column'
        columns={8}
        spacing={{ xs: 4, md: 4 }}
        rowSpacing={2}
        columnSpacing={{ xs: 12, sm: 2, md: 2 }}
        p={2}
      >
        <Grid
          item
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4'> {continentClicked}</Typography>
        </Grid>
        <Grid
          item
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <SearchForm value={search_term_value} onSaveTerm={saveTermHandler} />
        </Grid>
      </Grid>
      <Grid
        container
        columns={8}
        spacing={{ xs: 4, md: 4 }}
        rowSpacing={2}
        columnSpacing={{ xs: 12, sm: 2, md: 2 }}
        justifyContent='flex-start'
        alignItems='center'
        alignContent='center'
      >
        {continents
          .filter((val: any) => {
            if (search_term_value === '') {
              return val;
            } else if (
              val.name.common
                .toLowerCase()
                .includes(search_term_value.toLowerCase())
            ) {
              return val;
            }

            return false;
          })
          .map((country: any, i: number) => {
            return (
              <Grid
                key={i}
                item
                xs={8}
                sm={6}
                md={4}
                justifyContent='center'
                alignItems='center'
                alignContent='center'
              >
                <CountryItem country={country} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Countries;
