import {
  Header,
  Wrapper,
  Wrapper_id,
  NamePasswordDiv,
  InputBox,
  WrapperDivide,
  DefaultInput,
  SecInput,
  ThirdInput,
  FirstButton,
  SecButton,
  Main,
  FourthInput,
  Footer,
  LastButton,
  Error,
} from "../../styles/design.js";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      title
      contents
    }
  }
`;

const Board = () => {
  const [name, setName] = useState("");
  const [ps, setPs] = useState("");
  const [title, setTitle] = useState("");
  const [main, setMain] = useState("");
  const [add, setAdd] = useState("");
  const [addo, setAddo] = useState("");
  const [addt, setAddt] = useState("");
  const [lk, setLk] = useState("");

  const [ner, setNer] = useState("");
  const [per, setPer] = useState("");
  const [ter, setTer] = useState("");
  const [mer, setMer] = useState("");
  const [aer, setAer] = useState("");
  const [ater, setAter] = useState("");
  const [ler, setLer] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNer("");
    }
  };

  const onChangePs = (event) => {
    setPs(event.target.value);
    if (event.target.value !== "") {
      setPer("");
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTer("");
    }
  };

  const onChangeMain = (event) => {
    setMain(event.target.value);
    if (event.target.value !== "") {
      setMer("");
    }
  };

  const onChangeAdd = (event) => {
    setAdd(event.target.value);
    if (event.target.value !== "") {
      setAer("");
    }
  };

  const onChangeAddo = (event) => {
    setAddo(event.target.value);
  };

  const onChangeAddt = (event) => {
    setAddt(event.target.value);
    if (event.target.value !== "") {
      setAter("");
    }
  };

  const onChangeLk = (event) => {
    setLk(event.target.value);
    if (event.target.value !== "") {
      setLer("");
    }
  };

  const onClickSignUp = async (event) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: name,
          password: ps,
          title: title,
          contents: main,
          youtubeUrl: lk,
          boardAddress: {
            zipcode: add,
            address: addo,
            addressDetail: addt,
          },
          images: [],
        },
      },
    });
    console.log(result);
    if (!name) {
      setNer("이름을 적어주세요.");
    }
    if (!ps) {
      setPer("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTer("제목을 작성해 주세요.");
    }
    if (!main) {
      setMer("내용을 작성해주세요.");
    }
    if (!add) {
      setAer("주소를 입력해 주세요.");
    }
    if (!addt) {
      setAter("상세주소를 입력해 주세요");
    }
    if (!lk) {
      setLer("링크를 입력해 주세요.");
    }
    if (name && ps && title && main && add && addt && lk) {
      alert("게시들이 등록되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Header>
        <h3>게시물 등록</h3>
      </Header>
      <Main>
        <Wrapper_id>
          <NamePasswordDiv>
            작성자
            <InputBox>
              <DefaultInput
                onChange={onChangeName}
                placeholder="이름을 적어주세요."
              />
              <Error>{ner}</Error>
            </InputBox>
          </NamePasswordDiv>
          <NamePasswordDiv>
            비밀번호
            <InputBox>
              <DefaultInput
                type="password"
                onChange={onChangePs}
                placeholder="비밀번호를 입력해 주세요."
              />
              <Error>{per}</Error>
            </InputBox>
          </NamePasswordDiv>
        </Wrapper_id>
        <WrapperDivide>
          제목
          <InputBox>
            <DefaultInput
              onChange={onChangeTitle}
              placeholder="제목을 작성해 주세요."
            />
            <Error>{ter}</Error>
          </InputBox>
        </WrapperDivide>
        <WrapperDivide>
          내용
          <InputBox>
            <SecInput
              onChange={onChangeMain}
              placeholder="내용을 작성해주세요."
            />
            <Error>{mer}</Error>
          </InputBox>
        </WrapperDivide>
        <WrapperDivide>
          주소
          <InputBox>
            <ThirdInput onChange={onChangeAdd} placeholder="07250" />
            <FirstButton>우편번호 검색</FirstButton>
            <Error>{aer}</Error>
          </InputBox>
          <InputBox>
            <DefaultInput onChange={onChangeAddo} />
          </InputBox>
          <InputBox>
            <DefaultInput onChange={onChangeAddt} />
            <Error>{ater}</Error>
          </InputBox>
        </WrapperDivide>
        <WrapperDivide>
          유튜브
          <InputBox>
            <DefaultInput
              onChange={onChangeLk}
              placeholder="링크를 작성해주세요."
            />
            <Error>{ler}</Error>
          </InputBox>
        </WrapperDivide>
        <WrapperDivide>
          사진 첨부
          <InputBox>
            <SecButton>+</SecButton>
            <SecButton>+</SecButton>
            <SecButton>+</SecButton>
          </InputBox>
        </WrapperDivide>
      </Main>
      <WrapperDivide>
        메인 설정
        <InputBox>
          <FourthInput type="radio" name="select" />
          유튜브
          <FourthInput type="radio" name="select" />
          사진
        </InputBox>
      </WrapperDivide>
      <Footer>
        <LastButton onClick={onClickSignUp}>등록하기</LastButton>
      </Footer>
    </Wrapper>
  );
};

export default Board;
