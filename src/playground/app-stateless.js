const Header = (props) => {
  //jsx
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>
        <i>{props.subTitle}</i>
      </h4>
    </div>
  );
};

Header.defaultProps = {
  title: "Default Title",
  subTitle: "Default Subtitle",
};

const Action = (props) => {
  return (
    <div>
      <button
        id="btnMakeDecision"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should i do?
      </button>
    </div>
  );
};

const Options = (props) => {
  const optionsList = props.optionsList;
  return (
    <div>
      <button id="btnReset" onClick={props.handleReset}>
        Reset Options
      </button>
      {optionsList.length === 0 && <p>Please add an Option.</p>}

      <ol>
        {optionsList.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

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
    const newItem = e.target.elements.newItemInput.value.trim();
    const error = this.props.handleAdd(newItem);
    this.setState(() => ({ error: error }));

    //clear the input field if there is no error
    if (!error) {
      e.target.elements.newItemInput.value = "";
    }
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
    this.removeOption = this.removeOption.bind(this);
    this.state = {
      //options: [],
      options: props.options,
    };
  }

  componentDidMount() {
    try {
      console.log("componentDidMount");
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      console.log("Invalid JSON");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      console.log("saving data");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleAddOption(option) {
    //dont add if the option exists already
    if (!option) {
      return "Enter value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Value exists";
    }

    /*
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
    */

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  handlePick() {
    console.log("Select a Option");
    const randomNo = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNo]);
  }

  removeOption(optionToRemove) {
    console.log("Remove option : ", optionToRemove);
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        }),
      };
    });
  }

  resetOptions() {
    console.log("Reset Options");
    this.setState(() => {
      return { options: [] };
    });

    // another way to return the new object
    //this.setState(() => ({ options: [] }));
  }

  //render method
  render() {
    const appTitle = "Indecision";
    const subTitle = "Put your life in the hands of a computer!";

    //return
    return (
      <div>
        <Header title={appTitle} subTitle={subTitle} />
        {/* <Header /> */}
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          optionsList={this.state.options}
          handleReset={this.resetOptions}
          handleDeleteOption={this.removeOption}
        />
        <AddOption handleAdd={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ["Default Item"],
};

// Stateless functional component
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

var appRoot = document.getElementById("app");
// ReactDOM.render(<User name="Praveen" age="38" />, appRoot);

ReactDOM.render(<IndecisionApp options={[]} />, appRoot);
