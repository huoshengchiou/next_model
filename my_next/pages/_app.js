import { useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Notification from "../components/Notification";
import { NotificationProvider } from "../store/notificationContext";
import { HelperContextWrapper } from "../helpers/context";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import allReducers from "../reducers";

// console.log({ window });

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...[]))
);
// eslint-disable-next-line
//render every display page
//Component NextJS會自動設定
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("apploading");
  }, []);
  return (
    <NotificationProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Provider store={store}>
          <HelperContextWrapper>
            <Component {...pageProps} data={4555645} />
          </HelperContextWrapper>
        </Provider>
        {/* <Notification /> */}
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
