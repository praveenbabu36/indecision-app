class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.count,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    let counter = localStorage.getItem("counter");
    console.log("counter:", counter);

    counter = parseInt(counter);

    if (!isNaN(counter)) {
      this.setState(() => {
        return { count: counter };
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    localStorage.setItem("counter", this.state.count);
  }

  increment() {
    console.log("increment");
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  decrement() {
    console.log("decrement");
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }
  reset() {
    console.log("reset");
    this.setState((prevState) => {
      return { count: 0 };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button id="btn1" onClick={this.increment}>
          +1
        </button>
        <button id="btn2" onClick={this.decrement}>
          -1
        </button>
        <button id="btn3" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};

var appRoot = document.getElementById("app");
ReactDOM.render(<Counter count={0} />, appRoot);
