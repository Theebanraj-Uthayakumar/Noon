import express, { Request, Response } from "express";
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store for favorites
const favorites: any[] = [];

// GET endpoint to retrieve all favorited items
app.get("/api/favorites", (req: Request, res: Response) => {
  res.json(favorites);
});

// POST endpoint to add a new favorited item
app.post("/api/favorites", (req: Request, res: Response) => {
  const item = req.body;
  favorites.push(item);
  res.status(201).json({ message: "Item added to favorites", item });
});

// DELETE endpoint to remove an item from favorites
app.delete("/api/favorites", (req: Request, res: Response) => {
  const { id } = req.body;
  const index = favorites.findIndex((item) => item.id === id);
  if (index !== -1) {
    favorites.splice(index, 1);
    res.json({ message: "Item removed from favorites" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
