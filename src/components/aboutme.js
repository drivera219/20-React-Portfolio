import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="about-grid">
                        <img
                        src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/14560081_10101250826900025_7709005988992969044_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=t128d21Hun8AX_WP4sN&_nc_ht=scontent-lga3-1.xx&oh=f063cb10ba54bafc103e4038122c43c1&oe=5F5347CA"
                        alt="aboutpic"
                        className="about-pic"
                        />
                </Grid>
                <Cell className="about-sect" col={6}>
                        about me:
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="about-desc">
                        I'm a UI designer and Front End Developer from New York City.
                
                    <br />
                    <br />
                    <br />
                    <br />
                        I am passionate about aesthetics and creating beautiful interface designs.  Learning to front-end code gave me unlimited freedom 
                        in to making these designs a reality.  I also love problem solving and bringing a clients vision to life.  Efficiency and elegance
                        is key for me and REACT makes that effort painless.
                    <br />
                    <br />
                    <br />
                    <br />
                        When I am not coding, I enjoy playing sports and reading on tech.
                        </div>
                    

                </Cell>
            </div>
        )
    }
}

export default AboutMe;