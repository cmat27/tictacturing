import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
//import injectTapEventPlugin from 'react-tap-event-plugin'
//injectTapEventPlugin() this plugin is not supported on React version > 16.4.0
//https://github.com/zilverline/react-tap-event-plugin/issues/121

class Template extends Component {
  constructor() {
    super();
    this.state = { title: "Press the button " };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacTuring</h1>

            <RaisedButton
              label={"test button"}
              primary={true}
              onClick={() => {
                this.setState({ title: "OOOk easy pal" });
              }}
            />
          </header>
          <main>
            {this.props.children}
            <div> {this.state.title}</div>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Template;
