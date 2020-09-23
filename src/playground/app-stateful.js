class Header extends React.Component {
  //render method
  render() {
    const headerProps = this.props;

    //jsx
    return (
      <div>
        <h1>{headerProps.title}</h1>
        <h4>
          <i>{headerProps.subTitle}</i>
        </h4>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          id="btnMakeDecision"
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should i do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const optionsList = this.props.optionsList;
    return (
      <div>
        <button id="btnReset" onClick={this.props.handleReset}>
          Reset Options
        </button>
        <ol>
          {optionsList.map((option) => (
            <Option key={option} optionText={option}>
              {option}
            </Option>
          ))}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      error: undefined,
    };
  }
  addItem(e) {
    e.preventDefault();
    const newItem = e.target.elements.newItemInput.value;
    const error = this.props.handleAdd(newItem);
    this.setState(() => {
      return { error: error };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>Error:{this.state.error}</p>}
        <form onSubmit={this.addItem}>
          <input type="text" name="newItemInput" />
          <button id="btnAdd">Add Option</button>
        </form>
      </div>
    );
  }
}

// Top compoent that has all other components inside
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.resetOptions = this.resetOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],
    };
  }

  handleAddOption(option) {
    //dont add if the option exists already
    if (!option) {
      return "Enter value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Value exists";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

  handlePick() {
    console.log("Select a Option");
    const randomNo = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNo]);
  }

  resetOptions() {
    console.log("Reset Options");
    this.setState(() => {
      return { options: [] };
    });
  }

  //render method
  render() {
    const appTitle = "Indecision - Praveen";
    const subTitle = "Put your life in the hands of a computer!";

    //return
    return (
      <div>
        <Header title={appTitle} subTitle={subTitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          optionsList={this.state.options}
          handleReset={this.resetOptions}
        />
        <AddOption handleAdd={this.handleAddOption} />
      </div>
    );
  }
}

var appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp />, appRoot);
