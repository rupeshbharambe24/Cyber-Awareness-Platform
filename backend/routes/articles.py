from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database import get_db
from models import Article

router = APIRouter()


@router.get("/articles")
def list_articles(db: Session = Depends(get_db)):
    articles = db.query(Article).order_by(Article.id.asc()).all()
    return [
        {
            "id": a.id,
            "title": a.title,
            "description": a.description,
        }
        for a in articles
    ]


@router.get("/articles/{article_id}")
def get_article(article_id: int, db: Session = Depends(get_db)):
    article = db.query(Article).filter(Article.id == article_id).first()
    if not article:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Article not found")
    return {
        "id": article.id,
        "title": article.title,
        "content": article.content,
        "author": article.author,
        "date": article.date.isoformat() if article.date else None,
    }
