import axios from 'axios';

export const getCats = () => {
  return (dispatch) => {
    axios.get('/api/categories')
      .then( res => dispatch({ type: 'CATS', categories: res.data }))
  }
};//end of getCats

export default ( state = [], action ) => {
    switch(action.type) {
      case 'CATS':
        return action.categories
      case 'ADD_CATS':
        return [action.category, ...state];
      default:
        return state
    }
}