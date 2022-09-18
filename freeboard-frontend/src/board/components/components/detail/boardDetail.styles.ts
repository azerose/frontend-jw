import styled from "@emotion/styled";
import { Modal } from "antd";

export const Commentbox = styled.div`
  border-top: 1px solid #bdbdbd;
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const Comment = styled.div`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 500;
`;

export const Textarea = styled.textarea`
  padding: 10px 14px 60px 14px;
  margin-top: 5px;
  border-bottom: none;
`;

export const CommentCount = styled.div`
  border: 1px solid gray;
  padding: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const CommentEnroll = styled.button`
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const CommentWatchBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
  width: 1200px;
  margin: 20px;
`;

export const CommentNameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentName = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 0px 18px 0px 18px;
`;

export const CommentRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-child) {
    border-bottom: 1px solid #bdbdbd;
  }
`;

export const CommentContents = styled.div`
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
  line-height: 24px;
  font-size: 16px;
`;

export const CommentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
  margin-bottom: 20px;
`;

export const CommentWriter = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const WriterInput = styled.input`
  width: 13%;
  margin: 20px 0px;
`;

export const PasswordInput = styled.input`
  width: 13%;
  margin-left: 10px;
`;

export const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const UpdateBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-left: 1px solid gray;
`;

export const PasswordModal = styled(Modal)``;

export const InputPassword = styled.input``;
