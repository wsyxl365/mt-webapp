import { TABKEY }from "../config";
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
const tabReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default tabReducer;