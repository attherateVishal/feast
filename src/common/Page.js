import styled from "styled-components";
import {Device} from "./Device";

const Page = styled.div`
  margin: auto;
  /* font-family: "sans-serif"; */
  text-align: center;
  overflow: hidden;

  @media ${Device.mobileS} {
    max-width: 350px;

  }

  @media ${Device.mobileM} {
    max-width: 400px;
  }

  @media ${Device.mobileL} {
    max-width: 450px;
  }
`;

export default Page;
