import * as yup from "yup";

export const Myyup = yup.object({
  name: yup.string().required("작성자를 입력해주세요!"),
  remarks: yup.string().max(15, "15글자 이하로 작성해주세요"),
  contents: yup
    .string()
    .max(40, "40글자 이하로 작성해주세요")
    .required("상품설명을 추가해주세요"),
  price: yup.number().required("가격은 필수값입니다"),
  tags: yup.string(),
  useditemAddress: yup.object().required(),
  images: yup.string().required(),
});
