# Pause 🎙️
A simple text-to-speech app powered by OpenAI.

## 🚀 How to run locally
1. Clone this repo
2. Run `npm install`
3. Add your OpenAI API key in `.env`
   ```
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Run `npm run dev`
5. Visit `http://localhost:3000`

## 🌍 Deploy on Render
1. Push this repo to GitHub
2. Go to [Render](https://render.com/)
3. Create a **Web Service**
   - Environment = Node
   - Build Command = `npm install && npm run build`
   - Start Command = `npm start`
4. Add your API key as an Environment Variable:
   ```
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
   ```