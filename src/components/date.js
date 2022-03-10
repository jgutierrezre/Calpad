import React, { Component } from 'react';

let styles = {
    header: {
        background: "#03a9fa"
    },
    logo: {
        color: "#fff",
        fontFamily: "Roboto Mono",
        textAlign: "center"
    }
}

class Date extends Component {

    render() {
        return (
            <header style = { styles.header }>
                <div style = { styles.logo }> Test </div>
                <input/>
            </header>
        )
    }


}

export default Date;