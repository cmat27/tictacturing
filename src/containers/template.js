import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavDrawer from "../components/NavDrawer";
import { Header, Main } from "../styled/Template";

class Template extends Component {
  constructor() {
    super();
    this.state = { title: "Press the button " };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer />
          <Header>TicTacTuring App</Header>

          <Main>{this.props.children}</Main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Template;
