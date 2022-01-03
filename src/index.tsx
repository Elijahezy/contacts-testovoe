import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
import createAPI from './services/api';
import { requireAuthorization } from './store/action';
import { reducer } from './store/reducer';
import GlobalStyles from './styles/global-styles'
import { AuthorizationStatus } from './consts/consts';
import { redirect } from './store/middlewares/redirect';
import { checkAuthorizationStatus, fetchContactsAction } from './store/api-actions';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
})

store.dispatch(checkAuthorizationStatus());
store.dispatch(fetchContactsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


