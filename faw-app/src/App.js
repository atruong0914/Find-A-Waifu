import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
  <img src='rem.png' className="item" style={{width: '100%'}} alt='rem' autoWidth={true} />,
  <img src='erina.jpg' className="item"  style={{width: '100%'}} alt='erina' autoWidth={true} />,
  <img src='asuna.png' className="item"  style={{width: '100%'}} alt='couple' autoWidth={true} />,
  <img src='umaru.png' className="item"  style={{width: '100%'}} alt='umaru' autoWidth={true} />
]

const App = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

export default App;

/*
import { Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Waifus from './routes/Waifus'
import About from './routes/About'
import Home from './routes/Home'
import Gifts from './routes/Gifts'
import UpdateGift from './components/Update'
import UpdateWaifu from './components/WaifuUpdate'


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route exact path='/about' component = {About} />
          <Route exact path='/waifu' component = {Waifus} />
          <Route exact path='/gift' component = {Gifts} />
          <Route exact path='/gift/:id' component={UpdateGift} />
          <Route exact path='/waifu/:id' component={UpdateWaifu} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
*/