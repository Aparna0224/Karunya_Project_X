from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import course, quiz, final_quiz

# Initialize FastAPI app
app = FastAPI(
    title="AI Course Generator with DeepSeek",
    description="API for generating educational courses using AI",
    version="1.0.0"
)

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (adjust for production)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Include all API routers
app.include_router(course.router)
app.include_router(quiz.router)
app.include_router(final_quiz.router)

@app.get("/")
async def root():
    """Root endpoint that provides basic API information"""
    return {
        "message": "Welcome to the AI Course Generator powered by DeepSeek!",
        "endpoints": {
            "courses": "/course",
            "quizzes": "/quiz",
            "final_quizzes": "/final-quiz"
        },
        "documentation": "/docs"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="127.0.0.1",  # Localhost
        port=8000,         # Default port
        reload=True        # Auto-reload during development
    )