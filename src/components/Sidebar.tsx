import { useDispatch, useSelector } from 'react-redux';
import { selectedCountriesActions } from '../store/redux-store';

const Sidebar = () => {
  const selectedCountries = useSelector(
    (state: any) => state.selectedCountries
    //   state.selectedCountries?.find(
    // 	(el: any) => el.name.common === item.name.common
    //   )
  );

  const dispatch = useDispatch();

  const existsCountryInFavorite = (countryName: string) =>
    selectedCountries?.some((item: any) => item.name.common === countryName);

  return (
    <>
      {' '}
      Sidebar
      {selectedCountries.length > 0 && (
        <ul>
          {selectedCountries?.map((item: any, i: number) => {
            return (
              <li key={i}>
                {existsCountryInFavorite(item.name.common) && (
                  <button
                    onClick={() => {
                      console.log(`ADD TO FAV: ${item.name.common}`);

                      // console.log(
                      //   `Exists in favorites? ${existsCountryInFavorite}`
                      // );
                      // if (!existsCountryInFavorite) {
                      dispatch({
                        type: 'REMOVE_COUNTRIES_CHECKED',
                        payload: {
                          country: item,
                          isChecked: true,
                        },
                      });

                      dispatch(
                        selectedCountriesActions.removeCountriesChecked({
                          country: item,
                          isChecked: false,
                        })
                      );
                      // }
                    }}
                  >
                    X
                  </button>
                )}

                <span>{item.name.common}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Sidebar;
