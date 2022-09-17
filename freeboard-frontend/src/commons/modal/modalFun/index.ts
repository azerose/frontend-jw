import { Modal } from "antd";

export const success = (successmsg: string) => {
  Modal.success({
    content: successmsg,
  });
};

export const errorMsg = (errormsg: string) => {
  Modal.error({
    content: errormsg,
  });
};
