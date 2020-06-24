import React from 'react'
import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';
import Profile from '../images/profile.png'

const Home = () => {
  return (
    <Container text style={{ marginTop: '7em' }}>
      <h3><Icon name='file outline' />Resume</h3>
      {/* <Image src={`${Profile}`} style={{ marginTop: '2em' }} size='small' circular /> */}
      <Header as='h1'>
        HYUN SUNG KIM
            <Header.Subheader>
          Front-end developer || Designer
            </Header.Subheader>
      </Header>

      <Header as='h2'>
        <Icon name='briefcase' />
          Experience
          </Header>
      <Header as='h3' style={{ margin: '0 0 2em 1em' }}>
        ZEALS(ジールス), Tokyo, Japan
            <Header as='h4'>
          Front-end Developer & UI/UX Designer
              <Header.Subheader>
            Mar 2019 – Present
              </Header.Subheader>
        </Header>
      </Header>

      <Header as='h3' style={{ margin: '0 0 2em 1em' }}>
        Hemispheric Institute at NYU, New York, NY
            <Header as='h4'>
          Web Design & Programming Intern
              <Header.Subheader>
            Feb 2017 – May 2017
              </Header.Subheader>
        </Header>
      </Header>

      <Header as='h3' style={{ margin: '0 0 2em 1em' }}>
        Freelance Graphic Designer
            <Header as='h4'>
          Graphic Designer
                <Header.Subheader>
            2015 – 2018
              </Header.Subheader>
        </Header>

      </Header>
      <Header as='h2'>
        <Icon name='book' />
        Education
          </Header>
      <Header as='h3' style={{ margin: '0 0 2em 1em' }}>
        The City College of New York, New York, NY
            <Header as='h4'>
          Bachelor of Arts in Digital Design
                <Header.Subheader>
            2016 – 2018
              </Header.Subheader>
        </Header>
      </Header>

      <Header as='h3' style={{ margin: '0 0 2em 1em' }}>
        Borough of Manhattan Community College, New York, NY
            <Header as='h4'>
          Associate of Science in Multimedia Programming
                <Header.Subheader>
            2014 – 2016
              </Header.Subheader>
        </Header>
      </Header>

      <Header as='h2'>
        <Icon name='file code outline' />
        Skills
          </Header>
      <Header as='h3' style={{ margin: '0 0 2em 1em' }}>
        JavaScipt || React || TypeScript || Redux || UI & UX Design
        <Header.Subheader>
          <Icon name='js' />
          <Icon name='react' />
          <Icon name='git square' />
          <Icon name='sass' />
        </Header.Subheader>
      </Header>
      <Header as='h2'>
        <Icon name='language' />
        Langages
          </Header>
      <Header as='h3' style={{ margin: '0 0 2em 1em' }}>
        English || Korean || Japanese
          </Header>
    </Container>
  )
}

export default Home