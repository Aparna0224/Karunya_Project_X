from fastapi import FastAPI
from routers import course, quiz, final_quiz

app = FastAPI(title="AI Course Generator with DeepSeek")

# Include all API routers
app.include_router(course.router)
app.include_router(quiz.router)
app.include_router(final_quiz.router)

@app.get("/")
def root():
    return {"message": "Welcome to the AI Course Generator powered by DeepSeek!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
