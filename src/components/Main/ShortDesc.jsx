import { Modal, Tooltip } from "@mui/material";
import "./shortDesc.css";

import CompleteDesc from "./CompleteDesc";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "3em",
  borderRadius: "1em",
  padding: "0.5em 0.5em",
  width: "90%",
  height: "7em",
  position: "relative",
  overflow: "hidden",
};

const subcontainerStyle = {
  width: "80%",
  height: "80%",
  display: "flex",
  alignItems: "center",
};

const imageStyle = {
  maxHeight: "60%",
  maxWidth: "20%",
  borderRadius: "5%",
};

const buttonStyle = {
  position: "absolute",
  right: "1em",
  bottom: "1em",
};

const ShortDesc = ({ candidateData }) => {
  const isMobile = useMediaQuery("(orientation: portrait)");
  const mobileStyles = isMobile
    ? {
        containerStyle: {
          height: "15em",
        },
        button: {
          opacity: "0.5",
        },
      }
    : {};

  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <div
      style={{ ...containerStyle, ...mobileStyles.containerStyle }}
      className="short-desc"
    >
      <Tooltip title={candidateData.candidate1_name} placement="right">
        <img src={candidateData.candidate1_photo_url} style={imageStyle} />
      </Tooltip>

      <div className="short-desc-sub-container" style={subcontainerStyle}>
        <p>{candidateData.short_description}</p>
        <button
          style={buttonStyle}
          onClick={() => {
            setModalVisibility(true);
          }}
        >
          Plus
        </button>
      </div>
      <Modal
        open={modalVisibility}
        onClose={() => {
          setModalVisibility(false);
        }}
      >
        <CompleteDesc candidateData={candidateData} />
      </Modal>
    </div>
  );
};

export default ShortDesc;
