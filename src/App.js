import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className='page'>
        <Header/>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;