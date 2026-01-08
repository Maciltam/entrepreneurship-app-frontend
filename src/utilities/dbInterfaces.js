import { Client, Databases, Functions } from "appwrite";

const getAllCandidates = async () => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.VITE_PROJECT_ID);

  const dbInterface = new Databases(client);

  try {
    const response = await dbInterface.listDocuments({
      databaseId: process.env.VITE_DB_ID,
      collectionId: "candidates",
      queries: [],
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

const uploadData = async (data) => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.VITE_PROJECT_ID);

  const functionInterface = new Functions(client);

  try {
    const response = await functionInterface.createExecution(
      process.env.VITE_SUBMISSION_FUNCTION,
      data,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export { getAllCandidates, uploadData };
