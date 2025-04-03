from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend integration

# ⚠️ Set Your API Key Here (Replace with your actual Gemini API key)
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_input = data.get("message", "").strip()  # Fixed key name

        if not user_input:
            return jsonify({"error": "❌ Message is required"}), 400

        # Use the latest Gemini model
        model = genai.GenerativeModel("gemini-1.5-pro")
        response = model.generate_content(user_input)

        if response and hasattr(response, "text"):
            return jsonify({"reply": response.text})  # Fixed response key
        else:
            return jsonify({"error": "⚠️ Empty response from Gemini"}), 500

    except Exception as e:
        print(f"❌ Error: {str(e)}")  # Log for debugging
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5005)
