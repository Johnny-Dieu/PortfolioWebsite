import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList center>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:647-919-5860">Give Me a Call!</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:johnnydieu@gmail.com">Johnny Dieu</LinkItem>
      </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Innovating One Project At A Time</Slogan>
       </CompanyContainer>
       <SocialIcons href="https://github.com/Johnny-Dieu">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/johnny-dieu/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="mailto:johnnydieu@gmail.com">
        <AiOutlineMail size="3rem"/>
      </SocialIcons>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
