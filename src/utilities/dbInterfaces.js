import { Client, Databases, Storage, ID, Functions } from "appwrite";

const getAllCandidates = async () => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6953103d002e7e747a96");

  const dbInterface = new Databases(client);

  try {
    const response = await dbInterface.listDocuments(
      "6954422e003ae9b9b994",
      "candidates",
      [],
    );
    console.log("response inside function: ", response.documents);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const uploadData = async (data) => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6953103d002e7e747a96");

  const functionInterface = new Functions(client);

  try {
    const response = await functionInterface.createExecution(
      "6958cfde000c868fb930",
      data,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export { getAllCandidates, uploadData };
