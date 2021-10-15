import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa'




import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const Navbar = ({mobileMenuClick,toggleHome}) => {

const [scrollNav, setScrollNav] = useState(false);

const changeNav = ()=>{
  if(window.scrollY >= 80) {
    setScrollNav(true)
  }else{
    setScrollNav(false)
  }
}


useEffect(() => {
  window.addEventListener('scroll', changeNav)
 
}, [])



  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="home" onClick={toggleHome}>dolla</NavLogo>
          <MobileIcon onClick={mobileMenuClick}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
          <NavItem>
              <NavLinks 
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              activeClass="active"
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover"
               smooth={true}
               duration={500}
               spy={true}
               exact='true'
               activeClass="active"
               >Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services"
               smooth={true}
               duration={500}
               spy={true}
               exact='true'
               activeClass="active"
               >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup"
               smooth={true}
               duration={500}
               spy={true}
               exact='true'
           
               activeClass="active"
               >Sign up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
