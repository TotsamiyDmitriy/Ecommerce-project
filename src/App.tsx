import React from 'react';
import './scss/pages/App.scss';
import { Main } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
