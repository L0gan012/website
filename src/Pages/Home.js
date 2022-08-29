import React from 'react';

import FlexShortcutContainer from '../Components/ProjectSection/FlexShortcutContainer.js';
import Shortcut from '../Components/ProjectSection/Shortcut.js';

import projects from '../Components/Lists/ProjectList.js';
import artPieces from '../Components/Lists/ArtPieceList.js';

import '../Styles/WelcomeSection.css';

const Home = () => {
    const parallax = true;
    
    return (
        <React.Fragment>
            {/* Welcome Section */}
            <section className={parallax?'background-image vert parallax':'background-image vert'}>
                <h1 className='welcome-text'>Welcome...</h1>
                <a className='view-projects-btn' href='#shortcut-section'>view projects<i className="fas fa-arrow-down"></i></a>
            </section>
            {/* Project Section */}
            <FlexShortcutContainer title='Projects' cName='solid'>
                {projects.map((project, k) => <Shortcut key={k} title={project.title} path={project.path} caption={project.caption} img={project.iconImg} cName={project.cName} round={true} space='far' size='default'/>)}
            </FlexShortcutContainer>
            {/* Art Section */}
            <FlexShortcutContainer title='Art' cName={parallax?'background-image parallax':'background-image'}>
                {artPieces.map((piece, k) => <Shortcut key={k} title={piece.title} path={piece.path} caption={piece.caption} img={piece.iconImg} cName={piece.cName} round={false} space='close' size={Math.ceil(Math.random()*3)}/>)}
            </FlexShortcutContainer>
        </React.Fragment>
    );
};

export default Home;