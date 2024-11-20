import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

// dotenv.config({ path: "../../.env" });
dotenv.config();

export const mailtrapClient = new MailtrapClient({
  endpoint: process.env.MAILTRAP_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
});

// export const mailtrapClient = new MailtrapClient({
//   endpoint: "https://send.api.mailtrap.io/api/send",
//   token: "42906cc90ad4c3cdad51cee8c38e02be", // Replace this with your actual token
// });

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "patrick",
};
const recipients = [
  {
    email: "iampratik70@gmail.com",
  },
];
