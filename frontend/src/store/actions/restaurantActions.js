import Axios from "../../axios";
import history from '../../history'

export const top4RestaurantsAction = () => async (dispatch) => {
  try {
    const response = await Axios.get("home/");
    console.log(response, 'response plain')
    console.log(response.data.results, "responseee 4 rated");
    dispatch({ type: "TOP_4_RESTAURANTS", payload: response.data.results });
    return response;
  } catch (error) {
    console.log("Error fetching Top 4 Restaurants>", error);
    return error;
  }
};

export const searchAllRestaurantsAction = (search_string, viewType) => async (dispatch) => {
  try {
    console.log(`${search_string}/`, 'full url')
    const response = await Axios.get(`${search_string}`);
    if(viewType === 'USERS') {
      console.log('on users type', response)
      dispatch({type: 'SEARCH_USERS', payload: response.data.results});
    } else {
      dispatch({type: 'SEARCH_RESTAURANTS_BY_CATEGORY', payload: response.data.results});
      history.push('/restaurants/')
    }
      return response
  } catch (error) {
      console.log('Error in searching Restaurants>', error);
      return error
  }
};
