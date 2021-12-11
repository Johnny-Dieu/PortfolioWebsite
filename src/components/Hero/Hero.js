import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome, <br/> I'm 
        Johnny Dieu.
      </SectionTitle>
      <SectionText>
      Final year student at Sheridan College in the Systems Analyst program. I’m passionate about the tech industry and love working on and leading projects. I have gained knowledge and experience in Object Oriented Programming, Web Dvelopment, Database Design and implementation, Linux Administration, Software Processes, and much more.
      </SectionText>
      <Button onClick={() => window.location = '#about'}> Learn More </Button>
    </LeftSection>

  </Section>
);

export default Hero;