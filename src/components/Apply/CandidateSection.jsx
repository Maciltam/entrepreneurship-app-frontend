import { TextField, Button } from "@mui/material";
import { useFilePicker } from "use-file-picker";

const styles = {
  container: {
    width: "80%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  buttonGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    maxWidth: "15em",
    padding: "0",
  },
};

const CandidateSection = () => {
  const {
    openFilePicker: openCvPicker,
    fileContent: CvContent,
    loading: CvLoading,
  } = useFilePicker({
    accept: ".pdf",
  });
  const {
    openFilePicker: openPhotoPicker,
    fileContent: photoContent,
    loading: photoLoading,
  } = useFilePicker({
    accept: "image/*",
  });

  return (
    <div style={styles.container}>
      <TextField label="Nom" />
      <TextField label="e-mail" />
      <div style={styles.buttonGroup}>
        <Button
          onClick={() => {
            console.log("clicked");
            openPhotoPicker();
          }}
        >
          CV
        </Button>
        <Button
          onClick={() => {
            openCvPicker();
          }}
        >
          Photo
        </Button>
      </div>
    </div>
  );
};

export default CandidateSection;
