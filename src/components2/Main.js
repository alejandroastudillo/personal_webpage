import React from 'react';
import Content from './Content';
import {SideBar} from '../containers2/SideBar/SideBar';
import { Grid } from 'semantic-ui-react';

const Main2 = () => {
    return (
        <React.Fragment>
            <SideBar />
            <Content />
        </React.Fragment>
        //<Grid>
        //     <Grid.Column mobile={16} tablet={4} computer={4}>
        //         <SideBar /> 
        //     </Grid.Column>
        //     <Grid.Column mobile={16} tablet={12} computer={12}>
        //         <Content />
        //     </Grid.Column>
        // </Grid>
    )
}

export default Main2;