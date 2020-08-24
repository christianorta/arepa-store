import { Global, css } from "@emotion/core";

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `}
    />
    <Global
      styles={css`
        input,
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          border-style: none;
        }
      `}
    />
    <Global
      styles={css`
        body,
        html {
          background-color: #e0ffec;
          font-size: 18px;
          font-family: Roboto, Open Sans, Segoe UI, sans-serif;
          padding-top: 30px;
        }
      `}
    />
  </>
);

export default GlobalStyles;
