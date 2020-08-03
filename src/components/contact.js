import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <div className="contact-page">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Daniel Rivera</h2>
                    <img 
                    src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s320x320/102298135_299400531219394_5272018836683653631_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=u_N11yH3IM8AX-lIMMN&oh=c612a2fd93ac7f8f22cb60b21af325c1&oe=5F4E7D0F"
                    alt="profilepic"
                    style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum</p>

                    </Cell>
                    
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                    <div>
                        <List>
                         <ListItem>
                              <ListItemContent icon="phone" style={{fontSize: '19px', fontFamily: 'Anton'}}>
                                646-555-5555</ListItemContent>
                        </ListItem>

                        <ListItem>
                             <ListItemContent icon="mail" style={{fontSize: '19px', fontFamily: 'Anton'}}>
                                 daniel.m.rivera19@gmail.com</ListItemContent>
                        </ListItem>

                         <ListItem>
                             <ListItemContent icon="home" style={{fontSize: '19px', fontFamily: 'Anton'}}>
                                 New York, NY, United States</ListItemContent>
                         </ListItem>
                        </List>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;