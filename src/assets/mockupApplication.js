import { Functions, Client } from "appwrite";

const postApplication = async (application) => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6953103d002e7e747a96");

  const functionInterface = new Functions(client);

  const response = await functionInterface.createExecution(
    "6958cfde000c868fb930",
    JSON.stringify(application),
    false,
    undefined,
    undefined,
    {
      Origin: "*",
      "Access-Control-Allow-Origin": "*",
    },
  );
  return response;
};

export { postApplication };
