import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.div`
position: fixed;
z-index:999;
height: 100%;
width: 100%;
background-color: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.4s ease-in-out;
opacity: ${({isOpen})=>(isOpen ? '100%' : '0')};
top:${({isOpen})=>(isOpen ? '0' : '-100%')};
`


export const CloseIcon = styled(FaTimes)`
color:#fff;
`

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right: 1.5rem;
background-color: transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;


export const SidebarWrapper = styled.div`
color:#fff;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 80px);
text-align:center;
padding: 0;

@media screen and (max-width: 480px){
grid-template-rows: repeat(5,70px);
}
`

export const SidebarItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
`

export const SidebarLink = styled(LinkS)`
transition:0.2s ease-in-out;
color:#fff;
cursor: pointer;

&:hover{
    color:#01bf71;
    transition:0.2s ease-in-out;
}
`




export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius:50px;
background-color: #01bf71;
white-space: nowrap;
padding: 16px 64px;
font-size:16px;
outline: none;
border: none;
color: #010606;
cursor: pointer;
transition: all .2s ease-in-out;
text-decoration: none;


&:hover{
    background: #fff;
    transition: all .2s ease-in-out;
    color:#010606
}
`
