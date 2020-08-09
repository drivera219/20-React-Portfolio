import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ResumeFile from '../Resume.png';

class Resume extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="home-grid">
            </Grid>
                    <Cell col={4}>

                    <h2 style={{fontWeight: 'bold'}}>Daniel Rivera</h2>
                    <h4 style={{color: 'grey'}}>Front End Developer</h4>
                    <hr style={{borderTop: '1px solid #F0F0F0', width: '50%'}}/>
                    <p>Tag Line | Mission Statement</p>
                    <hr style={{borderTop: '1px solid #F0F0F0', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>1990 Gleason Avenue, 11495</p>
                    <h5>Phone</h5>
                    <p>(646) 555-5555</p>
                    <h5>Email</h5>
                    <p>daniel.m.rivera19@gmail.com</p>
                    <h5>Web</h5>
                    <p>thiswebsite.com</p>
                    <hr style={{borderTop: '1px solid #F0F0F0', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={1}>
                    <section className="resumefile">
                        <img src={ResumeFile} 
                        alt="myresume"/>
                        </section> 
                    </Cell>
            </div>
        )
    }
}

export default Resume;