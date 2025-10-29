What this service is:
A tiny backend that lets a person create an account, log in, view their own profile, and log out. It’s built for learning and teaching secure login.

Why it exists:
Most real apps need secure sign-in. This project demonstrates the essentials in a minimal, teachable way.

The four actions:

Register: create account with name, email, password

Log in: verify identity using email + password, then receive a login “badge” (token)

View profile: show my own id, name, email (only when logged in)

Log out: end the session so the badge no longer works

Success & error messages (clear & consistent):

Register → Account created; errors: Email already in use, Invalid input

Log in → Login successful; errors: Invalid email or password, Invalid input

View profile → returns { id, name, email }; error: Not authenticated

Log out → Logged out; error: Not authenticated

Security idea in one sentence:
We never store actual passwords—only a scrambled version; you prove yourself, get a short-lived badge, and can log out to invalidate it.