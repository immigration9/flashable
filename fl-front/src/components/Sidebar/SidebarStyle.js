import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  width: ${props => props.sidebarOn ? '100%' : '5%'};
  height: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #000000;
  overflow: hidden;
  transition: 0.5s;
`

export const SidebarBtnWrapper = styled.div`
  display: ${props => props.sidebarOn ? 'none': 'visible'};
  width: 24px;
  position: relative;
`

export const SidebarOpenBtn = styled.button`
  box-shadow: rgba(9, 30, 66, 0.08) 0px 0px 0px 1px, rgba(9, 30, 66, 0.08) 0px 2px 4px 1px;
  color: rgb(107, 119, 140);
  cursor: pointer;
  height: 34px;
  opacity: 1;
  position: absolute;
  top: 62px;
  transform: translate(-50%);
  width: 34px;
  background: 0px center white;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 50%;
  outline: 0px;
  padding: 0px;
  transition: background-color 100ms linear 0s, color 100ms linear 0s, opacity 300ms cubic-bezier(0.2, 0, 0, 1) 0s, transform 300ms cubic-bezier(0.2, 0, 0, 1) 0s;
  z-index: 300;
`

export const MenuWrapper = styled.div`
  display: ${props => props.sidebarOn ? 'flex': 'none'};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
`

export const MenuItem = styled.button`
  font-size: 24px;
  border: none;
  
`

export const CloseBtn = styled.button`
  display: ${props => props.sidebarOn ? "visible" : "none"};
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
  width: 34px;
  height: 34px;
  border: none;
  background-color: transparent;
  transition: 0.5s
`