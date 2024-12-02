require("dotenv").config();
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

async function main() {
  const msg = await anthropic.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 1000,
  temperature: 0,
    messages: [{
        role: "user",
        content: "Hello, how are you?"
    }],
  });
  console.log(msg);
}

main();
