import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
import { Home, Works, About } from './components'
import Profile from './images/profile.png'

class Portfolio extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <Menu fixed='top'>
            <Container>
              <Link to='/'>
                <Menu.Item as='a' header>
                  <Image
                    src={`${Profile}`}
                    size='mini'
                    circular
                    style={{ marginRight: '1.5em' }}
                  />Resume
                </Menu.Item>
              </Link>
              <Link to='/works'>
                <Menu.Item as='a'>Works</Menu.Item>
              </Link>
              <Link to='/about'>
                <Menu.Item as='a'>About</Menu.Item>
              </Link>
            </Container>
          </Menu>
          <Route exact path='/' component={Home} />
          <Route exact path='/works' component={Works} />
          <Route exact path='/about' component={About} />
        </Router>
        <Segment vertical inverted style={{ textAlign: 'center', }}>© 2020 Hyun Sung Kim</Segment>
      </div >
    );
  }
}

export default Portfolio;
