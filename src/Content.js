import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";

import menuItems from './Components/Lists/MenuItems.js';
import projects from './Components/Lists/ProjectList.js';

import Home from './Pages/Home.js';

const Content = () => {
    const location = useLocation();
    return (
      <Switch location={location}>
        {menuItems.map((page, index) => 
          <Route
            key = {index}
            path = {page.path}
            exact = {page.exact}
            children = {page.main}
          />
        )}
        {projects.map((project, index) =>
          <Route
            key = {index}
            path = {project.path}
            exact = {project.exact}
            children = {project.main}
          />
        )}
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    );
};

export default Content;