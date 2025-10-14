from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import datetime

from database import get_db
from models import Score, Quiz, User
from schemas import SubmitQuizRequest, SubmitQuizResponse
from auth import get_current_user

router = APIRouter()


@router.post("/submit_quiz", status_code=status.HTTP_201_CREATED, response_model=SubmitQuizResponse)
def submit_quiz(payload: SubmitQuizRequest, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    # Derive the user_id from token, ignore body user_id if present
    user_id = current_user.id

    # Validate quiz exists
    quiz = db.query(Quiz).filter(Quiz.id == payload.quiz_id).first()
    if not quiz:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Quiz not found")

    score = Score(
        user_id=user_id,
        quiz_id=payload.quiz_id,
        score=payload.score,
        total_questions=payload.total_questions,
        date=datetime.utcnow(),
    )
    db.add(score)
    db.commit()
    db.refresh(score)

    return SubmitQuizResponse(message="Score saved", score_id=score.id)


@router.get("/scores/{user_id}")
def get_scores(user_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    # Ensure the requested user matches the token subject
    if current_user.id != user_id:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")

    scores = (
        db.query(Score).filter(Score.user_id == user_id).order_by(Score.date.desc()).all()
    )
    result = []
    for s in scores:
        quiz = db.query(Quiz).filter(Quiz.id == s.quiz_id).first()
        result.append(
            {
                "id": s.id,
                "quiz_id": s.quiz_id,
                "score": s.score,
                "total_questions": s.total_questions,
                "date": s.date.isoformat() if s.date else None,
                "quiz_title": quiz.title if quiz else None,
            }
        )
    return result
