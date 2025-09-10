import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("alloy");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateVoiceover = async () => {
    setLoading(true);
    setAudioUrl(null);

    try {
      const response = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4o-mini-tts",
          voice: voice,
          input: text
        })
      });

      if (!response.ok) throw new Error("Failed to generate audio");

      const blob = await response.blob();
      setAudioUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Check API key or text.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h1 className="text-4xl font-bold mb-2">Pause</h1>
      <p className="text-gray-600 mb-6">Turn text into voice instantly.</p>

      <textarea
        className="w-full max-w-lg p-3 border rounded-lg shadow-sm mb-4"
        rows={5}
        placeholder="Type your script here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="w-full max-w-lg p-3 border rounded-lg shadow-sm mb-4"
        value={voice}
        onChange={(e) => setVoice(e.target.value)}
      >
        <option value="alloy">Alloy</option>
        <option value="verse">Verse</option>
        <option value="bright">Bright</option>
      </select>

      <button
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:opacity-50"
        onClick={generateVoiceover}
        disabled={loading || !text}
      >
        {loading ? "Generating..." : "Generate Voiceover"}
      </button>

      {audioUrl && (
        <div className="mt-6">
          <audio controls src={audioUrl}></audio>
        </div>
      )}
    </div>
  );
    }f.4ir9.8zz,.8
