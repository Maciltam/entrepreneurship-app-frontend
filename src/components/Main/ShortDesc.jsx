import { Modal } from "@mui/material";
import "./shortDesc.css";

import CompleteDesc from "./CompleteDesc";
import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "2em",
  marginBottom: "3em",
  borderRadius: "1em",
  padding: "1em 2em",
  width: "90%",
  height: "7em",
  position: "relative",
};

const subcontainerStyle = {
  width: "80%",
};

const imageStyle = {
  height: "90%",
  aspectRatio: "1 / 1",
};

const buttonStyle = {
  position: "absolute",
  right: "1em",
  bottom: "1em",
};

const ShortDesc = ({ candidateData }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <div style={containerStyle} className="short-desc">
      <img src={candidateData.candidate_1_photo_url} style={imageStyle} />
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
