import ollama
import json
import re

def clean_response(response_text: str) -> str:
    """
    Cleans the AI response by removing unwanted text, including <think> messages.
    Extracts and returns only valid JSON.
    """
    # Remove unwanted tags like <think> or similar text
    cleaned_text = re.sub(r"<.*?>", "", response_text).strip()

    # Extract JSON content using regex
    match = re.search(r"\{.*\}", cleaned_text, re.DOTALL)
    if match:
        return match.group(0)  # Return only the JSON portion
    
    return "{}"  # Default to an empty JSON object if no valid JSON found

def generate_course_content(topic: str, level: str) -> dict:
    """
    Uses DeepSeek via Ollama to generate structured course content based on topic and level.
    Ensures the response is properly formatted as JSON with 6 detailed modules.
    """
    prompt = (
        f'Generate a structured course on "{topic}" for "{level}" learners in JSON format.\n\n'
        "### **Course Structure Requirements:**\n"
        "- The course must contain exactly **6 modules**, stored in a JSON array under the key \"modules\".\n"
        "- Each module must include:\n"
        "  - \"module_name\": A clear module title.\n"
        "  - \"module_overview\": A **900-1200 word** summary.\n"
        "  - \"content_list\": A **minimum of 5 subtopics**, each with:\n"
        "    - \"topic_name\": The title.\n"
        "    - \"description\": A **detailed explanation**.\n"
        "    - \"example_code\": Python code (if applicable).\n"
        "    - \"code_explanation\": A **breakdown** of the code.\n"
        "  - \"practice_questions\": At least **4 practice questions**.\n\n"
        "STRICTLY return only valid JSON output, without any additional text."
    )
    
    response = ollama.chat(model="deepseek-r1:7b", messages=[{"role": "user", "content": prompt}])
    
    # Retrieve and clean response
    content = response.get('message', {}).get('content', '')
    cleaned_content = clean_response(content)
    
    try:
        course_json = json.loads(cleaned_content)

        # Ensure structured output contains "modules" key
        if not isinstance(course_json, dict) or "modules" not in course_json:
            print("Invalid JSON received:", cleaned_content)  # Debugging
            return {"error": "Invalid course structure received", "raw": cleaned_content}

        # Ensure exactly 6 modules
        if not isinstance(course_json["modules"], list) or len(course_json["modules"]) != 6:
            print("Unexpected module count:", cleaned_content)  # Debugging
            return {"error": "Expected exactly 6 modules, but received a different number", "raw": cleaned_content}

        # Ensure each module is a dictionary
        for module in course_json["modules"]:
            if not isinstance(module, dict):
                print("Invalid module structure:", cleaned_content)  # Debugging
                return {"error": "Module data is incorrectly formatted", "raw": cleaned_content}

    except json.JSONDecodeError as e:
        print("JSON parsing error:", e)  # Debugging
        return {"error": f"Failed to parse JSON: {e}", "raw": cleaned_content}
    
    return course_json


def generate_quiz_content(topic: str) -> dict:
    """
    Uses DeepSeek via Ollama to generate a structured multiple-choice quiz.
    Returns well-formatted JSON containing exactly 5 quiz questions.
    """
    prompt = (
        f"Generate 5 multiple-choice questions on {topic} as a JSON object. "
        "Each key should be the question number (\"1\" to \"5\") with an object containing: "
        "\"question\" - the question text. "
        "\"options\" - an array of exactly 4 answer choices. "
        "\"correct_answer\" - the correct answer (one of the options). "
        "STRICTLY return only valid JSON, with no extra text."
    )
    
    response = ollama.chat(model="deepseek-r1:7b", messages=[{"role": "user", "content": prompt}])
    
    content = response.get('message', {}).get('content', '')
    cleaned_content = clean_response(content)
    
    try:
        quiz_json = json.loads(cleaned_content)
        
        # Validate structure: Exactly 5 questions with correct keys
        if len(quiz_json) != 5 or not all(str(i) in quiz_json for i in range(1, 6)):
            return {"error": "Invalid quiz structure received", "raw": cleaned_content}
        
    except json.JSONDecodeError as e:
        return {"error": f"Failed to parse JSON: {e}", "raw": cleaned_content}
    
    return quiz_json

def generate_final_quiz(course_title: str) -> dict:
    """
    Uses DeepSeek via Ollama to generate a final assessment quiz for a given course.
    Ensures structured JSON with exactly 10 multiple-choice questions covering the entire course.
    """
    prompt = (
        f"Generate a final quiz for the course '{course_title}'. "
        "The quiz should contain exactly 10 multiple-choice questions. "
        "Return the output as a JSON object where each key is a number (\"1\" to \"10\"). "
        "Each question object must contain: "
        "\"question\" - The quiz question. "
        "\"options\" - An array of 4 possible answers. "
        "\"correct_answer\" - The correct answer from the options. "
        "STRICTLY return valid JSON without additional text."
    )
    
    response = ollama.chat(model="deepseek-r1:7b", messages=[{"role": "user", "content": prompt}])
    
    content = response.get('message', {}).get('content', '')
    cleaned_content = clean_response(content)
    
    try:
        final_quiz_json = json.loads(cleaned_content)
        
        # Validate structure: Exactly 10 questions
        if len(final_quiz_json) != 10 or not all(str(i) in final_quiz_json for i in range(1, 11)):
            return {"error": "Invalid final quiz structure received", "raw": cleaned_content}
        
    except json.JSONDecodeError as e:
        return {"error": f"Failed to parse JSON: {e}", "raw": cleaned_content}
    
    return final_quiz_json