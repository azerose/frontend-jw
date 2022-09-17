import { ChangeEvent, MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router.js";
import { CREATE_BOARD } from "../detail/boardDetail.query";
import BoardWriteUI from "./board.present";
import { UPDATE_BOARD } from "./board.queries";
import { IBoardProps, IUpdateBoardInput } from "./board.type";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

const Board = (props: IBoardProps) => {
  const router = useRouter();
  const [change, setChange] = useState(false);

  const [ner, setNer] = useState("");
  const [per, setPer] = useState("");
  const [ter, setTer] = useState("");
  const [mer, setMer] = useState("");
  const [aer, setAer] = useState("");
  const [ater, setAter] = useState("");
  const [ler, setLer] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [upadateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [input, setInput] = useState({
    name: "",
    ps: "",
    title: "",
    main: "",
    add: "",
    addo: "",
    addt: "",
    lk: "",
  });

  console.log(input);
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, name: event.target.value });
    if (
      event.target.value &&
      input.ps &&
      input.title &&
      input.main &&
      input.add &&
      input.addo &&
      input.addt &&
      input.lk
    )
      setChange(true);
    setNer("");
  };

  const onChangePs = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, ps: event.target.value });
    if (
      input.name &&
      event.target.value &&
      input.title &&
      input.main &&
      input.add &&
      input.addo &&
      input.addt &&
      input.lk
    )
      setChange(true);
    setPer("");
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, title: event.target.value });
    if (
      input.name &&
      input.ps &&
      event.target.value &&
      input.main &&
      input.add &&
      input.addo &&
      input.addt &&
      input.lk
    )
      setChange(true);
    setTer("");
  };

  const onChangeMain = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput({ ...input, main: event.target.value });
    if (
      input.name &&
      input.ps &&
      input.title &&
      event.target.value &&
      input.add &&
      input.addo &&
      input.addt &&
      input.lk
    )
      setChange(true);
    setMer("");
  };

  const onChangeAdd = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, add: event.target.value });
    if (
      input.name &&
      input.ps &&
      input.title &&
      input.main &&
      event.target.value &&
      input.addo &&
      input.addt &&
      input.lk
    )
      setChange(true);
    setAer("");
  };

  const onChangeAddo = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, addo: event.target.value });
    if (
      input.name &&
      input.ps &&
      input.title &&
      input.main &&
      input.add &&
      event.target.value &&
      input.addt &&
      input.lk
    )
      setChange(true);
  };

  const onChangeAddt = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, addt: event.target.value });
    if (
      input.name &&
      input.ps &&
      input.title &&
      input.main &&
      input.add &&
      input.addo &&
      event.target.value &&
      input.lk
    )
      setChange(true);
    setAter("");
  };

  const onChangeLk = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, lk: event.target.value });
    if (
      input.name &&
      input.ps &&
      input.title &&
      input.main &&
      input.add &&
      input.addo &&
      input.addt &&
      event.target.value
    )
      setChange(true);
    setLer("");
  };
  console.log(input.ps);
  const onClickUpdate = async () => {
    const updateBoardData: IUpdateBoardInput = {
      password: input.ps,
      boardId: String(router.query.id),
      updateBoardInput: {},
    };
    if (input.title) updateBoardData.updateBoardInput.title = input.title;
    if (input.main) updateBoardData.updateBoardInput.contents = input.main;
    try {
      const updateBoardResult = await upadateBoard({
        variables: updateBoardData,
      });
      // const upload = await upadateBoard({
      //   variables: {
      //     updateBoardInput: updateBoardInput,
      //     password: input.ps,
      //     boardId: String(router.query.id),
      //   },
      // });
      router.push(
        `/boards/board-detail/${updateBoardResult?.data?.updateBoard._id}`
      );
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  };

  const onClickSignUp = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: input.name,
            password: input.ps,
            title: input.title,
            contents: input.main,
            youtubeUrl: input.lk,
            boardAddress: {
              zipcode: input.add,
              address: input.addo,
              addressDetail: input.addt,
            },
            images: [],
          },
        },
      });
      // alert(result.data.createBoard.message);
      console.log(result?.data?.createBoard._id);
      router.push(`/boards/board-detail/${result?.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    if (!input.name) {
      setNer("이름을 적어주세요.");
    }
    if (!input.ps) {
      setPer("비밀번호를 입력해주세요.");
    }
    if (!input.title) {
      setTer("제목을 작성해 주세요.");
    }
    if (!input.main) {
      setMer("내용을 작성해주세요.");
    }
    if (!input.add) {
      setAer("주소를 입력해 주세요.");
    }
    if (!input.addt) {
      setAter("상세주소를 입력해 주세요");
    }
    if (!input.lk) {
      setLer("링크를 입력해 주세요.");
    }
    if (
      input.name &&
      input.ps &&
      input.title &&
      input.main &&
      input.add &&
      input.addo &&
      input.addt &&
      input.lk
    ) {
      alert("게시들이 등록되었습니다.");
      console.log(change);
    }
  };

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePs={onChangePs}
      onChangeTitle={onChangeTitle}
      onChangeMain={onChangeMain}
      onChangeLk={onChangeLk}
      onChangeAdd={onChangeAdd}
      onChangeAddo={onChangeAddo}
      onChangeAddt={onChangeAddt}
      onClickSignUp={onClickSignUp}
      ner={ner}
      per={per}
      ter={ter}
      mer={mer}
      aer={aer}
      ater={ater}
      ler={ler}
      change={change}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
};

export default Board;
