import { useEffect } from "react";
import { setCookie, getCookie } from "../lib/cookie";

import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Notification from "../components/Notification";
import { NotificationProvider } from "../store/notificationContext";
import { HelperContextWrapper } from "../helpers/context";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { subject1 } from "../subjectOutside";

import allReducers from "../reducers";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...[]))
);
let store2;
if (typeof window === "undefined") {
  store2 = "123";
}

// eslint-disable-next-line
//render every display page
//Component NextJS會自動設定
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("apploading");
    setCookie("theme", "dark");
  }, []);
  subject1.next("123");

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

MyApp.getInitialProps = async ({ ctx }) => {
  // const { params, req, res } = context;
  // const result = await getCookie("theme", req.headers.cookie);
  // console.log({ ctx: ctx.req.headers.cookie });
  store2 = "456";
  console.log({ store2 });
  return { props: { username: "sheng" } };
};
