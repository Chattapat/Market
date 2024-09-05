// _app.tsx
//import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current route is the index page
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="Description of my app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {!isHomePage && <Navbar />} {/* Show Navbar only if not on the index page */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

