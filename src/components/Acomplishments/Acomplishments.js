import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects', link: 'https://github.com/Johnny-Dieu?tab=repositories'},
  { number: 200, text: 'LinkedIn Connections', link:'https://www.linkedin.com/in/johnny-dieu/'},
  { number: 2, text: 'Certificates in Kaggle and Google Certificate', link: 'https://www.linkedin.com/in/johnny-dieu/details/certifications/' },
  { number: (3.0).toFixed(1), text: 'Graduated from Sheridan College with a 3.0 GPA'}
];

const Acomplishments = () => (
  <Section>
    <SectionDivider/>
    <br/>
    <br/>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <a href={card.link} target="_blank" rel="noopener noreferrer">
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum> 
          <BoxText>{card.text}</BoxText>
        </Box>
        </a>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
