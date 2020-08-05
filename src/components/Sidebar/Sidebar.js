import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
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
import { FaUserAlt, FaGraduationCap, FaUniversity, FaArchive, FaEnvelope } from 'react-icons/fa';
import sidebarBg from '../../assets/images/bg1.jpg';

import './SidebarProfile.scss';
import './Sidebar.scss';


import Image from 'react-bootstrap/Image'
import photo from '../../assets/images/profileimg.jpg';



const Sidebar = ({image, collapsed, toggled, handleToggleSidebar}) => {

    const [aboutUsClick, setAboutUsClick] = useState(true);
    const [educationClick, setEducationClick] = useState(false);
    const [researchClick, setResearchClick] = useState(false);
    const [publicationsClick, setPublicationsClick] = useState(false);
    const [contactClick, setContactClick] = useState(false);

    const handleAboutClick = () => {
        setAboutUsClick(true);
        setEducationClick(false);
        setResearchClick(false);
        setPublicationsClick(false);
        setContactClick(false);

        // If screen is smaller than breakdown (md)
        handleToggleSidebar(false);
    }
    const handleEducationClick = () => {
        setAboutUsClick(false);
        setEducationClick(true);
        setResearchClick(false);
        setPublicationsClick(false);
        setContactClick(false);
        handleToggleSidebar(false);
    }
    const handleResearchClick = () => {
        setAboutUsClick(false);
        setEducationClick(false);
        setResearchClick(true);
        setPublicationsClick(false);
        setContactClick(false);
        handleToggleSidebar(false);
    }
    const handlePublicationsClick = () => {
        setAboutUsClick(false);
        setEducationClick(false);
        setResearchClick(false);
        setPublicationsClick(true);
        setContactClick(false);
        handleToggleSidebar(false);
    }
    const handleContactClick = () => {
        setAboutUsClick(false);
        setEducationClick(false);
        setResearchClick(false);
        setPublicationsClick(false);
        setContactClick(true);
        handleToggleSidebar(false);
        
    }

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

                    <MenuItem icon={<FaUserAlt />} active={aboutUsClick} onClick={handleAboutClick} >
                        About Me
                        <Link to={process.env.PUBLIC_URL + "/"} />
                    </MenuItem>
                
                    <MenuItem icon={<FaGraduationCap />} active={educationClick} onClick={handleEducationClick} > 
                        Education 
                        <Link to={process.env.PUBLIC_URL + "/education"} />
                    </MenuItem>

                    <MenuItem icon={<FaUniversity />} active={researchClick} onClick={handleResearchClick} > 
                        Research 
                        <Link to={process.env.PUBLIC_URL + "/research"} />
                    </MenuItem>

                    <MenuItem icon={<FaArchive />} active={publicationsClick} onClick={handlePublicationsClick} > 
                        Publications 
                        <Link to={process.env.PUBLIC_URL + "/allpublications"} />
                    </MenuItem>

                    <MenuItem icon={<FaEnvelope />} active={contactClick} onClick={handleContactClick} > 
                        Contact 
                        <Link to={process.env.PUBLIC_URL + "/contact"} />
                    </MenuItem>
                </Menu>

            </SidebarContent>

            {/* <SidebarFooter style={{ textAlign: 'center'}}> */}
            <SidebarFooter style={{
                        textAlign: 'center',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
            >

                    {/* <div className="sidebar-btn-wrapper">
                        <a
                            href="https://github.com/alejandroastudillo/"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                           
                            <span> View source </span>

                        </a>
                    </div> */}
                    {/* <div>
                        <a href="https://www.github.com/alejandroastudillo" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i></a>{' '}
                        <a href="https://scholar.google.com/citations?user=9ONkJZAAAAAJ" target="_blank" rel="noopener noreferrer"><i className="ai ai-google-scholar ai-2x"></i></a>{' '}
                        <a href="https://www.researchgate.net/profile/Alejandro_Astudillo_Vigoya" target="_blank" rel="noopener noreferrer"><i className="ai ai-researchgate ai-2x"></i></a>{' '}
                        <a href="https://www.linkedin.com/in/alejandro-astudillo-vigoya/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>{' '}
                        <a href="mailto:alejoastv@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-2x"></i></a>
                    </div> */}
                   <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <div className="text-center"> */}
                                    <a role="button" className="btn btn-social-icon no-border btn-secondary btn-circle btn-circle-sm m-1" href="https://www.github.com/alejandroastudillo"><i className="fa fa-github"></i></a>
                                    <a role="button" className="btn btn-social-icon no-border btn-secondary btn-circle btn-circle-sm m-1" href="https://scholar.google.com/citations?user=9ONkJZAAAAAJ"><i className="ai ai-google-scholar"></i></a>
                                    <a role="button" className="btn btn-social-icon no-border btn-secondary btn-circle btn-circle-sm m-1" href="https://www.researchgate.net/profile/Alejandro_Astudillo_Vigoya"><i className="ai ai-researchgate"></i></a>
                                    <a role="button" className="btn btn-social-icon no-border btn-secondary btn-circle btn-circle-sm m-1" href="https://www.linkedin.com/in/alejandro-astudillo-vigoya/"><i className="fa fa-linkedin"></i></a>                                
                                    {/* <a role="button" className="btn btn-social-icon no-border btn-secondary btn-circle btn-circle-sm m-1" href="mailto:alejoastv@gmail.com"><i className="fa fa-envelope"></i></a>                                      */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    
            </SidebarFooter>

        </ProSidebar>
    );
};

export default Sidebar;

   {/* TODO: Replace icons from fa fa-**** with those from react-icons/fa */}

                                    {/* <span className="fa-stack fa-1x">
                                        <i className="fa fa-circle fa-stack-2x icon-background"></i>
                                        <i className="fa fa-facebook fa-stack-1x"></i>
                                    </span> */}
                                    {/* https://bootstrapious.com/p/bootstrap-circle-button */}