export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-notes-app-upload4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://mis8yjnh15.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_BpRZavUzW",
    APP_CLIENT_ID: "6b43snr6bkqg6nhn8f4o0rf162",
    IDENTITY_POOL_ID: "us-east-1:7c99b684-e5fc-493a-a1af-6a2421f37160"
  }
};
