import { TABKEY }from "../config";
import { CHANGE_TAB } from "../actions/actionTypes";
const initState = {
    tabs: [
        {
            name: "首页",
            key: TABKEY.home
        },
        {
            name: "订单",
            key: TABKEY.order
        },
        {
            name: "我的",
            key: TABKEY.my
        }
    ],
    activeKey: TABKEY.home
};
const changeTab = (state, action) => {
    let activeKey = action.data.activeKey;
    return {...state, activeKey: activeKey};
};

const tabReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return changeTab(state, action);
        default:
            return state;
    }
}

export default tabReducer;