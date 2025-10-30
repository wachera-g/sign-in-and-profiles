// Starts the app (later we’ll make it listen on a port and respond to requests)

// Starts the app so it can receive requests.
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

