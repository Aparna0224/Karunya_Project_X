from fastapi import APIRouter, Query, HTTPException, Body
from services.ollama_service import generate_course_content
from typing import Optional

router = APIRouter(prefix="/course", tags=["Course"])

# In-memory storage for courses
courses = []

def generate_topic_brief(topic: str) -> str:
    """Generates a detailed explanation of the given topic (200-300 words)."""
    return (
        f"{topic} is an expansive and dynamic subject that plays a pivotal role in today's technology-driven world. "
        f"From its early beginnings to its current state, {topic} has evolved into a versatile discipline that integrates both "
        "theoretical foundations and practical applications. This subject not only forms the basis for many modern technologies but "
        "also provides the critical thinking and problem-solving skills essential for various fields."
    )

@router.post("/generate")
async def generate_course(
    title: str = Body(..., embed=True),
    level: str = Body(..., embed=True)
):
    """
    Generate a course with module-wise content.
    
    Request Body:
      - title: The course topic (e.g., "Python")
      - level: The learner level (e.g., "beginner")
      
    Returns:
      The generated course details.
    """
    try:
        # Generate content from AI service
        content = generate_course_content(title, level)
        
        if "error" in content:
            raise HTTPException(status_code=400, detail=content["error"])

        # Structure the response
        structured_content = {
            "course_title": title,
            "topic_brief": generate_topic_brief(title),
            "level": level,
            "modules": content.get("modules", [])
        }
        
        new_course = {
            "id": len(courses) + 1,
            "title": title,
            "level": level,
            "content": structured_content
        }
        courses.append(new_course)
        
        return new_course
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/list")
async def list_courses():
    """List all generated courses."""
    return {"courses": courses}