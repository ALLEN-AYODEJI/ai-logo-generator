const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const fs = require("node:fs");
const mime = require("mime-types");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-pro-exp-03-25",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseModalities: [
  ],
  responseMimeType: "application/json",
};


 export const AiDesignIdea = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Based on Logo of type Modern Mascot Logo Generate a text prompt to create logo for a Logo/Brand Name: Grace Space with description: Tech Company for Christians and referring to prompt: Create vibrant logos featuring a friendly and animated character. Give me 4/5 suggestion of logo ideas (each idea with maximum 4-5 words), Result in JSON format with ideas field"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Here's a thinking process that leads to the JSON output:\n\n1.  **Understand the Core Request:** The user wants a JSON output containing logo ideas (text prompts) for a tech company called \"Grace Space\" targeted at Christians. The logo style should be a \"Modern Mascot Logo.\" The user also provided a reference prompt: \"Create vibrant logos featuring a friendly and animated character.\" Each idea should be concise (max 4-5 words).\n\n2.  **Deconstruct the Brand Identity:**\n    *   **Name:** Grace Space. \"Grace\" evokes religious connotations (divine grace), gentleness, kindness. \"Space\" suggests technology, digital environment, community, room to grow.\n    *   **Target Audience:** Christians. This implies themes of faith, community, light, hope, possibly referencing Christian symbols subtly.\n    *   **Industry:** Tech Company. This implies modernity, innovation, digital interaction, clean lines (even with a mascot).\n    *   **Logo Type:** Modern Mascot Logo. This requires a character. The character should be friendly, animated, and fit the \"Grace Space\" identity. \"Modern\" suggests clean design, possibly flat or minimalist elements alongside the mascot. \"Vibrant\" (from the reference prompt) suggests bright, positive colors.\n    *   **Reference Prompt:** \"Create vibrant logos featuring a friendly and animated character.\" This reinforces the need for a lively, approachable character and bright colors.\n\n3.  **Brainstorm Mascot Concepts:** What kind of character fits \"Grace Space\" for Christian tech users?\n    *   **Dove:** Symbol of peace, the Holy Spirit. Could be modernized, perhaps holding a tablet or interacting with digital elements.\n    *   **Angel:** Obvious religious connection. Needs to be modern, friendly, maybe tech-savvy (e.g., with glowing digital wings or halo). Less intimidating, more approachable.\n    *   **Lamb:** Symbol of Jesus, innocence, gentleness. Could be cute, maybe interacting with a screen.\n    *   **Abstract/Friendly Robot/Character:** Less overtly religious, but can embody \"grace\" through design (smooth lines, gentle expression) and \"space\" through tech elements. Could have subtle Christian symbols (e.g., a cross shape integrated subtly, or a light/star element).\n    *   **Personified \"Light\" or \"Star\":** Represents guidance, hope, divine light. Could be a cute, glowing character.\n    *   **Personified Cloud:** \"Space\" connection, heavenly feel. Could be friendly, maybe interacting with tech icons.\n\n4.  **Combine Mascot Concepts with Brand Elements & Style:** Now, translate these mascot ideas into concise (4-5 word) logo descriptions incorporating \"Modern Mascot,\" \"Vibrant,\" \"Friendly,\" \"Animated,\" and elements of \"Grace,\" \"Space,\" \"Tech,\" and \"Christian.\"\n\n    *   *Idea 1 (Dove):* Friendly dove mascot, digital halo. (Focuses on peace, tech, subtle faith) -> \"Friendly tech dove, digital halo.\" (4 words) -> Add vibrancy: \"Vibrant tech dove mascot.\" (4 words) -> Maybe more specific: \"Friendly dove mascot, glowing tablet.\" (4 words) Let's go with a mix: \"Friendly dove mascot, digital glow.\" (4 words) - *Refinement: Make it explicitly modern.* \"Modern dove mascot, tech glow.\" (4 words). *Refinement 2: Add vibrancy.* \"Vibrant dove mascot, digital halo.\" (4 words).\n\n    *   *Idea 2 (Angel):* Cheerful modern angel, tech wings. (Focuses on faith, modern style, tech) -> \"Cheerful tech angel mascot.\" (4 words) -> Incorporate \"space\": \"Modern angel mascot, starry space.\" (4 words) -> Combine: \"Friendly tech angel, vibrant wings.\" (4 words).\n\n    *   *Idea 3 (Abstract/Robot):* Gentle robot mascot, cross symbol. (Focuses on tech, grace, subtle faith) -> \"Friendly robot, subtle cross.\" (4 words). -> Make it more \"spacey\": \"Gentle robot mascot, star light.\" (4 words) -> Add vibrancy: \"Vibrant robot mascot, grace light.\" (4 words).\n\n    *   *Idea 4 (Light/Star):* Animated star character, friendly smile. (Focuses on hope, guidance, friendliness) -> \"Friendly star mascot, tech spark.\" (4 words) -> Add vibrancy: \"Vibrant star character, tech orbit.\" (4 words).\n\n    *   *Idea 5 (Lamb):* Cute lamb mascot, coding screen. (Focuses on gentleness, faith, tech) -> \"Gentle lamb mascot, tech screen.\" (4 words) -> Make it vibrant: \"Vibrant lamb mascot, coding.\" (4 words).\n\n5.  **Review and Select Best 4-5 Ideas:** Look at the generated ideas. Do they fit all criteria? Are they distinct enough? Are they concise?\n\n    1.  `Vibrant dove mascot, digital halo.` (Good: Dove = peace/spirit, digital halo = tech/grace, vibrant, mascot)\n    2.  `Friendly tech angel, vibrant wings.` (Good: Angel = faith, tech = industry, vibrant, friendly, mascot)\n    3.  `Gentle robot mascot, star light.` (Good: Robot = tech, gentle = grace, star light = space/hope, mascot)\n    4.  `Animated star character, tech spark.` (Good: Star = hope/guidance, animated/character = mascot, tech spark = industry)\n    5.  `Cute lamb mascot, holding tablet.` (Good: Lamb = faith/gentleness, holding tablet = tech, cute = friendly, mascot)\n\n    These 5 seem good, distinct, and fit the criteria. They cover different symbolic approaches (dove, angel, lamb, star, robot).\n\n6.  **Format as JSON:** Create the final JSON structure as requested.\n\n    ```json\n    {\n      \"ideas\": [\n        {\n          \"idea\": \"Vibrant dove mascot, digital halo.\"\n        },\n        {\n          \"idea\": \"Friendly tech angel, vibrant wings.\"\n        },\n        {\n          \"idea\": \"Gentle robot mascot, star light.\"\n        },\n        {\n          \"idea\": \"Animated star character, tech spark.\"\n        },\n        {\n          \"idea\": \"Cute lamb mascot, holding tablet.\"\n        }\n      ]\n    }\n    ```\n\n7.  **Final Check:** Does the JSON structure match the request? Are the ideas concise (max 4-5 words)? Do they reflect \"Grace Space,\" \"Tech Company for Christians,\" and \"Modern Mascot Logo\"? Yes."},
          {text: "```json\n{\n  \"ideas\": [\n    {\n      \"idea\": \"Friendly dove mascot, digital halo.\"\n    },\n    {\n      \"idea\": \"Cheerful angel mascot, tech wings.\"\n    },\n    {\n      \"idea\": \"Gentle robot mascot, star light.\"\n    },\n    {\n      \"idea\": \"Animated star character, holding tablet.\"\n    },\n    {\n      \"idea\": \"Modern lamb mascot, coding screen.\"\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // // TODO: Following code needs to be updated for client-side apps.
  // const candidates = result.response.candidates;
  // for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
  //   for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
  //     const part = candidates[candidate_index].content.parts[part_index];
  //     if(part.inlineData) {
  //       try {
  //         const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
  //         fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
  //         console.log(`Output written to: ${filename}`);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   }
  // }
  // console.log(result.response.text());


