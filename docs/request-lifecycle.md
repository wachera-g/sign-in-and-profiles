A person (or our testing tool) sends a request (e.g., “Log me in”).

The app checks which route the request belongs to (like choosing a menu item).

If the route is private, the middleware acts as a security guard and checks the login badge.

The controller reads the details, talks to the database if needed, and decides the outcome.

The app sends a response: a success message (and data if appropriate) or a clear error message.