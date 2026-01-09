import { Functions, Client } from "appwrite";

const postApplication = async (application) => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(import.meta.env.VITE_PROJECT_ID);

  const functionInterface = new Functions(client);

  const response = await functionInterface.createExecution(
    import.meta.env.VITE_SUBMISSION_FUNCTION,
    JSON.stringify(application),
    false,
  );
  return response;
};

export { postApplication };
