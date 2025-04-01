from fastapi import APIRouter, Query
from services.ollama_service import generate_course_content

router = APIRouter(prefix="/course", tags=["Course"])

# In-memory storage for courses
courses = []

def generate_topic_brief(topic: str) -> str:
    """
    Generates a detailed explanation of the given topic (200-300 words).
    In production, you might call an AI service or retrieve from a database.
    For now, we return a placeholder explanation.
    """
    return (
        f"{topic} is an expansive and dynamic subject that plays a pivotal role in today’s technology-driven world. "
        f"From its early beginnings to its current state, {topic} has evolved into a versatile discipline that integrates both "
        "theoretical foundations and practical applications. This subject not only forms the basis for many modern technologies but "
        "also provides the critical thinking and problem-solving skills essential for various fields. \n\n"
        f"Studying {topic} exposes learners to fundamental concepts such as core principles, methodologies, and techniques that drive innovation. "
        "It offers a deep dive into practical applications, enabling students to understand how these concepts are implemented in real-world scenarios. "
        "The curriculum typically covers a spectrum of topics, ensuring that both beginners and advanced learners can gain valuable insights. \n\n"
        f"Moreover, {topic} is renowned for its rich history and continuous evolution, reflecting changing industry standards and technological advancements. "
        "It fosters a blend of creativity and analytical thinking, empowering learners to develop solutions for complex challenges. Overall, this subject equips "
        "students with essential technical skills while inspiring them to explore and innovate in various technological fields."
    )
@router.post("/generate-course")
def generate_course(
    title: str = Query(..., description="The course topic (e.g., 'Python')"),
    level: str = Query(..., description="The learner level (e.g., 'beginner')")
):
    """
    Generate a course with module-wise content and a detailed explanation of the topic.
    
    Query Parameters:
      - title: The course topic (e.g., "Python")
      - level: The learner level (e.g., "beginner")
      
    Returns:
      A JSON object with a message and the generated course details.
    """
    # Generate detailed module-wise course content using the AI service.
    content = generate_course_content(title, level)

    # Check if content contains an error
    if "error" in content:
        return {"error": content["error"], "raw_response": content["raw"]}

    # Structure the course content and add a detailed topic explanation.
    structured_content = {
        "course_title": title,
        "topic_brief": generate_topic_brief(title),
        "level": level,
        "modules": []
    }
    
    # Process each module from the AI-generated content.
    for module_data in content["modules"]:
        if not isinstance(module_data, dict):
            print("Invalid module format detected:", module_data)  # Debugging
            continue  # Skip incorrect modules

        structured_content["modules"].append({
            "module_name": module_data.get("module_name", "Unnamed Module"),
            "module_overview": module_data.get("module_overview", ""),
            "content_list": module_data.get("content_list", [])
        })
    
    new_course = {
        "id": len(courses) + 1,
        "title": title,
        "level": level,
        "content": structured_content
    }
    courses.append(new_course)
    
    return {"message": "Course generated successfully", "course": new_course}


@router.get("/list")
def list_courses():
    """
    List all generated courses.
    
    Returns:
      A JSON object containing an array of all stored courses.
    """
    return {"courses": courses}