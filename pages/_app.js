// Design and images
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
// Libraries
import Head from "next/head";
import { useEffect } from "react";
// Components
import Layout from "@/components/Layout";
// Outside data

/////////////////////////////

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Shout Network</title>
        <meta name="description" content="Text" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
