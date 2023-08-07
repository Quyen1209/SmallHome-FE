import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;

export const WrapperStyleColImage = styled(Col)`
  flex-basis: unset;
  display: flex;
`;

export const WrapperStyleNameProduct = styled.h1`
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: 300px;
  line-height: 32px;
  word-break: break-word;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;
export const WrapperPriceProduct = styled.div`
  background: rgb(250, 250, 250);
  border-radius: 4px;
`;
export const WrapperPriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500px;
  padding: 10px;
  margin-top: 10px;
`;

export const WrapperAddresProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsisl;
  }
  span.changeAddress {
    color: rgb(11, 116, 1229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    flex-shrink: 0;
  }
`;
export const WrapperQuanlityProduct = styled.div`
  font-size: 18px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500px;
  padding: 10px;
  margin: 20px 0px;
`;
