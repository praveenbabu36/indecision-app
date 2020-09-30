import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  // constructor(props) {
  //   super(props);
  //   this.addItem = this.addItem.bind(this);
  //   this.state = {
  //      error: undefined,
  //   };
  // }
  addItem = (e) => {
    e.preventDefault();
    const newItem = e.target.elements.newItemInput.value.trim();
    const error = this.props.handleAdd(newItem);
    this.setState(() => ({ error: error }));

    console.log("Add Items");

    //clear the input field if there is no error
    if (!error) {
      e.target.elements.newItemInput.value = "";
    }
  };

  render() {
    return (
      <div>
        <p className="add-option-error">{this.state.error && <p>Error:{this.state.error}</p>}</p>
        <form onSubmit={this.addItem} className="add-option">
          <input type="text" name="newItemInput" className="add-option__input"/>
          <button className="s-button" id="btnAdd">Add Option</button>
        </form>
      </div>
    );
  }
}
