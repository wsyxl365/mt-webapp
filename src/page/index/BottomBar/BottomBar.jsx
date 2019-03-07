import './BottomBar.scss';
import React from 'react';
import { connect } from "react-redux";
import { changeTab } from "../actions/tabAction";


const mapStateToProps = (state)=> {
    return {
        tabs : state.tabReducer.tabs,
        activeKey : state.tabReducer.activeKey
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        changeTabRedux(item){
            dispatch(changeTab(item));
        }
    }
}
/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class BottomBar extends React.Component{
    constructor(props){
        super(props);
        this.renderItems = this.renderItems.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }

    renderItems() {
        let tabs= this.props.tabs;
        return tabs.map((item, index) => {
            let cls = item.key + ' btn-item';
            let name = item.name;
            if(item.key === this.props.activeKey) {
                cls += " active";
            }
            return (
                <div key={index} className={cls} onClick={()=>{this.changeTab(item)}}>
                    <div className="tab-icon"></div>
                    <div className="btn-name">{name}</div>
                </div>
            )
        })
    }

    /**
     * 底部tab切换逻辑
     */
    changeTab(item) {
        this.props.changeTabRedux({
            activeKey: item.key
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