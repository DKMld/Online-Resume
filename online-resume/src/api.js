import { GoogleGenerativeAI } from "@google/generative-ai"; // Ensure this package is correctly installed and used


const API_KEY = process.env.REACT_APP_GOOGLE_API

const getGoogleAiResponse = async (message) => {
    // Initialize Google Generative AI with the provided API key
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Get the specific model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Start a chat with the model
    const prompt = message;

    const result  = await model.generateContent(prompt)

    if (result.response.text){
        return result.response.text()
    }else{
        const noResult = "No result"
        return noResult
    }   
    
};

export default getGoogleAiResponse;
