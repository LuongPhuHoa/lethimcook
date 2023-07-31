import '../styles/globals.css';
// eslint-disable-next-line import/no-extraneous-dependencies
// The line `import 'bootstrap/dist/css/bootstrap.min.css';` is importing the
// CSS file for the
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '@/components/layout/Layout';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Toaster} from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      cacheTime : 1 * 60 * 60 * 1000,
      staleTime : 1 * 60 * 60 * 1000,
    },
  },
});

function MyApp({Component, pageProps}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
  position = "bottom-right"
        toastOptions={
    {
      toastOptions: {
        style: {
          fontSize: '1.4rem',
        },
      },
    }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
