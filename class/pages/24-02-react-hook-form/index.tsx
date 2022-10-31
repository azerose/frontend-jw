import { useForm } from "react-hook-form";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm<IFormData>();

  const onCLickSubmit = (data: IFormData) => {
    console.log(data);
  };

  console.log("리렌더링 되나요?");

  return (
    <>
      <form onSubmit={handleSubmit(onCLickSubmit)}>
        작성자:
        <input type="text" {...register("writer")} />
        제목:
        <input type="text" {...register("title")} />
        내용:
        <input type="text" {...register("contents")} />
        <button>등록하기</button>
      </form>
    </>
  );
}

// <button type="button">나만의 버튼</button>
// <button type="submit">보내기</button>//기본값
// <button type="reset">지우기</button>
