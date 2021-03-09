import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

//render every display page
//Component NextJS會自動設定
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
