import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Divider from "material-ui/Divider";
import { Link } from "react-router";
import { NavToggleButton } from "../styled/NavDrawer";
/*
 when importing a single a single element we from a file we use 
 {} with the name of the elent we're importing
*/
class NavDrawer extends Component {
  state = {
    open: true,
    width: 250
  };

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        /*  if open was true now make it false,
                 if open was false now make it true */
        open: !prevState.open
      };
    });
  };

  render() {
    return (
      <div>
        <NavToggleButton
          toggle={this.toggle}
          width={this.state.width}
          open={this.state.open}
        />

        <Drawer open={this.state.open} with={this.state.width}>
          <div
            style={{
              height: "200px",
              width: "100%",
              backgroundColor: "salmon"
            }}
          >
            logIn container
          </div>
          <Divider />
          <Link to={"/"}>
            <MenuItem onClick={this.toggle} primaryText={"Play"} />
          </Link>
          <Link to={"profile"}>
            {" "}
            {/* we specified a prop to which file/url will it go to  */}
            <MenuItem onClick={this.toggle} primaryText={"Profile"} />
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
