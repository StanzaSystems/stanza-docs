import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

const GTM_ID = "G-KVKFLYE9GM";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stanza Docs</title>
        <meta name="description" content="Stanza Docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics gaId={GTM_ID} />
      <Component {...pageProps} />;
    </>
  );
}
