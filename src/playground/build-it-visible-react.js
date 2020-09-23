class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = { visibility: true };
  }

  toggleVisibility() {
    console.log("Toggle", this.state.visibility);
    this.setState((prevState) => {
      return { visibility: !prevState.visibility };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility} hidden={!this.state.visibility}>
          Show Details
        </button>
        <button onClick={this.toggleVisibility} hidden={this.state.visibility}>
          Hide Details
        </button>
        <p hidden={this.state.visibility}>
          Hey, These are some details you can now see!
        </p>
      </div>
    );
  }
}

var appRoot = document.getElementById("app");
ReactDOM.render(<VisibilityToggle />, appRoot);
