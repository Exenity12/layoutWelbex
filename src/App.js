import './App.css';

import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

import purpleLight from './assets/purpleLight.png'
import redBallLitle from './assets/redBallLittle.png'
import redLight from './assets/redLight.png'
import redBall from './assets/redBall.png'
import purpleBall from './assets/purpleBall.png'

function App() {
  return (
    <div className="app">
      <div className='page'>
        <Header/>
        <Content />
      </div>
      <Footer />

      {/* <img className='app__purple-light' src={purpleLight} alt='error'></img>
       style={{background:`url(${redLight}) no-repeat 0px 0px #0E1014`}}
        style={{background:`url(${purpleBall}) no-repeat 60% 0px`}}
      <img className='app__purple-ball-img' src={purpleBall} alt='error'></img>
      <img className='app__red-ball' src={redBall} alt='error'></img>
      <img className='app__red-ball_little-img' src={redBallLitle} alt='error'></img>
      <img className='app__red-light-img' src={redLight} alt='error'></img> */}
    </div>
  );
}

export default App;
