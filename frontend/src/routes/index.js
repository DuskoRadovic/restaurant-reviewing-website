import React from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from 'react-router'
import history from '../history'
import Home from "../components/home";
import SignIn from "../components/registration/signIn/index.js";
import SignUp from "../components/registration/SignUp/";
import Congratulation from "../components/registration/Congratulation/index.js";
import Verification from "../components/registration/Verification";
import CreateRestaurant from "../components/profile/restaurants/CreateRestaurant";
import Profile from "../components/profile/userProfile"
import Restaurants from "../components/search/restaurants/index";
import RestaurantPage from "../components/search/restaurants/restaurantPage";
import RestaurantPageCreateReview from "../components/search/restaurants/restaurantPageWriteReview";


function OurRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restaurant-page/:id/" exact component={RestaurantPage} />
        <Route path="/sign-in/" exact component={SignIn} />
        <Route path="/sign-up/" exact component={SignUp} />
        <Route
          path="/sign-up/congratulation"
          exact
          component={Congratulation}
        />
        <Route path="/sign-up/verification" exact component={Verification} />
        <Route path="/create-restaurant/" exact component={CreateRestaurant} />
        <Route path="/profile/" exact component={Profile} />
        <Route path="/restaurants" exact component={Restaurants} />
        <Route path="/restaurants/review/:id/" exact component={RestaurantPageCreateReview} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default OurRouter;
