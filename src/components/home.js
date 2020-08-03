import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                        src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s320x320/102298135_299400531219394_5272018836683653631_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=u_N11yH3IM8AX-lIMMN&oh=c612a2fd93ac7f8f22cb60b21af325c1&oe=5F4E7D0F"
                        alt="profilepic"
                        className="profilepic-img"
                        />

                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Javascript | React | MongoDB </p>

                    <div className="social-links">
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-behance-square" aria-hidden="true" />
                        </a>

                        
                    </div>
                    </div>
                    </Cell>
                    </Grid>   
            </div>
        )
    }
}

export default Home;