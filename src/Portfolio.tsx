import React, { Component } from 'react';
//@ts-ignore
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './Portfolio.css';
import {
  Container,
  Image,
  Menu,
  Segment,
} from 'semantic-ui-react';
import { Home, Works, About } from './components'
import Profile from './images/profile.png'

const NavLink = styled(Link)`
  height: 100%;
`

class Portfolio extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <Menu fixed='top' style={{ padding: '0px' }}>
            <Container>
              <NavLink to='/'>
                <Menu.Item as='a' header>
                  <Image
                    src={`${Profile}`}
                    size='mini'
                    circular
                    style={{ marginRight: '1.5em' }}
                  />Resume
                </Menu.Item>
              </NavLink>
              <NavLink to='/works'><Menu.Item as='a'>Works</Menu.Item></NavLink>
              <NavLink to='/about'><Menu.Item as='a'>About</Menu.Item></NavLink>
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
