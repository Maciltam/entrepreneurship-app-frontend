import { TextField, Button } from "@mui/material";

const styles = {
  container: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "10%",
    height: "10em",
    padding: "0",
  },
};

const CandidateSection = ({
  handleNameChange,
  handleMailChange,
  selectPhoto,
  selectCv,
}) => {
  return (
    <div style={styles.container}>
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "10em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextField
            label="Nom Prenom"
            style={{ width: "80%" }}
            onChange={(e) => {
              handleNameChange(e.target.value);
            }}
          />
          <TextField
            label="e-mail"
            style={{ width: "80%" }}
            onChange={(e) => {
              handleMailChange(e.target.value);
            }}
          />
        </div>

        <div style={styles.buttonGroup}>
          <Button
            onClick={() => {
              selectCv();
            }}
          >
            CV
          </Button>
          <Button
            onClick={() => {
              selectPhoto();
            }}
          >
            Photo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CandidateSection;
