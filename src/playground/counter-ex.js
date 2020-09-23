let count = 0;

const increment = () => {
  count++;
  renderCounterApp();
};

const decrement = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const template3 = (
    <div>
      <h1>Count: {count}</h1>
      <button id="btn1" onClick={increment}>
        +1
      </button>
      <button id="btn2" onClick={decrement}>
        -1
      </button>
      <button id="btn3" onClick={reset}>
        Reset
      </button>
    </div>
  );
  ReactDOM.render(template3, appRoot);
};

renderCounterApp();
