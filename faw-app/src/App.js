import { Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Waifus from './routes/Waifus'
import About from './routes/About'
import Home from './routes/Home'
import Gifts from './routes/Gifts'
import UpdateGift from './components/Update'

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
        </Switch>
      </main>
    </div>
  );
}

export default App;
