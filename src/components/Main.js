import React from 'react';
import Content from './Content';
import {SideBar} from '../containers/SideBar/SideBar';


const Main = () => {
    return (
        <React.Fragment>
            <SideBar />
            <Content />
        </React.Fragment>
    )
}

export default Main;