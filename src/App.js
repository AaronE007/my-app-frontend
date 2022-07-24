import './App.css';
import{BrowserRouter as  Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import MealCard from "./components/RecipeCard"
import MealForm from "./components/RecipeForm"
import MealContainer from './containers/RecipeContainer'
import RestaurantContainer from './containers/RestaurantContainer'
import RestaurantCard from './components/RestaurantCard';



function App() {

  const foodImage = window.location.origin + "/images/Food.jpeg"

  return (
    <div>

        <Navbar />
        <Header title="Food Diary"/>

        <Switch>
          <Route path="/meals/new">
            <MealForm/>
          </Route>

          <Route path="/meals/id">
            <MealCard/>
          </Route>

          <Route path="/meals">
            <MealContainer/>
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
