import { Card, CardActions, CardContent, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCountriesActions } from '../store/redux-store';
import { ICountryItem } from './Countries';
import CountryDetails from './CountryDetails';

const CountryItem: React.FC<ICountryItem> = ({ country: data }) => {
  const [countryClicked, setCountryClicked] = useState('');
  const [showModal, setShowModal] = useState(false);

  const isFavorite = useSelector((state: any) =>
    state.selectedCountries?.some(
      (el: any) => el.name.common === data.name.common
    )
  );

  const dispatch = useDispatch();

  const showModalDetailsHandler = (country: string): void => {
    setShowModal(true);
    setCountryClicked(country);
  };

  const hideModalDetailsHandler = (): void => {
    setShowModal(false);
    setCountryClicked('');
  };

  return (
    <>
      <Card
        variant='outlined'
        sx={{ minWidth: 275 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CardContent
          style={{
            width: '100%',
            backgroundColor: '#F5F5F5',
            cursor: 'pointer',
          }}
          onClick={() => showModalDetailsHandler(data.name.common)}
        >
          <span>{data.name.common ?? 'a'}</span>
        </CardContent>
        <CardActions disableSpacing>
          {!isFavorite && (
            <IconButton
              aria-label='add to favorites'
              onClick={() => {
                dispatch(
                  selectedCountriesActions.addCountriesChecked({
                    country: data,
                    isChecked: true,
                  })
                );
              }}
            >
              <FavoriteBorderIcon style={{ cursor: 'pointer' }} />
            </IconButton>
          )}
          {isFavorite && (
            <IconButton
              aria-label='remove from favorites'
              onClick={() => {
                dispatch(
                  selectedCountriesActions.removeCountriesChecked({
                    country: data,
                    isChecked: false,
                  })
                );
              }}
            >
              <FavoriteIcon style={{ cursor: 'pointer', fill: 'red' }} />
            </IconButton>
          )}
        </CardActions>
      </Card>
      {countryClicked && showModal && (
        <CountryDetails country={data} onClose={hideModalDetailsHandler} />
      )}
    </>
  );
};
export default CountryItem;
