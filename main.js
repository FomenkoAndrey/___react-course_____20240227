const App = ({ initialButtonText, initialClassesList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialClassesList);

  const onClickHandler = () => {
    setButtonText(`React clicked! ${Date.now()}`);
    setClassesList("btn-info");
  };

  return (
    <div>
      <h1>Hello from React!</h1>
      <button id="button" onClick={onClickHandler} className={classesList}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <App initialButtonText="Click me please" initialClassesList="red" />,
);
