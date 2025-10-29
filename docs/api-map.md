Purpose
This project is a small backend service that lets people create an account, log in, view their personal information securely, and log out. It teaches the foundation of safe authentication used in real websites and apps.

Routes planned

POST /register → create a new account using name, email, and password

POST /login → check credentials, issue a secure login badge

GET /profile → show my name and email (only works with the badge)

POST /logout → end the session and make the badge invalid

Rules at the door
Some routes are public (register, login). Others are private (profile, logout) and require the badge.

Error language
We’ll keep responses simple and predictable, using messages such as:

Account created

Email already in use

Invalid email or password

Not authenticated

Logged out