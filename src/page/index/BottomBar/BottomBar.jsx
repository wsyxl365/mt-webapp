import './BottomBar.scss';
import React from 'react';

import { connect } from "react-redux";

/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */
class BottomBar extends React.Component{
    constructor(props){
        super(props);
        this.renderItems = this.renderItems.bind(this);
    }

    renderItems() {
        let tabs= this.props.tabs;
        return tabs.map((item, index) => {
            let cls = item.key + ' btn-item';
            let name = item.name;
            return (
                <div key={index} className={cls}>
                    <div className="tab-icon"></div>
                    <div className="btn-name">{name}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="bottom-bar">
                {
                    this.renderItems()
                }
            </div>
        )
    }
}

export default connect(
    state =>({
        tabs : state.tabReducer.tabs,
        activeKey : state.tabReducer.activeKey
    })
)(BottomBar)