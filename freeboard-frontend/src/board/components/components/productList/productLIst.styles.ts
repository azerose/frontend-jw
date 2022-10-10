import styled from "@emotion/styled";

export const WholeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;

export const ListTitle = styled.h2`
  margin-bottom: 24px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid rgb(220, 219, 228);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  padding: 15px 10px;
  border-top: none;
  border-radius: 0 0 10px 10px;
`;

export const ProductInfoPriceWrapper = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfoName = styled.div`
  padding-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const EnrollTime = styled.div`
  color: rgb(136, 136, 136);
  cursor: pointer;
  font-size: 11px;
`;
