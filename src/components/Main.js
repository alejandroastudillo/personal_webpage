import React, { useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Home from './Content/Home';
import Publications from './Content/Publications';
import Education from './Content/Education';
import Research from './Content/Research';

const Main = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };



    return (
        <div className={`app ${toggled ? 'toggled' : ''}`}>
            <Sidebar 
                image={image}
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />

            <Switch>
                <Route exact path={process.env.PUBLIC_URL + "/"} component={() => 
                    <Home 
                        image={image}
                        toggled={toggled}
                        collapsed={collapsed}
                        handleToggleSidebar={handleToggleSidebar}
                        handleCollapsedChange={handleCollapsedChange}
                        handleImageChange={handleImageChange}
                    />} 
                />
                <Route exact path={process.env.PUBLIC_URL + "/education"} component={() => 
                    <Education 
                        image={image}
                        toggled={toggled}
                        collapsed={collapsed}
                        handleToggleSidebar={handleToggleSidebar}
                        handleCollapsedChange={handleCollapsedChange}
                        handleImageChange={handleImageChange}
                    />} 
                />
                <Route exact path={process.env.PUBLIC_URL + "/research"} component={() => 
                    <Research 
                        image={image}
                        toggled={toggled}
                        collapsed={collapsed}
                        handleToggleSidebar={handleToggleSidebar}
                        handleCollapsedChange={handleCollapsedChange}
                        handleImageChange={handleImageChange}
                    />} 
                />
                <Route exact path={process.env.PUBLIC_URL + "/allpublications"} component={() => 
                    <Publications 
                        image={image}
                        toggled={toggled}
                        collapsed={collapsed}
                        handleToggleSidebar={handleToggleSidebar}
                        handleCollapsedChange={handleCollapsedChange}
                        handleImageChange={handleImageChange}
                    />} 
                />
                <Redirect to={process.env.PUBLIC_URL + "/"} />
            </Switch>
        </div>
    )
}

export default Main;