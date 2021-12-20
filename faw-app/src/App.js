import { Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Waifus from './routes/Waifus'
import About from './routes/About'
import Home from './routes/Home'
import Gifts from './routes/Gifts'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/waifu' component = {Waifus} />
          <Route path = '/gift' component = {Gifts} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
