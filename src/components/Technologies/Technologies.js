import React from 'react';
import { DiFirebase, DiReact} from 'react-icons/di';
import { SiMicrosoft, SiJava } from 'react-icons/si'
import { AiFillApple, AiFillGithub } from 'react-icons/ai'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the software world. 
      From Front-End to Back-End and Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem"/>
        <br/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/> 
            React.JS, Angular, Ionic and VueJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem"/>
        <br/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/> 
            Node, MongoDB and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiJava size="3.5rem"/>
        <br/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br/> 
            JavaScript, Swift, C++, Java, HTML5, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillApple size="3.5rem"/>
        <br/>
        <ListContainer>
          <ListTitle>Opertating Systems</ListTitle>
          <ListParagraph>
            Experience with <br/> 
            Windows, MacOS, Linux, iOS and Andriod
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillGithub size="3.5rem"/>
        <br/>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br/> 
            Git, Github, Amazon Web Services, Google Cloud Platform and Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMicrosoft size="3.5rem"/>
        <br/>
        <ListContainer>
          <ListTitle>Softwares</ListTitle>
          <ListParagraph>
            Experience with <br/> 
            Adobe Creative Suite, Microsoft 365
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
