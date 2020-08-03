import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ResumeFile from '../Resume.png';


class Resume extends Component {
    render() {
        return(
            <div style={{height: '100%'}}>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img 
                    src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s320x320/102298135_299400531219394_5272018836683653631_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=u_N11yH3IM8AX-lIMMN&oh=c612a2fd93ac7f8f22cb60b21af325c1&oe=5F4E7D0F"
                    alt="profilepic"
                    style={{height: '250px'}}/>
                        </div>

                    <h2 style={{paddingTop: '2em'}}>Daniel Rivera</h2>
                    <h4 style={{color: 'grey'}}>Developer</h4>
                    <hr style={{borderTop: '1px solid #F0F0F0', width: '50%'}}/>
                    <p>Tag Line | Mission Statement</p>
                    <hr style={{borderTop: '1px solid #F0F0F0', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>123 Sample Parkway, 11495</p>
                    <h5>Phone</h5>
                    <p>(646) 555-5555)</p>
                    <h5>Email</h5>
                    <p>daniel.m.rivera19@gmail.com</p>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop: '1px solid #F0F0F0', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <section className="resumefile">
                        <img src={ResumeFile} 
                        alt="myresume"/>
                        </section> 
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;