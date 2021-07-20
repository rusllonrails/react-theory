import logo from './logo.svg';
import './App.css';

function Car(props) {
  return (
    <div className='car'>
      <strong>{props.name}</strong>
      <br />
      <i>Year: {props.year}</i>
    </div>
  );
}

function CarsList() {
  return (
    <div>
      <Car name='Ford' year='2013' />
      <Car name='Toyota' year='2014' />
      <Car name='Honda' year='2011' />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CarsList />
    </div>
  );
}

export default App;
