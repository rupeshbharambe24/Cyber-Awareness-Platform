from sqlalchemy.orm import Session
from sqlalchemy import func

from models import Article, Quiz, Question


def seed_db(db: Session) -> None:
    from seed_payloads import ARTICLES, QUIZZES

    # Seed Articles if empty
    article_count = db.query(func.count(Article.id)).scalar() or 0
    if article_count == 0:
        db.add_all([
            Article(
                title=a["title"],
                description=a["description"],
                content=a["content"],
                author=a.get("author", "Security Team"),
            )
            for a in ARTICLES
        ])
        db.commit()

    # Seed Quizzes if empty
    quiz_count = db.query(func.count(Quiz.id)).scalar() or 0
    if quiz_count == 0:
        for qd in QUIZZES:
            quiz = Quiz(title=qd["title"])
            db.add(quiz)
            db.flush()
            db.add_all(
                [
                    Question(
                        quiz_id=quiz.id,
                        question=item["q"],
                        options=item["opts"],
                        correct_answer=item["ans"],
                    )
                    for item in qd["questions"]
                ]
            )
        db.commit()
