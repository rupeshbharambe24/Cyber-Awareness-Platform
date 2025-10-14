import os
from datetime import datetime, timedelta, timezone
from typing import Any, Dict

import jwt

SECRET_KEY = os.getenv("SECRET_KEY", "cybersecure-secret-key")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 24


def create_access_token(*, subject: str, name: str, email: str, expires_delta: timedelta | None = None) -> str:
    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS))
    to_encode: Dict[str, Any] = {"sub": subject, "name": name, "email": email, "exp": expire}
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def decode_token(token: str) -> Dict[str, Any]:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise ValueError("Invalid or expired token")
    except jwt.InvalidTokenError:
        raise ValueError("Invalid or expired token")
