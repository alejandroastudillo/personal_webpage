import React from 'react';
import Switch from 'react-switch';
import { FaHeart, FaBars, FaHome } from 'react-icons/fa';
import reactLogo from '../../assets/images/logo.svg';


const Research = ({collapsed, image, toggled, handleToggleSidebar, handleCollapsedChange, handleImageChange}) => {

    return (
        <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
            <header>
                <h1>
                    <img width={80} src={reactLogo} alt="react logo" /> Research
                </h1>

                <p>This is a list of all my research</p>

            </header>
            {/* <div className="block ">
                <Switch
                    height={16}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleCollapsedChange}
                    checked={collapsed}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <span> Collapse sidebar </span>
            </div>
            <div className="block">
                <Switch
                    height={16}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleImageChange}
                    checked={image}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <span> Sidebar background image </span>
            </div> */}

            <footer>
                {/* <small>
                © 2020 made with <FaHeart style={{ color: 'red' }} /> by -{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://dev.telemd.com">
                    TeleMD Developers
                </a>
                </small> */}
                <small>
                <Switch
                    height={10}
                    width={24}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleCollapsedChange}
                    checked={collapsed}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <span> Collapse sidebar </span>
                <a>   </a>
                <Switch
                    height={10}
                    width={24}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleImageChange}
                    checked={image}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <span> Sidebar background image </span>
                </small>
                <br />
                {/* <div className="social-bagdes">
                <a href="https://github.com/teleMDdev" target="_blank" rel="noopener noreferrer">
                    <img
                    alt="GitHub followers"
                    src="https://img.shields.io/github/followers/teleMDdev?label=github&style=social"
                    />
                </a>
                <a href="https://twitter.com/astudillovigoya" target="_blank" rel="noopener noreferrer">
                    <img
                    alt="Twitter Follow"
                    src="https://img.shields.io/twitter/follow/astudillovigoya?label=twitter&style=social"
                    />
                </a>
                </div> */}
            </footer>
        </main>
    );

}

export default Research;