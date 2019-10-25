const redux = require('redux');
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux Action'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

const initialState = {
  numofCakes: 10,
  numofIceCreams: 20
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1
      }
    case BUY_ICECREAM:
    return {
      ...state,
      numofIceCreams: state.numofIceCreams - 1
    }
    default:
      return state
  }
}

const store = createStore(reducer);
console.log('Init state', store.getState());
const unsubcribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubcribe();