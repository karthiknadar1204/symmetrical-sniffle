require("dotenv").config();
import Anthropic from "@anthropic-ai/sdk";
import { getSystemPrompt } from "./prompts";

const anthropic = new Anthropic();

async function main() {
  anthropic.messages
    .stream({
      messages: [
        {
          role: "user",
          content:
            "For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.\n\nBy default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.\n\nUse icons from lucide-react for logos.\n\nUse stock photos from unsplash where appropriate, only valid URLs you know exist. Do not download the images, only link to them in image tags.\n\n",
        },
        {
          role: "user",
          content: "create a simple todo app in typescript.",
        },
      ],
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: getSystemPrompt(),
    })
    .on("text", (text) => {
      console.log(text);
    });
}

main();
