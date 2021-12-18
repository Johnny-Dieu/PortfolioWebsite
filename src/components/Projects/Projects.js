import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>
      Here are some of my current ongoing projects and ones I have completed. You can find the link and source code linked below. 
    </SectionText>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <br/>
              <br/>
              <TitleContent>Technologies Used</TitleContent>
              <TagList>
                {tags.map((tag, i) =>(
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">Link</ExternalLinks>
              <ExternalLinks href={source} target="_blank">Source Code</ExternalLinks>
            </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;