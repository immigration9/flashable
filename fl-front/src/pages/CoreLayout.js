/** @flow **/
import * as React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Sidebar, SidebarBtn, Header } from '../components'
import { PageWrapper, ComponentWrapper } from './LayoutStyle'

type Props = {
  component: React.Node
}

type State = {
  sidebarOn: boolean
}

class CoreLayout extends React.Component<Props, State> {
  state: State = {
    sidebarOn: false,
  }

  statusChange = (data: boolean) => {
    this.setState({
      sidebarOn: data
    })
  }

  /**
   * (DOCS) `withRouter` from react-router-dom
   * You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. 
   * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
   */
  render() {
    const { sidebarOn } = this.state;
    const { component, ...rest } = this.props;

    let Component = withRouter(component);
    return (
      <Route {...rest} render={matchProps => (
        <PageWrapper>
          <Sidebar sidebarOn={sidebarOn} onStatusChange={this.statusChange} />
          <SidebarBtn sidebarOn={sidebarOn} onStatusChange={this.statusChange} />
          <Header/>
          <ComponentWrapper sidebarOn={sidebarOn}>
            <Component {...matchProps} />
          </ComponentWrapper>
        </PageWrapper>
      )} />
    )
  }
}

export default CoreLayout;