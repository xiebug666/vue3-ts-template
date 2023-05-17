function observer(obj) {
  let funcs = [];
  // eslint-disable-next-line no-new
  const p = new Proxy(obj, {
    get(target, property) {
      if (window.__func && !funcs.includes(window.__func)) {
        funcs.push(window.__func);
      }
      return target[property];
    },
    set(o, prop, value) {
      o[prop] = value;
      // 派发更新，运行：执行用我的函数
      for (var i = 0; i < funcs.length; i++) {
        funcs[i]();
      }
    },
  });
  return p;
}

function autorun(fn) {
  window.__func = fn;
  fn();
  window.__func = null;
}

const user = {
  name: '张三',
  age: 18,
};

const userRef = observer(user);
console.log(userRef);

function showFirstName() {
  document.querySelector('#name').textContent = `姓名：${userRef.name}`;
}

function showAge() {
  document.querySelector('#age').textContent = `年龄：${userRef.age}`;
}

autorun(showFirstName);
autorun(showAge);

function handleInput(value) {
  userRef.name = value;
}
