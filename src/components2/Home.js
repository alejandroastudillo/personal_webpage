import React from 'react';
import Container from 'react-bootstrap/Container';

import logo from '../logo.svg';

function Home(props) {
    return(
        <div>
            <header >
                <img src={logo} className="App-logo" alt="logo" />
                <p>Alejandro Astudillo - Coming Soon.</p>
            </header>
        </div>
    )
}

export default Home;