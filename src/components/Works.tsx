import React from 'react'
import { Container, List } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Works = () => {
  return (
    <div className='work-container'>
      <div className='menu-dir' style={{ backgroundColor: '#272727', color: 'white', padding: '7em', height: '100vh' }}>
        <List inverted>
          <List.Item >
            <List.Icon name='folder' />
            <List.Content>
              <List.Header>works</List.Header>
              <List.Description>projects</List.Description>
              <List.List>
                <List.Item>
                  <List.Icon name='folder' />
                  <List.Content>
                    <List.Header>front_end</List.Header>
                    <List.Description>Front-end development</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='folder' />
                  <List.Content>
                    <List.Header>design</List.Header>
                    <List.Description>UI and UX // Graphic Design</List.Description>
                    <List.List>
                      <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                          <List.Header>ui_and_ux</List.Header>
                          <List.Description>User Interface and Experiences Design works</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                          <List.Header>graphic_design</List.Header>
                          <List.Description>
                            Graphic and 3D works
                    </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='folder' />
            <List.Content>
              <List.Header>etc</List.Header>
              <List.Description>Other works</List.Description>
              <List.List>
                <List.Item>
                  <List.Icon name='folder' />
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
            <List.Icon name='file' />
            <List.Content>
              <List.Header>resume.json</List.Header>
              <List.Description>My resume</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
      <Container text style={{ marginTop: '7em' }}>

        <div>
          works!
    </div>
      </Container>
    </div >
  )
}

export default Works