import axios from 'axios';

export const getCards = () => {
  return (dispatch) => {
    axios.get(`/api/cards`)
      .then( res => dispatch({ type: 'CARDS', cards: res.data }))
  }
};//end of getCats

export default ( state = [], action ) => {
    switch(action.type) {
      case 'CARDS':
        return action.cards;
      case 'ADD_CARDS':
        return [action.card, ...state];
      default:
        return state
    }
}