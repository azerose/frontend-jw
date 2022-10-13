import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router.js";
import { CREATE_BOARD } from "../detail/boardDetail.query";
import BoardWriteUI from "./board.present";
import { UPDATE_BOARD, UPLOAD_FILE } from "./board.queries";
import { IBoardProps, IUpdateBoardInput } from "./board.type";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { errorMsg, success } from "../../../../commons/modal/modalFun";
import { checkValidationFile } from "../../../commons/validation/validationFile";
import { Modal } from "antd";

const Board = (props: IBoardProps) => {
  const router = useRouter();
  const [change, setChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [ner, setNer] = useState("");
  const [per, setPer] = useState("");
  const [ter, setTer] = useState("");
  const [mer, setMer] = useState("");
  const [ater, setAter] = useState("");
  const [ler, setLer] = useState("");
  const [imgUrl, setImgUrl] = useState(["", "", ""]);

  console.log(imgUrl);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
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

  // console.log(input);
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

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: any) => {
    setInput({ ...input, addo: data.address, add: data.zonecode });
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (props.data) {
      setImgUrl(props.data?.fetchBoard.images);
    }
  }, [props.data]);
  // console.log(imgUrl);

  const onClickUpdate = async () => {
    const updateBoardData: IUpdateBoardInput = {
      password: input.ps,
      boardId: String(router.query.id),
      updateBoardInput: {},
    };
    if (input.title) updateBoardData.updateBoardInput.title = input.title;
    if (input.main) updateBoardData.updateBoardInput.contents = input.main;
    if (imgUrl) updateBoardData.updateBoardInput.images = imgUrl;
    try {
      const updateBoardResult = await upadateBoard({
        variables: updateBoardData,
      });
      router.push(
        `/boards/board-detail/${updateBoardResult?.data?.updateBoard._id}`
      );
    } catch (err) {
      if (err instanceof Error) errorMsg(err.message);
    }
  };

  const onClickSignUp = async (event: MouseEvent<HTMLButtonElement>) => {
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
              images: imgUrl,
            },
          },
        });
        // alert(result.data.createBoard.message);
        success("게시글 등록에 성공하였습니다");
        console.log(result?.data?.createBoard._id);
        router.push(`/boards/board-detail/${result?.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) errorMsg(error.message);
      }
    }
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.currentTarget.className[0]);
      console.log(imgUrl);
      const file = event.target.files?.[0];
      const isValid = checkValidationFile(file);
      if (!isValid) return;

      try {
        const result = await uploadFile({ variables: { file } });
        let newImgUrls = [...imgUrl];
        newImgUrls[index] = result.data?.uploadFile.url;
        setImgUrl(newImgUrls);
        console.log(result);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    };

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePs={onChangePs}
      onChangeTitle={onChangeTitle}
      onChangeMain={onChangeMain}
      onChangeLk={onChangeLk}
      onChangeAddt={onChangeAddt}
      onClickSignUp={onClickSignUp}
      onClickUpdate={onClickUpdate}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickHandleCancel={onClickHandleCancel}
      add={input.add}
      addo={input.addo}
      ner={ner}
      per={per}
      ter={ter}
      mer={mer}
      ater={ater}
      ler={ler}
      change={change}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      onChangeFile={onChangeFile}
      imgUrl={imgUrl}
    />
  );
};

export default Board;
