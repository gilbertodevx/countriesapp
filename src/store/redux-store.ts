import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  selectedCountries: [],
};

const selectedCountriesSlice = createSlice({
  name: 'selectedCountries',
  initialState: INITIAL_STATE,
  reducers: {
    addCountriesChecked(
      state: any = INITIAL_STATE,
      action: PayloadAction<{ country: any; isChecked: boolean }>
    ) {
      const existsCountryInFavorite = state.selectedCountries?.some(
        (item: any) => item.name.common === action.payload.country.name.common
      );

      if (!existsCountryInFavorite && action.payload.isChecked) {
        state.selectedCountries.push(action.payload.country);
      }
    },
    removeCountriesChecked(state, action) {
      // FILTER
      const isFilter = state.selectedCountries?.filter(
        (country: any) =>
          country.name.common !== action.payload.country.name.common
      );

      state.selectedCountries = [...isFilter];
      console.log(
        'REMOVE - isChecked:' + action.payload.isChecked + ' FALSE - '
      );
    },
  },
});

export const selectedCountriesActions = selectedCountriesSlice.actions;

export const store = configureStore({
  reducer: selectedCountriesSlice.reducer,
});
