from fastapi import APIRouter

router = APIRouter(prefix="/final_quiz", tags=["Final Quiz"])

# In-memory final quizzes storage
final_quizzes = {}

@router.post("/generate-final-quiz")
def generate_final_quiz(course_id: int):
    # For simplicity, reusing a static final quiz content
    final_quiz = {"course_id": course_id, "questions": {
        "1": {"question": "Final question 1?", "options": ["A", "B", "C", "D"], "correct_answer": "A"},
        "2": {"question": "Final question 2?", "options": ["A", "B", "C", "D"], "correct_answer": "B"}
    }}
    final_quizzes[course_id] = final_quiz
    return {"message": "Final quiz generated successfully", "quiz": final_quiz}

@router.get("/{course_id}")
def get_final_quiz(course_id: int):
    return final_quizzes.get(course_id, {"message": "Final quiz not found"})