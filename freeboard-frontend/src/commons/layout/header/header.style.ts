import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
`;

export const SearchWrapper = styled.div`
  border: 2px solid red;
  margin: 0 40px;
  width: 460px;
`;

export const SearchInput = styled.input`
  width: 400px;
  height: 30px;
  border: none;
  outline-width: 0px;
  margin: 0 15px;
`;

export const SellImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
  cursor: pointer;
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SellDiv = styled.div`
  cursor: pointer;
`;

export const SellerCenterDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1200px;
  align-items: center;
`;

export const SellerCenter = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
`;

export const CategoryImg = styled.svg`
  cursor: pointer;
  &:hover g {
    fill: red;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
`;
