import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDB();
      const newPrompt = new Prompt({
        creator:"hello",
        prompt:prompt,
        tag:tag
      });
      console.log("_",userId);
      console.log("prompt",newPrompt);
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("failed to create a new prompt", { status: 500 });
  }
};