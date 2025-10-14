from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import func

from database import get_db
from models import Quiz, Question

router = APIRouter()


@router.get("/quizzes")
def get_quiz(db: Session = Depends(get_db)):
    # Select a random quiz each time (SQLite: ORDER BY RANDOM())
    quiz = db.query(Quiz).order_by(func.random()).first()
    if not quiz:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No quizzes available")

    questions = (
        db.query(Question).filter(Question.quiz_id == quiz.id).order_by(Question.id.asc()).all()
    )
    return {
        "id": quiz.id,
        "title": quiz.title,
        "questions": [
            {
                "id": q.id,
                "question": q.question,
                "options": q.options or [],
                "correct_answer": q.correct_answer,
            }
            for q in questions
        ],
    }
