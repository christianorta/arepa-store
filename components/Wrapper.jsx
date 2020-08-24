import Head from "next/head";
import GlobalStyles from "./GlobalStyles";

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51HGDkmHBrl2UaEgaiqpHBaBy8P0JvHMYejz6tLtjM4YtkwHpTnAZ3Lwt7tZw1DXxnsWe4HP5zPxo3Jz4zfSzD4m900Wy1bl11N");

const Wrapper = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Elements stripe={stripePromise}>
      {children}
    </Elements>      
    </>
  );
};

export default Wrapper;
