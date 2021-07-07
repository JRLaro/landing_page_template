import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height:100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({isOpen})=> (isOpen ? '0' : '-100')};

`
export const CloseIcon = styled(FaTimes)`
color: red;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: white;
list-style-type: none;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 680px) {
    grid-template-rows: repeat(6, 60px);
}


`
export const SidebarLinks = styled(LinkScroll)`
  color: white;
  display: flex;
  justify-content: center;
  font-size: 1.5rem
  align-items: center;
  text-decoration: none;
  list-style: none;
  transition: .2s ease-in-out;
  ${'' /* padding: 0 1rem; */}
  cursor: pointer;
  ${'' /* height: 100%; */}

  &:hover {
    color: #01bf71;
    transition: .2s ease-in-out
  }
`;

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`
export const SidebarRoute = styled(LinkRouter)`
cursor: pointer;
background: #01bf71;
border-radius: 50px;
text-decoration: none;
color: #010606;
outline: none;
padding: 16px 64px;
white-space: nowrap;
transition: all .2s ease-in-out;

&:hover {
    transition: all .2s ease-in-out;
    background: white;
    color: #010606;
}

`