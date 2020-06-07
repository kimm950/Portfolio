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
import Home from './Home'
import Works from './Works'
import Profile from './images/profile.png'

class Portfolio extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <Menu fixed='top' inverted>
            <Container>
              <Link to='/'>
                <Menu.Item as='a' header>
                  <Image
                    src={`${Profile}`}
                    size='mini'
                    circular
                    style={{ marginRight: '1.5em' }}
                  />Portfolio
                </Menu.Item>
              </Link>
              <Link to='/'>
                <Menu.Item as='a'>
                  <Link to='/'>Home</Link></Menu.Item>
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
        </Router>
      </div >
    );
  }
}

export default Portfolio;
