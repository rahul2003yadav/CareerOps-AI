import { Inngest } from "inngest";

//create a client to send and receive events
export const inngest = new Inngest({
  id: "career-ops-ai",
  name: "career-ops-ai",
  credentials: {
    gemini: {
        apiKey: process.env.GEMINI_API_KEY,
    }
  }
});
