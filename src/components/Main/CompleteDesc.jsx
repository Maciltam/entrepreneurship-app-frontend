const styles = {
  container: {
    width: "50%",
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
  },
  head: {
    height: "20%",
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  candidatePhoto: {
    height: "90%",
    aspectRatio: "1/1",
  },
  mainInfo: {
    width: "100%",
    height: "60%",
    padding: "1em 1em",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: "1em",
    right: "1em",
  },
  cvButton: {
    position: "absolute",
    bottom: "1em",
    right: "1em",
  },
};

const CompleteDesc = ({ candidateData }) => {
  return (
    <div style={styles.container}>
      <button
        style={styles.cvButton}
        onClick={() => {
          window.open(candidateData.candidate_1_cv_url);

          window.open("wikipedia.com");
        }}
      >
        Get CVs
      </button>
      <div style={styles.head}>
        <img
          src={candidateData.candidate_1_photo_url}
          style={styles.candidatePhoto}
        />
        {candidateData.candidate_2_photo_url && (
          <img
            src={candidateData.candidate_2_photo_url}
            style={styles.candidatePhoto}
          />
        )}
      </div>
      <div style={styles.mainInfo}>
        <p style={{ color: "white" }}>{candidateData.long_description}</p>
      </div>
    </div>
  );
};

export default CompleteDesc;
