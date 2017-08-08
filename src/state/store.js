import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "State/reducers";

const middleware = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  if (module.hot) {
    module.hot.accept("State/reducers", () => {
      const nextRootReducer = require("State/reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

const store = configureStore();

const subscribe = (select, onChange) => {
  let currentState;

  function handleChange() {
    const nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  const unsubscribe = store.subscribe(handleChange);
  return unsubscribe;
};

export { subscribe };

export default store;
