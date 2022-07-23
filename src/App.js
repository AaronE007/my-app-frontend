import './App.css';
import{BrowserRouter as  Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import RecipeCard from "./components/RecipeCard"
import RecipeForm from "./components/RecipeForm"
import RecipeContainer from './containers/RecipeContainer'
import RestaurantContainer from './containers/RestaurantContainer'
import RestaurantCard from './components/RestaurantCard';
import RestaurantForm from './components/RestaurantForm'


function App() {

  const foodImage = window.location.origin + "/images/Food.jpeg"

  return (
    <div>
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

          <Route path="/restaurants">
            <RestaurantContainer/>
          </Route>

          <Route path="/">
            <Home foodImage={foodImage} />
          </Route>

        </Switch>
    </div>
  );
}

export default App;
