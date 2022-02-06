import React from 'react'
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import { MoviesProvider } from './context/MoviesContext'
import Header from './components/Header/Header'

import Top from './components/Top/Top'

function App() {
    return (
        <MoviesProvider>
            <Router history={history}>
                <Top/>
                {/* <Header /> */}
                <Routes />
            </Router>
        </MoviesProvider>
    );
}

export default App;
