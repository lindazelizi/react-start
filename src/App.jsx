import logo from './logo.svg';
import './App.css';
import HeaderContent from "./component/HeaderContent"
import LearnLink from './component/LearnLink';
import Btn from './component/Btn';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HeaderContent/>
        <LearnLink/>
        <Btn/>
      </header>
    </div>
  );
}

export default App;
