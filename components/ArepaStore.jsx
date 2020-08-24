import styled from "@emotion/styled";

import ProductImage from "./ProductImage";
import Basket from "./Basket";

const Store = styled.div`
  padding: 10px 20px 20px 20px;
`;

const StoreName = styled.h1`
  font-size: 18px;
  color: #fff;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 15px;
`;

const ArepaStore = () => {
  return (
    <Store>
      <StoreName>I ♡ Arepas Stickers</StoreName>
      <ProductImage src="./iheartarepas.png" width="200px"></ProductImage>
      <Basket>
        Order Now USD $2.50
      </Basket>
    </Store>
  );
};

export default ArepaStore;
