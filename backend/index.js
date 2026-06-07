require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// =============================================
// HEALTH CHECK ENDPOINT (GET /)
// =============================================
app.get('/', (req, res) => {
  res.json({ 
    status: 'Active',
    message: 'Herbal Chatbot Backend',
    endpoints: {
      chat: 'POST /api/chat'
    }
  });
});

// =============================================
// CHATBOT ENDPOINT (POST /api/chat)
// =============================================
app.post('/api/chat', async (req, res) => {
  try {
    // Input validation
    if (!req.body.message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Initialize model with correct version
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      apiVersion: "v1beta"  // Required for free tier
    });
    
    // Generate response
    const result = await model.generateContent({
      contents: [{
        parts: [{ 
          text: `As an AYUSH herbal expert, suggest a concise remedy for: ${req.body.message}. 
                 Provide only the remedy, no additional explanations.` 
        }]
      }]
    });
    
    // Send response
    res.json({ 
      reply: (await result.response).text(),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ 
      error: "AI failed to respond",
      details: error.message.replace(/key=[A-Za-z0-9_\-]+/, "key=REDACTED") 
    });
  }
});

// =============================================
// START SERVER
// =============================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test endpoint: curl http://localhost:${PORT}/api/chat -X POST -H "Content-Type: application/json" -d '{"message":"headache"}'`);
});