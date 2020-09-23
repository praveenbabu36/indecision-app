import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
  };

  // constructor(props) {
  // super(props);
  // this.resetOptions = this.resetOptions.bind(this);
  // this.handlePick = this.handlePick.bind(this);
  // this.handleAddOption = this.handleAddOption.bind(this);
  // this.removeOption = this.removeOption.bind(this);
  // this.state = {
  //   options: [],
  //   //options: props.options,
  // };
  // }

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

  handleAddOption = (option) => {
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
  };

  handlePick = () => {
    console.log("Select a Option");
    const randomNo = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNo]);
  };

  removeOption = (optionToRemove) => {
    console.log("Remove option : ", optionToRemove);
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        }),
      };
    });
  };

  resetOptions = () => {
    console.log("Reset Options");
    this.setState(() => {
      return { options: [] };
    });

    // another way to return the new object
    //this.setState(() => ({ options: [] }));
  };

  //render method
  render() {
    const appTitle = "Indecision";
    const subTitle = "Put your life in the hands of an application!";

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
