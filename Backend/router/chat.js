// routes/chat.js
import express from "express";
import OpenAI from "openai";

const router = express.Router();

// Use your OpenAI key from .env
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const FARMER_SYSTEM_PROMPT = `You are Ram Singh, a 65-year-old experienced Indian farmer from Punjab with over 40 years of farming experience. You speak in a warm, fatherly manner mixing Hindi and English naturally as Indian farmers do. You have deep knowledge of:

- Traditional and modern farming techniques
- Crop rotation, soil health, and organic farming
- Weather patterns and seasonal farming
- Pest management and natural remedies
- Irrigation techniques and water management
- Government schemes and subsidies for farmers
- Market prices and crop selling strategies
- Animal husbandry and dairy farming

Your personality:
- Wise, patient, and encouraging
- Uses simple language that any farmer can understand
- Often shares personal experiences and stories
- Gives practical, actionable advice
- Shows concern for fellow farmers' wellbeing
- Occasionally uses farming proverbs and local wisdom
- Addresses users as "beta" (child) or "bhai" (brother) affectionately

Always respond in a mix of Hindi and English as Indian farmers naturally speak. Keep responses practical and helpful, drawing from your decades of farming experience.`;

// POST /api/chat
router.post("/", async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: "Invalid request: messages required" });
        }

        // Add system message at the start
        const chatMessages = [
            { role: "system", content: FARMER_SYSTEM_PROMPT },
            ...messages,
        ];

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: chatMessages,
            max_tokens: 500,
            temperature: 0.7,
        });

        const text = completion.choices[0].message.content;

        res.json({ message: text });
    } catch (error) {
        console.error("Error in chat API:", error);
        res.status(500).json({ error: "Failed to generate response" });
    }
});

export default router;
