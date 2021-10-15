import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarMenu,
  SidebarRoute,
  SidebarItem,
} from "./SidebarElements";

const Sidebar = ({mobileMenuClick,isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={mobileMenuClick}>
      <Icon onClick={mobileMenuClick}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="about" onClick={mobileMenuClick}>About</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="discover" onClick={mobileMenuClick}>Discover</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="services" onClick={mobileMenuClick}>Services</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="signup" onClick={mobileMenuClick}>Sign Up</SidebarLink>
          </SidebarItem>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;