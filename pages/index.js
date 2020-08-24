import React, { useState } from 'react';
import Router from "next/router";

import Wrapper from "../components/Wrapper";
import Break from "../components/Break";
import ArepaStore from "../components/ArepaStore";
import CheckoutForm from "../components/CheckoutForm";

export default function App() {
    return (
      <Wrapper title="Arepa Shop">
        <Break>
          <ArepaStore/>
        </Break>
        <CheckoutForm
          onSuccessfulCheckout={() => Router.push("/success")}
        />
      </Wrapper>
    );
};
