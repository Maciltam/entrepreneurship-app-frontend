import { useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import ProjectSection from "./ProjectSection";
import CandidateSection from "./CandidateSection";
import { useFilePicker } from "use-file-picker";
import { FileSizeValidator } from "use-file-picker/validators";
import { postApplication } from "../../utilities/applyInterface";
import { useMediaQuery } from "@mui/material";

const emptyApplication = {
  personal_code: "",
  application_type: "",
  table_data: {
    candidate1_name: "",
    candidate2_name: "",
    candidate1_mail: "",
    candidate2_mail: "",
    short_description: "",
    long_description: "",
    department: "",
  },
  files: {
    candidate1: {
      photo: {
        content: null,
        name: null,
      },
      cv: {
        content: null,
        name: null,
      },
    },
    candidate2: {
      photo: {
        content: null,
        name: null,
      },
      cv: {
        content: null,
        name: null,
      },
    },
  },
};

const styles = {
  container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    outline: "white 3px solid",
    padding: "3em",
    borderRadius: "1em",
    overflow: "scroll",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};
//
const ApplyForm = ({ handleModalClose }) => {
  const [application, setApplication] = useState(emptyApplication);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState(
    "Candidature soumise avec succes",
  );
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleSnackbarClose = () => {
    setSnackbarVisible(false);
  };
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useMediaQuery("(orientation: portrait)");
  const responsiveStyles = isMobile
    ? {
        width: "90%",
        height: "90%",
        padding: "0",
      }
    : {};

  //************************************************set file function
  const setFile = (candidate, type, fileName, file) => {
    setApplication((prevApplication) => {
      prevApplication.files[candidate][type] = {
        content: file,
        name: fileName,
      };
      return prevApplication;
    });
  };

  const checkFileErrors = (error1, error2, error3, error4) => {
    const errorMessages = [];
    let errorIndicator = false;
    if (error1.length) {
      errorMessages.push("Photo candidat 1 trop volumineux (max: 1.5Mb)");
      errorIndicator = true;
    }
    if (error2.length) {
      errorMessages.push("CV candidat 1 trop volumineux (max: 1.5Mb)");
      errorIndicator = true;
    }
    if (error3.length) {
      errorMessages.push("Photo candidat 2 trop volumineux (max: 1.5Mb)");
      errorIndicator = true;
    }
    if (error4.length) {
      errorMessages.push("CV candidat 2 trop volumineux (max: 1.5Mb)");
      errorIndicator = true;
    }

    return { errorMessages, errorIndicator };
  };

  //Candidate 1: ***********************************************

  //Files :
  const {
    openFilePicker: openCv1Picker,
    filesContent: cv1Content,
    errors: cv1Errors,
    loading: cv1Loading,
  } = useFilePicker({
    readAs: "BinaryString",
    validators: [new FileSizeValidator({ maxFileSize: 1.5 * 1024 * 1024 })],
  });
  const {
    openFilePicker: openPhoto1Picker,
    filesContent: photo1Content,
    errors: photo1Errors,
    loading: photo1Loading,
  } = useFilePicker({
    readAs: "BinaryString",
    validators: [new FileSizeValidator({ maxFileSize: 1.5 * 1024 * 1024 })],
  });

  //Name and mail
  const handleName1Change = (newName) => {
    setApplication((prevApplication) => {
      prevApplication.table_data.candidate1_name = newName;
      return prevApplication;
    });
  };
  const handleMail1Change = (newMail) => {
    setApplication((prevApplication) => {
      prevApplication.table_data.candidate1_mail = newMail;
      return prevApplication;
    });
  };

  // Candidate 2: **********************************
  // Name and mail
  const handleName2Change = (newName) => {
    setApplication((prevApplication) => {
      prevApplication.table_data.candidate2_name = newName;
      return prevApplication;
    });
  };

  const handleMail2Change = (newMail) => {
    setApplication((prevApplication) => {
      prevApplication.table_data.candidate2_mail = newMail;
      return prevApplication;
    });
  };
  //Files
  const {
    openFilePicker: openCv2Picker,
    filesContent: cv2Content,
    errors: cv2Errors,
    loading: cv2Loading,
  } = useFilePicker({
    readAs: "BinaryString",
    accept: ".pdf",
    validators: [new FileSizeValidator({ maxFileSize: 1.5 * 1024 * 1024 })],
  });

  const {
    openFilePicker: openPhoto2Picker,
    filesContent: photo2Content,
    errors: photo2Errors,
    loading: photo2Loading,
  } = useFilePicker({
    readAs: "BinaryString",
    accept: "image/*",
    validators: [new FileSizeValidator({ maxFileSize: 1.5 * 1024 * 1024 })],
  });
  //**********************************************
  const handleShortDescriptionChange = (newDesc) => {
    setApplication((prevApplication) => {
      prevApplication.table_data.short_description = newDesc;
      return prevApplication;
    });
  };

  const handleLongDescriptionChange = (newDesc) => {
    setApplication((prevApplication) => {
      prevApplication.table_data.long_description = newDesc;
      return prevApplication;
    });
  };

  return (
    <div style={{ ...styles.container, ...responsiveStyles }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "60%",
          padding: "2em 5em",
        }}
      >
        <FormControl style={{ width: "40%" }}>
          <InputLabel>Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={application.type}
            label="Age"
            onChange={(e) => {
              setApplication({
                ...application,
                table_data: {
                  ...application.table_data,
                  application_type: e.target.value,
                },
              });
            }}
          >
            <MenuItem value="monome">Monome</MenuItem>
            <MenuItem value="binome">Binome</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Code personnel"
          style={{ width: "40%" }}
          onChange={(e) => {
            setApplication({ ...application, personal_code: e.target.value });
          }}
        />
      </div>
      <TextField
        label="Departement"
        style={{ width: "40%" }}
        onChange={(e) => {
          setApplication({
            ...application,
            table_data: {
              ...application.table_data,
              department: e.target.value,
            },
          });
        }}
      />
      <CandidateSection
        handleNameChange={handleName1Change}
        handleMailChange={handleMail1Change}
        selectPhoto={openPhoto1Picker}
        selectCv={openCv1Picker}
      />
      {application.application_type == "binome" && (
        <CandidateSection
          handleNameChange={handleName2Change}
          handleMailChange={handleMail2Change}
          selectPhoto={openPhoto2Picker}
          selectCv={openCv2Picker}
        />
      )}
      <ProjectSection
        setApplication={setApplication}
        handleShortDescriptionChange={handleShortDescriptionChange}
        handleLongDescriptionChange={handleLongDescriptionChange}
      />
      <div className="Send-button-div">
        {isLoading && <CircularProgress />}
        {!isLoading && (
          <Button
            onClick={async () => {
              const { errorMessages, errorIndicator } = checkFileErrors(
                photo1Errors,
                cv1Errors,
                photo2Errors,
                cv2Errors,
              );
              if (errorIndicator) {
                setSnackbarVisible(true);
                setSnackbarText(errorMessages);
                setSnackbarSeverity("warning");
                return;
              }
              if (!photo1Content[0] || !cv1Content[0]) {
                setSnackbarVisible(true);
                setSnackbarText("Fichiers manquants (CV ou photo)");
                setSnackbarSeverity("warning");
                return;
              }
              setFile(
                "candidate1",
                "photo",
                photo1Content[0].name,
                photo1Content[0].content,
              );

              setFile(
                "candidate1",
                "cv",
                cv1Content[0].name,
                cv1Content[0].content,
              );

              if (application.application_type == "binome") {
                setFile(
                  "candidate2",
                  "photo",
                  photo2Content[0].name,
                  photo2Content[0].content,
                );
                setFile(
                  "candidate2",
                  "cv",
                  cv2Content[0].name,
                  cv2Content[0].content,
                );
              }

              setIsLoading(true);
              console.log("Application: ", application);
              const response = await postApplication(application);
              setIsLoading(false);
              let status;
              try {
                status = JSON.parse(response.responseBody).status;
                console.log(status);
              } catch {
                console.log("response: ", response);
              }
              if (status == "unregistered") {
                setSnackbarVisible(true);
                setSnackbarText("Code personnel ou email incorrect");
                setSnackbarSeverity("warning");
              } else if (status == "success") {
                setSnackbarVisible(true);
                setSnackbarText("Inscription reussie");
                setSnackbarSeverity("success");
                setTimeout(() => {
                  handleModalClose();
                }, 3000);
              } else {
                console.log(status);
                setSnackbarVisible(true);
                setSnackbarText("Server error");
                setSnackbarSeverity("error");
              }
            }}
          >
            Envoyer
          </Button>
        )}
        <Snackbar
          open={snackbarVisible}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert
            severity={snackbarSeverity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbarText}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default ApplyForm;
