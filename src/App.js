import logo from './assets/logo.png';
import TG from './assets/telegram.svg';
import TW from './assets/twitter.svg';
import sutella from './assets/sutella.png';
import './App.css';

function App() {

  const ticker = "$SUTELLA"

  return (
    <div className="App">
      <div className="section1">
        <div className="logoBlock">
          <img alt="logo" className="logo" src={logo}/>
        </div>
        <div className="mainImgBlock">
          <img alt="sutella" src={sutella} />
        </div>
        <button className="button">{ticker}</button>
        <div className="socialsBlock">
          <a href="" target="_blank" rel="noopener noreferrer"><img alt="telegram" src={TG} /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><img alt="twitter" src={TW} /></a>
        </div>
      </div>
      <div className="section2">
        
      </div>
    </div>
  );
}

export default App;
