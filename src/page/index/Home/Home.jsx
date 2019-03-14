import React from 'react';
import Header from "./Header/Header";
/**
 * @constructor <Home/>
 * @description 首页Tab代码
 */
export default class Home extends  React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header/>
            </div>
        )
    }
}