import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/redux-store';

import Continents from './components/Continents';
import Sidebar from './components/Sidebar';

import './App.css';
import { Grid, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Typography
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
        variant='h2'
        component='div'
        gutterBottom
      >
        COUNTRIES APP
      </Typography>

      <Grid
        container
        columns={2}
        spacing={{ xs: 2, md: 2 }}
        rowSpacing={2}
        columnSpacing={{ xs: 12, sm: 2, md: 2 }}
        justifyContent='center'
        alignItems='center'
        alignContent='center'
        p={10}
      >
        <Sidebar />

        <Grid item xs={2} sm={6} md={12}>
          <Continents />
        </Grid>
      </Grid>
    </Provider>
  );
};

export default App;
