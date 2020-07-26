import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import logo from '../logo.svg';

function Home(props) {
    return(
        <div>
            <header >
                <img src={logo} className="App-logo" alt="logo" />
                <p>Alejandro Astudillo - Coming Soon.</p>
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </div>
    )
}

export default Home;