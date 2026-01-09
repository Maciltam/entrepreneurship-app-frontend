import { useMediaQuery, Tooltip } from "@mui/material";

const styles = {
  container: {
    width: "40%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "2em 2em",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    outline: "3px solid white",
    borderRadius: "1em",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    overflow: "scroll",
  },
  head: {
    height: "20%",
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  candidatePhoto: {
    maxWidth: "40%",
    maxHeight: "10em",
    aspectRatio: "1/1",
    borderRadius: "5%",
  },
  mainInfo: {
    width: "100%",
    padding: "1em 1em",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: "1em",
    right: "1em",
  },
  cvButton: {
    alignSelf: "flex-end",
  },
};

const openToCv = async (cv) => {
  window.open(cv);
};

const CompleteDesc = ({ candidateData }) => {
  console.log("application type", candidateData);
  const isMobile = useMediaQuery("(orientation: portrait)");
  const responsiveStyles = isMobile
    ? {
        container: {
          width: "85%",
          height: "90%",
          padding: "0.5em",
        },
      }
    : {};
  return (
    <div style={{ ...styles.container, ...responsiveStyles.container }}>
      <div style={styles.head}>
        <Tooltip title={candidateData.candidate1_name} placement="bottom">
          <img
            src={candidateData.candidate1_photo_url}
            style={styles.candidatePhoto}
          />
        </Tooltip>
        {candidateData.application_type == "binome" && (
          <Tooltip title={candidateData.candidate2_name} placement="bottom">
            <img
              src={candidateData.candidate2_photo_url}
              style={styles.candidatePhoto}
            />
          </Tooltip>
        )}
      </div>
      <div style={styles.mainInfo}>
        <p style={{ color: "white" }}>{candidateData.long_description}</p>
      </div>
      <button
        style={styles.cvButton}
        onClick={() => {
          const url1 = candidateData.candidate1_cv_url;
          const url2 = candidateData.candidate2_cv_url;
          console.log(url1, "\n", url2);
          window.open(url1, "_blank");
          setTimeout(() => {
            window.open(url2, "_blank");
          }, 500);
        }}
      >
        Voir CVs
      </button>
    </div>
  );
};

export default CompleteDesc;
