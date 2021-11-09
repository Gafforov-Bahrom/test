import {Switch , Route} from 'react-router-dom'
import Blog from './Blog';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Blog}></Route>
        <Route exact path="/:id" component={Item}></Route>
      </Switch>

    </div>
  );
}

export default App;
