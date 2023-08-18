/**
 * redux代码优化:
 *  1.将派发的action生成过程放到一个actionCreators函数中
 *  2.将定义的所有actionCreators的函数, 放到一个独立的文件中: actionCreators.js
 *  3.actionCreators和reducer函数中使用字符串常量是一致的, 所以将常量抽取到一个独立constants的文件中
 *  4.将reducer和默认值(initialState)放到一个独立的reducer.js文件中, 而不是在index.js
 */
const store = require("./store");
const {
    addNumberAction,
    changeNameAction,
} = require("./store/actionCreators.js");

const unsubscribe = store.subscribe(() => {
    console.log("订阅数据的变化:", store.getState());
});

// // actionCreators: 帮助我们创建action
// const changeNameAction = (name) => ({
//     // return {
//     //     type: "change_name",
//     //     name
//     // }
//     // 可以直接写成
//     /*
//     这里的 changeNameAction 是一个箭头函数，它只有一个表达式，即一个对象字面量。由于这是唯一的表达式，JavaScript 会隐式地将这个对象作为函数的返回值。因此，你不需要显式地使用 return 关键字。

//     这种写法简洁，特别适用于 Redux 中的 action creators，因为它允许你在一个对象中定义多个属性，并且隐式返回这个对象作为 action。这是 JavaScript 语法的一种方便的使用方式，让你在特定情况下可以更精简地编写代码。*/
//     type: "change_name",
//     name,
// });

// 修改store中的数据: 必须action
store.dispatch(changeNameAction("kobe"));

store.dispatch(changeNameAction("luuuu"));

// 修改counter
// const addNumberAction = (num) => ({
//     type: "add_number",
//     num,
// });
store.dispatch(addNumberAction(10));
store.dispatch(addNumberAction(20));
