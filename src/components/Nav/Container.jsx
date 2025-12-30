import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ApplyModal from "./ApplyModal";
const Nav = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleModalOpen = () => {
    console.log("clicked open modal");
    setModalVisible(true);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgreen",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Tooltip title="Participer" placement="left">
          <IconButton
            style={{ marginRight: "1em", color: "black" }}
            onClick={handleModalOpen}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </div>
      <ApplyModal
        modalVisible={modalVisible}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

export default Nav;
