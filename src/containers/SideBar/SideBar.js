import React from 'react';
import { SideBarItem } from './SideBarItem/SideBarItem';
import Profile from './Profile';
import SocialIcons from './SocialIcons';
import { Menu, Divider } from 'semantic-ui-react';
import './SideBar.scss';

// https://medium.com/@productioncoder/build-youtube-in-react-part-04-building-a-sticky-side-bar-e1a044a00816
// https://github.com/productioncoder/youtube-react


// icons: https://jpswalsh.github.io/academicons/

export class SideBar extends React.Component {
    render() {
        return (
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
                <Profile />

                <Divider />

                <SideBarItem highlight={true} label='About Me' icon='home' href='#'/>
                <SideBarItem label='Education' icon='fire' href='#'/>
                <SideBarItem label='Research' icon='spy' href='#'/>
                <SideBarItem label='Publications' icon='history' href='#'/>
                <SideBarItem label='Contact' icon='comment' href='#'/>
                
                {/* <Divider /> */}
                
                <SocialIcons />
                
            </Menu>
        );
    }
}