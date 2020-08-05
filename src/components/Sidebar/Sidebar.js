import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaUserAlt, FaGraduationCap, FaUniversity, FaArchive, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/images/bg1.jpg';

import './SidebarProfile.scss';
import './Sidebar.scss';


import Image from 'react-bootstrap/Image'
import photo from '../../assets/images/profileimg.jpg';



const Sidebar = ({image, collapsed, toggled, handleToggleSidebar}) => {

    return (
        <ProSidebar
            image={image ? sidebarBg : false}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            {/* <SidebarHeader>
                <div
                    style={{
                        padding: '0 24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    
                    TeleMD
                </div>
                
            </SidebarHeader> */}
            <div className="profile-container">
                <Image src={photo} roundedCircle />

                <div className="profile-data">
                    <p className="profile-name">
                        Alejandro Astudillo V.
                    </p>
                    <p className="profile-position">
                        Ph.D. Researcher
                    </p>
                    <p className="profile-workplace">
                        MECO Research Team, KU Leuven <br/>
                        DMMS-M Core Lab, Flanders Make
                    </p>
                    
                </div>   
            </div>

            <SidebarContent>

                <Menu iconShape="circle">

                    <MenuItem icon={<FaUserAlt />}>
                        About Me
                        <Link to={process.env.PUBLIC_URL + "/"} />
                    </MenuItem>
                
                    <MenuItem icon={<FaGraduationCap />}> 
                        Education 
                        <Link to={process.env.PUBLIC_URL + "/education"} />
                    </MenuItem>

                    <MenuItem icon={<FaUniversity />}> 
                        Research 
                        <Link to={process.env.PUBLIC_URL + "/research"} />
                    </MenuItem>

                    <MenuItem icon={<FaArchive />}> 
                        Publications 
                        <Link to={process.env.PUBLIC_URL + "/allpublications"} />
                    </MenuItem>
                </Menu>


            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center'}}>
                    <div className="sidebar-btn-wrapper">
                        <a
                            href="https://github.com/alejandroastudillo/"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                           
                            <span> View source </span>

                        </a>
                        {/* <a href="https://www.github.com/alejandroastudillo" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i></a>
                        <a href="https://scholar.google.com/citations?user=9ONkJZAAAAAJ" target="_blank" rel="noopener noreferrer"><i className="ai ai-google-scholar ai-2x"></i></a>
                        <a href="https://www.researchgate.net/profile/Alejandro_Astudillo_Vigoya" target="_blank" rel="noopener noreferrer"><i className="ai ai-researchgate ai-2x"></i></a>
                        <a href="https://www.linkedin.com/in/alejandro-astudillo-vigoya/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>
                        <a href="mailto:alejoastv@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-2x"></i></a> */}
                    </div>
            </SidebarFooter>

        </ProSidebar>
    );
};

export default Sidebar;