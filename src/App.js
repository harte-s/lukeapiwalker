
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Search from './components/Search';
import DisplayInfo from './components/DisplayInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <br /><br />
        <h1>Luke API Walker</h1>

        <Search></Search>

        <Switch>
          <Route exact path="/:category/:id">
            <DisplayInfo></DisplayInfo>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
