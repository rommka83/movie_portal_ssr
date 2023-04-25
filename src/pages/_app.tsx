import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import General from './General';
import '../../styles/index.css';
import '../../styles/_nulling-styles.css';
import '../../styles/iconfonts.css';
import '../../styles/vars.css';
import { store } from 'app/store/store';

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
