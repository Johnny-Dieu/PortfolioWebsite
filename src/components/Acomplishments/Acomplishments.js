import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 200, text: 'LinkedIn Connections', },
  { number: 2, text: 'Certificates in Kaggle and Google Certificate', },
  { number: (3.0).toFixed(1), text: 'Graduated from Sheridan College with a 3.0 GPA', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider/>
    <br/>
    <br/>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum> 
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
