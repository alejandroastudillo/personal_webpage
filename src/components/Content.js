import React from 'react';
import styled from 'styled-components';
import Home from './Home';

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Content = () => {
    return (
        <Container>
            <Home /> 
        </Container>
    )
}

export default Content