var app = {
  title: "Indecision Application",
  subTitle: "an app to decide",
  options: [],
  optionSelected: "",
};

const addItem = (e) => {
  e.preventDefault();

  const newItem = e.target.elements.newItemInput.value;
  // add new item to the options
  app.options.push(newItem);
  renderApp();
};

const resetOptions = () => {
  app.options = [];
  renderApp();
};

const makeDecision = () => {
  const randomNo = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNo];
  app.optionSelected = option;
  renderApp();
};

var appRoot = document.getElementById("app");

const renderApp = () => {
  var template = (
    <div>
      <h1 id="p1">{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <button
        id="btnMakeDecision"
        onClick={makeDecision}
        disabled={app.options.length == 0}
      >
        What should i do ?
      </button>
      <button id="btnReset" onClick={resetOptions}>
        Reset Options
      </button>
      <p>Selected Option:{app.optionSelected}</p>
      <p>
        {app.options && app.options.length > 0
          ? "Here are your options"
          : "No Options"}{" "}
        :{" "}
      </p>

      <ol>
      {app.options.map((option) => (
        <li key={option}>{option}</li>
      ))}
      </ol>

      <form onSubmit={addItem}>
        <input type="text" name="newItemInput" />
        <button id="btnAdd">Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();

/*
  var user = {
    name: "Praveen",
    age: 38,
    location: "chennai",
  };
  
  function getLocation(location) {
    if (location) {
      return <p>Location:{location}</p>;
    } else {
      return undefined;
    }
  }
  
  var template2 = (
    <div>
      <h1>{user.name ? user.name : "Anonymous"}</h1>
      {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
  );*/

// ReactDOM.render(template2, appRoot);
