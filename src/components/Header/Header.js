import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin
} from 'react-icons/ai';
import {
  MdCode
} from 'react-icons/md';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from './HeaderStyles';


const Header = () => ( 
  <Container>
  <Div1>
  <Link href="/">
  <a style = {{display: "flex", alignItems: "center", color: "white"}}> 
    <MdCode size="8rem" color="cornflowerblue"/>
    <Span>Johnny Dieu.</Span>
  </a> 
  </Link> 
  </Div1> 

  <Div2 style = {{marginTop: '30px'}}>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>About Me</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href="https://github.com/Johnny-Dieu" target="_blank" rel="noopener noreferrer">
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/johnny-dieu/" target="_blank" rel="noopener noreferrer">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="mailto:johnnydieu@gmail.com" target="_blank" rel="noopener noreferrer">
      <AiOutlineMail size="3rem"/>
    </SocialIcons>
  </Div3>

  </Container>
);

export default Header;