from fastapi import APIRouter
from services.ollama_service import generate_quiz_content

router = APIRouter(prefix="/quiz", tags=["Quiz"])

# In-memory storage for quizzes
quizzes = []

@router.post("/generate-quiz")
def generate_quiz(course_id: int, topic: str):
    """
    Generate a quiz based on the topic. The output will be in JSON format.
    """
    quiz_content = generate_quiz_content(topic)
    new_quiz = {"id": len(quizzes) + 1, "course_id": course_id, "quiz": quiz_content}
    quizzes.append(new_quiz)
    return {"message": "Quiz generated successfully", "quiz": new_quiz}

@router.get("/list")
def list_quizzes():
    return quizzes
