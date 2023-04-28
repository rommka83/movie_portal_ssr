import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import General from './General';
import '../../styles/index.css';
import '../../styles/_nulling-styles.css';
import '../../styles/iconfonts.css';
import '../../styles/vars.css';
import { store } from 'app/store/store';
import { useRouter } from 'next/router';
import { Loader } from 'shared/ui/Loader';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      setIsLoading(true);
    };

    const handleStop = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <General>
        {isLoading && <Loader />}
        <Component {...pageProps} />
      </General>
    </Provider>
  );
}

export default MyApp;
