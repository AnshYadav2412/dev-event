import { MongoClient } from 'mongodb';

// Validate that the MongoDB URI is defined
if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const MONGODB_URI = process.env.MONGODB_URI;

// Cache connection to prevent multiple connections during development
let cached = global.mongoCache;

/**
 * Establishes and caches a connection to MongoDB
 * Reuses existing connection in development to prevent connection exhaustion
 * @returns {Promise<{client: MongoClient, db: Db}>} MongoDB client and database instance
 */
export async function connectToDatabase() {
  // Return cached connection if available
  if (cached) {
    return cached;
  }

  // Create new MongoDB client
  const client = new MongoClient(MONGODB_URI);

  // Connect to MongoDB
  await client.connect();

  // Get database instance
  const db = client.db();

  // Cache the connection
  const connection = {
    client,
    db,
  };

  // Store in global cache (persists across hot reloads in development)
  global.mongoCache = connection;
  cached = connection;

  return connection;
}

/**
 * Gets the database instance
 * Convenience method that connects if needed and returns only the db
 * @returns {Promise<Db>} MongoDB database instance
 */
export async function getDatabase() {
  const { db } = await connectToDatabase();
  return db;
}
