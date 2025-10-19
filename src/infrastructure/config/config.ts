import dotenv from "dotenv";

dotenv.config();

export const config = {
  gitHubToken: process.env.GITHUB_TOKEN,
  port: process.env.PORT || 3000,
};
