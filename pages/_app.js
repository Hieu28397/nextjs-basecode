import { Provider } from 'react-redux';

import rootSagas from '../src/redux/rootSaga';
import store, { sagaMiddleware } from '../src/redux/store';

sagaMiddleware.run(rootSagas);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;