import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router.js";
import { CREATE_BOARD } from "../detail/boardDetail.query";
import BoardWriteUI from "../main/board.present";

const Board = () => {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [ner, setNer] = useState("");
  const [per, setPer] = useState("");
  const [ter, setTer] = useState("");
  const [mer, setMer] = useState("");
  const [aer, setAer] = useState("");
  const [ater, setAter] = useState("");
  const [ler, setLer] = useState("");
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
  const onChangeName = (event) => {
    setInput({ ...input, name: event.target.value });
    if (event.target.value !== "") {
      setNer("");
    }
  };

  const onChangePs = (event) => {
    setInput({ ...input, ps: event.target.value });
    if (event.target.value !== "") {
      setPer("");
    }
  };

  const onChangeTitle = (event) => {
    setInput({ ...input, title: event.target.value });
    if (event.target.value !== "") {
      setTer("");
    }
  };

  const onChangeMain = (event) => {
    setInput({ ...input, main: event.target.value });
    if (event.target.value !== "") {
      setMer("");
    }
  };

  const onChangeAdd = (event) => {
    setInput({ ...input, add: event.target.value });
    if (event.target.value !== "") {
      setAer("");
    }
  };

  const onChangeAddo = (event) => {
    setInput({ ...input, addo: event.target.value });
  };

  const onChangeAddt = (event) => {
    setInput({ ...input, addt: event.target.value });
    if (event.target.value !== "") {
      setAter("");
    }
  };

  const onChangeLk = (event) => {
    setInput({ ...input, lk: event.target.value });
    if (event.target.value !== "") {
      setLer("");
    }
  };

  const onClickSignUp = async (event) => {
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
      console.log(result.data.createBoard.id);
      router.push(`/boards/board-detail/${result.data.createBoard._id}`);
    } catch (error) {
      console.log(error.message);
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
      input.addt &&
      input.lk
    ) {
      alert("게시들이 등록되었습니다.");
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
    />
  );
};

export default Board;
