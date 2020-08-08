import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Daniel Rivera</Link>}>
            <Navigation>
                <Link className="about-nav" to="/aboutme">About Me</Link>
                <Link className="projects-nav" to="/projects">Projects</Link>
                <Link className="resume-nav" to="/resume">Resume</Link>
                <Link className="contact-nav" to="/contact">Contacts</Link>
            </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
</div>
);
}

export default App;
