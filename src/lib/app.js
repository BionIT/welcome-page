import './app.css';
// import logo from './logo.svg';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Welcome to OpenSearch Playground
          </p>
          <a
            className="Playground-link"
            href="https://github.com/opensearch-project/dashboards-anywhere"
            target="_blank"
            rel="noopener noreferrer"
          >
            Playground github link
          </a>
        </header>
      </div>
    );
  }
  
  export default App;
  