import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const Container = styled.div`
     /* background-color: ${({theme}) => theme.secondary}; */
     position: fixed;
     left: 0;
     top: 0;
     bottom: 0;
     width: 16rem;
     display: flex;
     flex-direction: column;
     align-items: center;
`

const MenuContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
`
const MenuItemContainer = styled.div`
    /* border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparent"}; */
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`
const Span = styled.span`
    /* color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"}; */
    /* color: ${props => !props.active && props.theme.textColor}; */
    font-size: 1rem;
    margin-right: 1rem;
`
const Title = styled.h1`
    font-size: 0.9rem;
    font-weight: 300;
    /* color: ${props => props.active ? props.theme.activeMenu : "#6699A5"}; */
`

const Sidebar = (props) => {
    return(       
        <Container>
            <Profile />
            
            <MenuContainer>
                <MenuItemContainer>
                    <Title>Home</Title>
                </MenuItemContainer>
            </MenuContainer>
        </Container>
        
    );
};
// const Sidebar = withRouter(Side);
export default Sidebar