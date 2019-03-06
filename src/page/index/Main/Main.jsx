import React, { Component } from "react";

import BottomBar from "../BottomBar/BottomBar.jsx";

import { connect } from "react-redux";

export default class Main extends Component {
    render(){
        return (
            <div>
                <BottomBar/>
            </div>
        )
    }
}
