import styled from 'styled-components'

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const ComponentWrapper = styled.div`
  height: calc(100% - 46px);
  width: ${props => props.sidebarOn ? '0%' : 'calc(94% - 24px)'};
  margin-top: 46px;
`