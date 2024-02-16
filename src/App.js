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
          <a href="https://t.me/SutellaOnSol" target="_blank" rel="noopener noreferrer"><img alt="telegram" src={TG} /></a>
          <a href="https://twitter.com/SutellaSol" target="_blank" rel="noopener noreferrer"><img alt="twitter" src={TW} /></a>
        </div>
      </div>
      <div className="section2">
        <h1 className="heading1">the <span className="red">only</span> thing <span className="red">you need</span> is <br/><span className="red">pancakes</span> with <span className="red">sutella</span></h1>
      </div>
      <div className="section3">
        <h2 className="heading2">T<span className="red">OKENOMICS</span></h2>
        <h3 className="subheading">SUPPLY: <span className="red">8,888,888</span></h3>
        <h3 className="subheading">SYMBOL: <span className="red">{ticker}</span></h3>
        <div className="outFlex">
          <div></div>
        <div className="flexBox">
          <h3 className="subheading">MARKETING: <span className="red">10%</span></h3>
          <h3 className="subheading">CREW: <span className="red">8%</span></h3>
        </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
