import * as React from 'react';
import { SidebarBtnWrapper, SidebarOpenBtn } from './SidebarStyle'
import Hamburger from '../../assets/icon/hamburger.svg'

const SidebarBtn = ({ sidebarOn, onStatusChange }) => {
  return (
    <SidebarBtnWrapper sidebarOn={sidebarOn}>
      <SidebarOpenBtn onClick={onStatusChange}>
        <Hamburger width={20} height={20}/>
      </SidebarOpenBtn>
    </SidebarBtnWrapper>
  )
}

export default SidebarBtn;