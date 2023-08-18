const store = require("./store");

// 1. 只要state数据有变化，subscribe会自动回调里面的函数
// 2. store.subscribe()会有返回值，如果调用这个返回值，就会取消订阅
const unsubscribe = store.subscribe(() => {
    console.log("订阅数据的变化:", store.getState());
});

// 修改store中的数据: 必须action

store.dispatch({ type: "change_name", name: "kobe" });

store.dispatch({ type: "change_name", name: "LU" });
unsubscribe();
// unsubscribe()--> 打印结果：
//订阅数据的变化: { name: 'kobe', counter: 100 }
//订阅数据的变化: { name: 'LU', counter: 100 }

// 修改counter
store.dispatch({ type: "add_number", num: 10 });
