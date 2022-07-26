import { Fragment, useReducer } from 'react';
import useRestCountries from '../hooks/use-restcountries';
import ICountryObj from '../models/ICountryObj';
import Countries from './Countries';
import {
  Backdrop,
  Card,
  CardContent,
  CircularProgress,
  Grid,
} from '@mui/material';

export interface IContinentsState {
  continents: Array<ICountryObj>;
  isContinentClicked?: boolean;
  continentClicked: string | null;
  resetHandler?: () => void;
}

enum ActionType {
  ITEM_CLICKED = 'ITEM_CLICKED',
  ITEM_RESET = 'ITEM_RESET',
  ADD_CONTINENTS = 'ADD_CONTINENTS',
}

type Action =
  | { type: ActionType.ITEM_CLICKED; payload: Required<string> }
  | { type: ActionType.ITEM_RESET }
  | { type: ActionType.ADD_CONTINENTS; payload: Required<Array<ICountryObj>> };

const INITIAL_STATE: IContinentsState = {
  continents: [],
  isContinentClicked: false,
  continentClicked: null,
};

const reducer = (state: IContinentsState, action: Action) => {
  switch (action.type) {
    case ActionType.ITEM_CLICKED:
      return {
        ...state,
        isContinentClicked: true,
        continentClicked: action.payload,
      };

    case ActionType.ITEM_RESET:
      return {
        ...state,
        isContinentClicked: false,
        continentClicked: null,
      };

    case ActionType.ADD_CONTINENTS:
      return { ...state, continents: action.payload };

    default:
      return INITIAL_STATE;
  }
};

const Continents: React.FC<ICountryObj> = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const {
    isLoading,
    error,
    data: restCountries,
  } = useRestCountries(state.continents, (data: Array<ICountryObj>) =>
    dispatch({ type: ActionType.ADD_CONTINENTS, payload: data })
  );

  const countriesData = (): Array<ICountryObj> =>
    restCountries?.filter((item: any) =>
      item.continents[0].includes(state.continentClicked)
    );

  const continentHandler = (continent: any) => {
    dispatch({ type: ActionType.ITEM_CLICKED, payload: continent });
  };

  const resetHandler = (): void => {
    dispatch({ type: ActionType.ITEM_RESET });
  };

  return (
    <>
      {isLoading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
      {error && <p> Something went wrong!</p>}

      {!isLoading &&
        !error &&
        !state.isContinentClicked &&
        state.continentClicked === null && (
          <Grid
            container
            columns={8}
            spacing={{ xs: 4, md: 4 }}
            rowSpacing={2}
            columnSpacing={{ xs: 12, sm: 2, md: 2 }}
            justifyContent='center'
            alignItems='flex-start'
            p={12}
          >
            {restCountries
              ?.map((item: any) => item.continents[0])
              .filter(
                (value: any, index: any, self: any) =>
                  self.indexOf(value) === index
              )
              .map((c: any, index: number) => {
                return (
                  <Grid key={index} item xs={12} sm={6} md={2}>
                    <Card
                      sx={{ minWidth: 100 }}
                      style={{
                        width: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        textAlign: 'center',
                      }}
                      onClick={() => continentHandler(c)}
                    >
                      <CardContent>{c}</CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        )}

      {state.isContinentClicked && state.continentClicked && (
        <Countries
          continents={countriesData()}
          continentClicked={state.continentClicked}
          resetHandler={resetHandler}
        />
      )}
    </>
  );
};
export default Continents;
