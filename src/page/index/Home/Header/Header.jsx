import "./Header.scss";
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

/**
 * @constructor <Home/>
 * @description 顶部
 */
export default class Header extends  React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="header">
                <SearchBar />
                <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" alt=""/>
            </div>
        )
    }
}