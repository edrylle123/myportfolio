import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src='./Images/avatar.png' 
              alt="avatar"
              className="avatar-img"
              style={{borderRadius: 400/ 2}} 
              
              />

            <div className="banner-text">
              <h1>Edrylle Jann T. Ramos</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Ruby on Rails | Laravel</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/edrylle-jann-ramos-79a3b0193/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/edrylle123" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
 
          {/* facebook */}
          <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>


          {/* Youtube */}
          <a href="http://gmail.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;