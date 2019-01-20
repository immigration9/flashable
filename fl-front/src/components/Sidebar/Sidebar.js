import React, { PureComponent } from 'react'
import { SidebarWrapper, CloseBtn, MenuWrapper, MenuItem } from './SidebarStyle'
import CloseIcon from '../../assets/icon/close.svg'

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);

  }

  onCloseClick = () => {
    this.props.onStatusChange(false);
  }

  render() {
    const { sidebarOn } = this.props;
    return (
      <SidebarWrapper sidebarOn={sidebarOn}>
        <CloseBtn sidebarOn={sidebarOn} onClick={this.onCloseClick}>
          <CloseIcon width={24} height={24}/>
        </CloseBtn>
        <MenuWrapper sidebarOn={sidebarOn}>
          <MenuItem>
            About
          </MenuItem>
        </MenuWrapper>
      </SidebarWrapper>
    )
  }
}

export default Sidebar