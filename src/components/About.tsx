import React from 'react'
import { Container, Header, Card, Image, Icon, List } from 'semantic-ui-react';
import Profile from '../images/profile.png'

const About = () => {
  return (
    <Container text style={{ marginTop: '7em' }}>
      <div className='about-wrppper'>
        <Card style={{ marginBottom: '2em' }}>
          <Image src={`${Profile}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Hyun Sung Kim</Card.Header>
            <Card.Meta>
              <span className='date'>Feb 17th 1995</span>
            </Card.Meta>
            <Card.Description>
              Hi! I am a front-end developer living in Tokyo.
      </Card.Description>
          </Card.Content>
        </Card>
        <List>
          <List.Item>
            <List.Icon name='users' />
            <List.Content>ZEALS</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='marker' />
            <List.Content>Tokyo, Japan</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' />
            <List.Content>
              <a href='mailto:kimuo950@gmail.com'>kimuo950@gmail.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' />
            <List.Content>
              <a href='https://github.com/kimm950' target='blank'>https://github.com/kimm950</a>
            </List.Content>
          </List.Item>
        </List>
      </div>
      <Header as='h2'>About</Header>
      <p style={{ marginBottom: '100px' }}>
        I am a web-application Front-end developer & UI/UX designer at ZEALS(ジールス) in Tokyo, Japan. I studied Digital design at the City College of New York and graduated with my BA in December 2018. I was born in Seoul, South Korea on Feb 17th 1995. I moved to the United States when I was younger and currently I'm living in Tokyo. I believe digital/graphic design is one of the best ways to communicate with the people who use different languages in the world. I'd love to communicate with the people who have various of culture background. I can speak Korean, English and Japanese.
    </p>
    </Container>
  )
}

export default About