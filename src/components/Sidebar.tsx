import { Card, Grid, Typography } from '@mui/material';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSearch from '../hooks/use-search';
import { selectedCountriesActions } from '../store/redux-store';
import SearchForm from './SearchForm';

const Sidebar = () => {
  const {
    term: search_term_value,
    saveTermHandler,
    resetSaveTerm,
  } = useSearch();

  const selectedCountries = useSelector(
    (state: any) => state.selectedCountries
  );

  const dispatch = useDispatch();

  const existsCountryInFavorite = (countryName: string) =>
    selectedCountries?.some((item: any) => item.name.common === countryName);

  return (
    <>
      {selectedCountries.length > 0 && (
        <Grid item xs={12} sm={6} md={2}>
          <Card variant='outlined' sx={{ bgcolor: '#cfe8fc', height: 'auto' }}>
            <Typography variant='h6' style={{ padding: '10px' }}>
              Favorites
            </Typography>
            <SearchForm
              value={search_term_value}
              onSaveTerm={saveTermHandler}
            />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                flexDirection: 'row',
              }}
            >
              {selectedCountries
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
                ?.map((item: any, i: number) => {
                  return (
                    <div key={i} style={{ padding: '10px' }}>
                      {existsCountryInFavorite(item.name.common) && (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={12}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            alignContent: 'center',
                          }}
                        >
                          {item.name.common}
                          <HeartBrokenIcon
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              console.log(`ADD TO FAV: ${item.name.common}`);

                              dispatch(
                                selectedCountriesActions.removeCountriesChecked(
                                  {
                                    country: item,
                                    isChecked: false,
                                  }
                                )
                              );
                              resetSaveTerm();
                            }}
                          />
                        </Grid>
                      )}
                    </div>
                  );
                })}
            </div>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default Sidebar;
