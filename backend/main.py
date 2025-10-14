from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from contextlib import asynccontextmanager

from database import Base, engine, SessionLocal
from routes import users, articles, quizzes, scores
from seed_data import seed_db


def create_app() -> FastAPI:
    @asynccontextmanager
    async def lifespan(app: FastAPI):
        # Create tables and seed data on startup
        Base.metadata.create_all(bind=engine)
        db: Session = SessionLocal()
        try:
            seed_db(db)
            yield
        finally:
            db.close()

    app = FastAPI(title="Cyber Secure Backend", version="1.0.0", lifespan=lifespan)

    # CORS for frontend
    origins = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Routers
    app.include_router(users.router, tags=["Users"])
    app.include_router(articles.router, tags=["Articles"])
    app.include_router(quizzes.router, tags=["Quizzes"])
    app.include_router(scores.router, tags=["Scores"])

    @app.get("/")
    def root():
        return {"message": "Cyber Secure API is running"}

    return app


app = create_app()

if __name__ == "__main__":
    import uvicorn
    # Running as a script; support reload and standard host/port
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
