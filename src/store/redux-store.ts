// import { createStore } from 'redux';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  selectedCountries: [],
  // selectedCountries: [{ country: null, isChecked: false }],
  // isChecked: false,
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

      // const isFilter = state.selectedCountries?.map(
      //   (item: any) =>
      //     // item.country.includes(action.payload.nameCheckbox)
      //     item
      // );
      if (!existsCountryInFavorite && action.payload.isChecked) {
        state.selectedCountries.push(action.payload.country);
        // return {
        //   ...state,
        //   selectedCountries: [...state.selectedCountries],
        //   // isChecked: action.payload.isChecked,
        // };
      }
      // return state;
    },
    removeCountriesChecked(state, action) {
      // FILTER
      const isFilter = state.selectedCountries?.filter(
        (country: any) =>
          country.name.common !== action.payload.country.name.common
      );

      state.selectedCountries = [...isFilter];

      //   console.log(isFilter);
      console.log(
        'REMOVE - isChecked:' + action.payload.isChecked + ' FALSE - '
      );

      // return {
      //   ...state,
      //   selectedCountries: [...isFilter],
      // };
    },
  },
});

// const reducer = (state: any = INITIAL_STATE, action: any) => {
//   if (action.type === 'ADD_COUNTRIES_CHECKED') {
//     // console.log(state);
//     // return {
//     //   ...state,
//     //   selectedCountries: [...state.selectedCountries, { ...action.payload }],
//     // };
//     console.log(
//       'ADD - isChecked:' +
//         action.payload.isChecked +
//         ' - ' +
//         action.payload.country.name.common
//     );

//     const existsCountryInFavorite = state.selectedCountries?.some(
//       (item: any) => item.name.common === action.payload.country.name.common
//     );

//     // const isFilter = state.selectedCountries?.map(
//     //   (item: any) =>
//     //     // item.country.includes(action.payload.nameCheckbox)
//     //     item
//     // );
//     if (!existsCountryInFavorite && action.payload.isChecked) {
//       state.selectedCountries.push(action.payload.country);
//       return {
//         ...state,
//         selectedCountries: [...state.selectedCountries],
//         // isChecked: action.payload.isChecked,
//       };
//     }

//     return state;
//   }

//   if (action.type === 'REMOVE_COUNTRIES_CHECKED') {
//     // FILTER
//     const isFilter = state.selectedCountries?.filter(
//       (country: any) =>
//         country.name.common !== action.payload.country.name.common
//     );
//     //   console.log(isFilter);
//     console.log('REMOVE - isChecked:' + action.payload.isChecked + ' FALSE - ');
//     return {
//       ...state,
//       selectedCountries: [...isFilter],
//     };
//   }
//   return state;
// };
export const selectedCountriesActions = selectedCountriesSlice.actions;

/////////////////////////////////////////////////////////////
// export const store = createStore(reducer);
export const store = configureStore({
  reducer: selectedCountriesSlice.reducer,
});
