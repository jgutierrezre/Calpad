import React, { Component } from 'react';
import Sidebar from "react-sidebar";

class Sidebar2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
     
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <Sidebar
                sidebar={
                    <b>File Tree</b>
                }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "antiquewhite" } }}
            >
                <button onClick={() => this.onSetSidebarOpen(true)}>
                Open sidebar
                </button>
            </Sidebar>
        )
    }


}

export default Sidebar2;
