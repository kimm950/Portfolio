import React, { useState } from 'react'
import { Container, List, Input, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Works = () => {
  const [isActive, setActive] = useState(false)
  const [isActive2, setActive2] = useState(false)
  return (
    <div className='work-container'>
      <div className='menu-dir' style={{ backgroundColor: '#272727', color: 'white', padding: '7em', height: '100vh' }}>
        <Input icon='search' placeholder='Search...' style={{ width: '100%', marginBottom: '2em', }} />
        <List inverted>
          <List.Item >
            <List.Icon style={{
              color: '#0088FE',
            }} name='folder' />
            <List.Content>
              <List.Header onClick={() => setActive(!isActive)}>works</List.Header>
              <List.Description>projects</List.Description>
              {isActive && <List.List>
                <List.Item>
                  <List.Icon style={{
                    color: '#FFBB28',
                  }} name='folder' />
                  <List.Content>
                    <List.Header>front_end</List.Header>
                    <List.Description>Front-end development</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon style={{
                    color: '#FF8042',
                  }} name='folder' />
                  <List.Content>
                    <List.Header onClick={() => setActive2(!isActive2)}>design</List.Header>
                    <List.Description>UI and UX // Graphic Design</List.Description>
                    {isActive2 && <List.List>
                      <List.Item>
                        <List.Icon style={{
                          color: '#00C49F',
                        }} name='folder' />
                        <List.Content>
                          <List.Header>ui_and_ux</List.Header>
                          <List.Description> UI and UX Design works</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon style={{
                          color: '#0088FE',
                        }} name='folder' />
                        <List.Content>
                          <List.Header>graphic_design</List.Header>
                          <List.Description>
                            Graphic and 3D works
                    </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>}
                  </List.Content>
                </List.Item>
              </List.List>}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon style={{
              color: '#0088FE',
            }} name='folder' />
            <List.Content>
              <List.Header>etc</List.Header>
              <List.Description>Other works</List.Description>
              <List.List>
                <List.Item>
                  <List.Icon style={{
                    color: '#02a104',
                  }} name='folder' />
                  <List.Content>
                    <List.Header>video_motion_graphic</List.Header>
                    <List.Description>
                      Adobe Premiere and After Effect
              </List.Description>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon style={{
              color: '#cc1818',
            }} name='file' />
            <List.Content>
              <List.Header>resume.json</List.Header>
              <List.Description>My resume</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
      <Container text style={{ marginTop: '7em' }}>

        <div style={{ height: '500px', textAlign: 'center' }}>
          works will be renderd here
         <Loader active inline='centered' style={{ marginTop: '7em' }} />
        </div>
      </Container>
    </div >
  )
}

export default Works