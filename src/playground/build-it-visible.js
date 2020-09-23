let visibility = true;

var appRoot = document.getElementById("app");

const toggleVisibility = () => {
  visibility = !visibility;
  renderApp();
};

const renderApp = () => {
  let template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button id="showBtn" onClick={toggleVisibility} hidden={!visibility}>
        Show details
      </button>
      <button id="hideBtn" onClick={toggleVisibility} hidden={visibility}>
        Hide details
      </button>
      <p hidden={visibility}>Hey, These are some details you can now see!</p>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
