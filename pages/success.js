import styled from "@emotion/styled";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Break from "../components/Break";
import SubmitButton from "../components/SubmitButton";

const Container = styled.div`
  width: 500px;
  margin: 30px auto 0 auto;
  text-align: center;
  color: #2ebf62;
`;

const Message = styled.div`
  margin-top: 60px;
  font-size: 40px;
  font-family: Roboto, Open Sans, Segoe UI, sans-serif;
`;

const Success = () => {
    return (
      <Wrapper title="Success">
        <Container>
            <Message>
                Congratulations!
            </Message>
            <Break></Break>
            <Link href="/">
            <SubmitButton>Keep shopping</SubmitButton>
            </Link>
        </Container>
      </Wrapper>
    );
};
export default Success