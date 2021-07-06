import App from 'next/app';
import '../styles/globals.css';
import '../styles/fonts/fontawesome/css/all.min.css';
import '../styles/css/bootstrap3661.css';
import '../styles/css/ui3661.css';
import '../styles/css/responsive3661.css';
import cookies from "next-cookies";

import UserProvider from "../context/UserContext";
import Layout from "../components/layout";
import {wrapper} from '../store';

function MyApp({ Component, pageProps, isAuthenticated }: any) {
  return(
  <UserProvider isAuthenticated={isAuthenticated}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </UserProvider>
  )
}

MyApp.getInitialProps = async (context) => {
  let isAuthenticated = false;

  // WARNING - We only check if a cookie called token is present
  // We do not verify the token on the server at this point
  // In this case, it might be fine since we only need the auth state
  // for UI purposes. Any sensitive data fetch is secured separately
  const { token } = cookies(context.ctx);
  if (token) {
    isAuthenticated = true;
  }

  const appProps = await App.getInitialProps(context);
  return { ...appProps, isAuthenticated };
};

export default wrapper.withRedux(MyApp);