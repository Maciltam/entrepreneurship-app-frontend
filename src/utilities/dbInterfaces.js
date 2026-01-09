import { Client, Databases, Functions, TablesDB } from "appwrite";

const getAllCandidates = async () => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(import.meta.env.VITE_PROJECT_ID);

  const dbInterface = new TablesDB(client);

  try {
    const response = await dbInterface.listRows({
      databaseId: import.meta.env.VITE_DB_ID,
      tableId: import.meta.env.VITE_DB_COLLECTION_ID,
      queries: [],
    });

    return response;
  } catch {
    console.log("couldn't connect to database");
  }
};

const uploadData = async (data) => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(import.meta.env.VITE_PROJECT_ID);

  const functionInterface = new Functions(client);

  try {
    const response = await functionInterface.createExecution(
      import.meta.env.VITE_SUBMISSION_FUNCTION,
      data,
    );
    return response;
  } catch {
    console.log("An error of some sort");
  }
};

export { getAllCandidates, uploadData };
