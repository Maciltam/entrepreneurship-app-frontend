import { Modal } from "@mui/material";
import Apply from "../Apply/Container";

const ApplyModal = ({ modalVisible, handleModalClose }) => {
  return (
    <Modal open={modalVisible} onClose={handleModalClose}>
      <Apply />
    </Modal>
  );
};

export default ApplyModal;
