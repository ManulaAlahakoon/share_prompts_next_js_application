import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();

    //Lamda function .... Die after end
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt),{status:201}) // status - created
    } catch (error) {
        return new Response("Failed to create a new prompt",{status:500}) //status - failed error
    }
}