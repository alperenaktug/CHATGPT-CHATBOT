import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Bu da varsayılan değer, atlanabilir
});
export default openai;
