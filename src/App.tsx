import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/redux-store';

import Continents from './components/Continents';
import Sidebar from './components/Sidebar';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='App'> Countries App</div>

      <Sidebar />
      <Continents />
    </Provider>
  );
};

export default App;
