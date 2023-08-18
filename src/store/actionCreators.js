// actionCreators: 帮助我们创建action
const { CHANGE_NAME, ADD_NUMBER } = require("./constants");

const changeNameAction = (name) => ({
    type: CHANGE_NAME,
    name,
});

// 修改counter
const addNumberAction = (num) => ({
    type: ADD_NUMBER,
    num,
});

module.exports = {
    changeNameAction,
    addNumberAction,
};
