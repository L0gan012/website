import React from 'react';

import Header from './Components/Navigation/Header.js';
import SocialFooter from './Components/Navigation/SocialFooter.js';
import Content from './Content.js';

import './Styles/Global.css';

const App = () => {
  return(
    <React.Fragment>
      <Header title='Logan Sauer'/>
      <Content />
      <SocialFooter />
    </React.Fragment>
  );
};

export default App;
