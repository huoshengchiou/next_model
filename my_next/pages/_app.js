import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Notification from "../components/Notification";
import { NotificationProvider } from "../store/notificationContext";
// eslint-disable-next-line
//render every display page
//Component NextJS會自動設定
function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        {/* <Notification /> */}
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
