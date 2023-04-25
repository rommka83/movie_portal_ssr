import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../app/store';
import General from './General';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <General>
        <Component {...pageProps} />
      </General>
    </Provider>
  );
}

export default MyApp;
