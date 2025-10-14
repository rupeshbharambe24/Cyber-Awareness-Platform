from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database import get_db
from models import User
from schemas import RegisterRequest, LoginRequest, TokenResponse
from auth import get_password_hash, verify_password
from utils.jwt_handler import create_access_token

router = APIRouter()


@router.post("/register", status_code=status.HTTP_201_CREATED)
def register_user(payload: RegisterRequest, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == payload.email).first()
    if existing:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="User with this email already exists")

    hashed = get_password_hash(payload.password)
    user = User(name=payload.name.strip(), email=payload.email.strip().lower(), password_hash=hashed)
    db.add(user)
    db.commit()
    db.refresh(user)

    return {"message": "User registered successfully"}


@router.post("/login", response_model=TokenResponse)
def login_user(payload: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == payload.email.strip().lower()).first()
    if not user or not verify_password(payload.password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

    token = create_access_token(subject=str(user.id), name=user.name, email=user.email)
    return TokenResponse(token=token)
