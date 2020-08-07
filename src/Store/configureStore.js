import { createStore, applyMiddleware, compose } from 'redux';
//import thunk from 'redux-thunk';

// Axios middleware
import { multiClientMiddleware } from 'redux-axios-middleware';
import { clients } from './axiosClients';

// const thunk = store => next => action => 
//   typeof action === 'function' ?
//     (action(store.dispatch, store.getState) ,
//     console.log('thunk...1')):
//    ( next(action),
//    console.log('thunk...2'))



const thunk = store => next => action => {
  console.log('action', action)
  if(typeof action === 'function'){
    console.log('thunk...1')
    return (action(store.dispatch, store.getState))
}else{
  console.log('thunk...2')
  return next(action)
}
}

function logger({getState}) {
  return (next) => (action) => {
    console.log('dispatching', action)
    let val = next(action)
    console.log('state', getState())
    return val
  }
}



const enhancedComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(
  thunk,
  logger, 
  multiClientMiddleware(clients)
);

export default rootReducer => createStore(
  rootReducer(),
  enhancedComposer(middleware)
);