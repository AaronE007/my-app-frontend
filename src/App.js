import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import RecipeCard from "./components/RecipeCard"
import RecipeForm from "./components/RecipeForm"
import RestaurantContainer from './containers/RestaurantContainer'
import RecipeContainer from './containers/RecipeContainer'
import RestaurantCard from './components/RestaurantCard';
import RestaurantForm from './components/RestaurantForm'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Header title="Food Diary"/>
        <Switch>
          <Route path="/recipes/new">
            <RecipeForm/>
          </Route>
          <Route path="/recipes/id">
            <RecipeCard/>
          </Route>
          <Route path="/recipes">
            <RecipeContainer/>
          </Route>
          <Route path="/restaurant/new">
            <RestaurantForm/>
          </Route>
          <Route path="restaurant/id">
            <RestaurantCard/>
          </Route>
          <Route path='/restaurants'>
            <RestaurantContainer/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
