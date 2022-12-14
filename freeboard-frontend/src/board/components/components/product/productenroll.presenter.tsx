import KakaoMap from "../../../../commons/modal/kakaomap";
import * as S from "./productenroll.styles";
import { IEnrollProductUI } from "./productenroll.types";
import "react-quill/dist/quill.snow.css";
import { MapLatState, MapLngState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const EnrollProductUI = ({
  isOpen,
  onSubmitEnroll,
  register,
  onClickHandleCancel,
  onCompleteAddressSearch,
  handleSubmit,
  onClickaddressSearch,
  onChangeFile,
  imgUrl,
  formState,
  isMapOpen,
  onClickMapSearch,
  onClickMapCancel,
  MapAddress,
  isEdit,
  onClickEdit,
  data,
  onChangeContents,
}: IEnrollProductUI) => {
  const [MapLat] = useRecoilState(MapLatState);
  const [MapLng] = useRecoilState(MapLngState);

  return (
    <>
      {isMapOpen && (
        <S.AddressModal
          open={true}
          onOk={onClickMapCancel}
          onCancel={onClickMapCancel}
        >
          <KakaoMap />
        </S.AddressModal>
      )}
      {isOpen && (
        <S.AddressModal open={true} onCancel={onClickHandleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.MainForm
        onSubmit={
          isEdit ? handleSubmit(onClickEdit) : handleSubmit(onSubmitEnroll)
        }
      >
        <S.MainWrapper>
          <S.ProductInfoWrapper>
            <S.ProductInfo>상품이미지</S.ProductInfo>
            <div>
              {new Array(3).fill(1).map((_, index) => {
                return (
                  <>
                    {imgUrl[index] ? (
                      <S.ImgBtn
                        style={{
                          backgroundImage: `url(https://storage.googleapis.com/${imgUrl[index]})`,
                          backgroundColor: "#fff",
                          backgroundSize: "cover",
                        }}
                        key={index}
                        htmlFor={`file${index}`}
                      >
                        +
                        <S.ImgInput
                          type="file"
                          id={`file${index}`}
                          onChange={onChangeFile(index)}
                        />
                      </S.ImgBtn>
                    ) : (
                      <S.ImgBtn key={index} htmlFor={`file${index}`}>
                        +
                        <S.ImgInput
                          type="file"
                          id={`file${index}`}
                          onChange={onChangeFile(index)}
                        />
                      </S.ImgBtn>
                    )}
                  </>
                );
              })}
            </div>
          </S.ProductInfoWrapper>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>제목</S.ProductInfo>
              <S.ProductTitleInput
                type="text"
                placeholder="상품 제목을 입력해주세요."
                maxLength={40}
                defaultValue={data?.fetchUseditem.name || ""}
                readOnly={!!data?.fetchUseditem.name}
                {...register("name")}
              />
              <S.ErrorMsg>{formState.errors.name?.message}</S.ErrorMsg>
            </S.ProductTitleWrapper>
          </div>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>한줄요약</S.ProductInfo>

              <S.RemarksInput type="text" {...register("remarks")} />
              <S.ErrorMsg>{formState.errors.remarks?.message}</S.ErrorMsg>
            </S.ProductTitleWrapper>
          </div>
          <S.AddressWrapper>
            <S.ProductInfo>거래지역</S.ProductInfo>
            <S.AddressBtnWrapper>
              <S.BtnWrapper>
                <S.AddressBtn type="button" onClick={onClickaddressSearch}>
                  주소 검색
                </S.AddressBtn>
                <S.AddressBtn type="button" onClick={onClickMapSearch}>
                  지도 검색
                </S.AddressBtn>
              </S.BtnWrapper>
              <S.AddressInputWrapper>
                <S.AddressInput type="text" readOnly value={MapAddress} />
                <S.LatInput
                  id={"clickLat"}
                  placeholder="위도(LAT)"
                  value={MapLat}
                />
                <S.LngInput
                  id={"clickLng"}
                  placeholder="경도(LNG)"
                  value={MapLng}
                />
              </S.AddressInputWrapper>
            </S.AddressBtnWrapper>
          </S.AddressWrapper>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>상태</S.ProductInfo>
              <S.ConditionWrapper>
                <input type="radio" name="condition" />
                <S.ProductLabel>중고상품</S.ProductLabel>
                <input type="radio" name="condition" />
                <S.ProductLabel>새상품</S.ProductLabel>
              </S.ConditionWrapper>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>교환</S.ProductInfo>
              <S.ConditionWrapper>
                <input type="radio" name="exChange" />
                <S.ProductLabel>교환불가</S.ProductLabel>
                <input type="radio" name="exChange" />
                <S.ProductLabel>교환가능</S.ProductLabel>
              </S.ConditionWrapper>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>가격</S.ProductInfo>
              <S.PriceWrapper>
                <S.PriceInput type="number" {...register("price")} />원
                <S.OutLineStyle /> 배송비 포함
                <S.ErrorMsg>{formState.errors.price?.message}</S.ErrorMsg>
              </S.PriceWrapper>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>설명</S.ProductInfo>
              <ReactQuill
                placeholder="상품 설명을 입력해주세요"
                onChange={onChangeContents}
              />
              {/* <S.ContentsArea
                placeholder="상품 설명을 입력해주세요"
                {...register("contents")}
                defaultValue={data?.fetchUseditem.contents}
              /> */}
              <S.ErrorMsg>{formState.errors.contents?.message}</S.ErrorMsg>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>연관태그</S.ProductInfo>

              <S.TagInput type="text" {...register("tags")} />
              <S.ErrorMsg>{formState.errors.tags?.message}</S.ErrorMsg>
            </S.ProductTitleWrapper>
            <S.EnrollBtnWrapper>
              <S.EnrollBtn type="submit">
                {isEdit ? "상품수정" : "상품등록"}
              </S.EnrollBtn>
            </S.EnrollBtnWrapper>
          </div>
        </S.MainWrapper>
      </S.MainForm>
    </>
  );
};

export default EnrollProductUI;
