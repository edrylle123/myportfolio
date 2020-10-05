import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="My Portfolio" scroll>
              <Navigation>
                  <a href="/">Home</a>
                  <a href="resume">Resume</a>
                  {/* <a href="projects">Projects</a> */}
                  <a href="contact">Contacts</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
    </div>  
  );
}

export default App;
