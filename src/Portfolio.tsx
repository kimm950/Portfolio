import React, { Component } from 'react';
import './Portfolio.css';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';

import Profile from './images/profile.png'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image
                src={`${Profile}`}
                size='mini'
                circular
                style={{ marginRight: '1.5em' }}
              />Portfolio</Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Works</Menu.Item>
            <Menu.Item as='a'>About</Menu.Item>

          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>HYUN SUNG KIM</Header>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
