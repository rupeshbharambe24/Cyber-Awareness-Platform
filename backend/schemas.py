from typing import List, Optional
from pydantic import BaseModel, EmailStr, field_validator


# Users
class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    token: str


# Articles
class ArticleSummary(BaseModel):
    id: int
    title: str
    description: str


class ArticleDetail(BaseModel):
    id: int
    title: str
    content: str
    author: Optional[str] = None
    date: Optional[str] = None


# Quizzes
class QuestionOut(BaseModel):
    id: int
    question: str
    options: List[str]
    correct_answer: int


class QuizOut(BaseModel):
    id: int
    title: str
    questions: List[QuestionOut]


# Scores
class SubmitQuizRequest(BaseModel):
    quiz_id: int
    user_id: Optional[int] = None  # present in frontend payload but ignored server-side
    score: int
    total_questions: int


class SubmitQuizResponse(BaseModel):
    message: str
    score_id: int


class ScoreOut(BaseModel):
    id: int
    quiz_id: int
    score: int
    total_questions: int
    date: str
    quiz_title: Optional[str] = None

