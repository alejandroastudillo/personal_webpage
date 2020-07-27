import React from 'react';
import Content from './Content';
import {SideBar} from '../containers/SideBar/SideBar';
import { Grid } from 'semantic-ui-react';

const Main = () => {
    return (
        <React.Fragment>
            <SideBar />
            <Content />
        </React.Fragment>
    )
}

export default Main;