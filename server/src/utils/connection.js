import "dotenv/config";
import mongoose from "mongoose";

const url = process.env.DATABASE_URL;
try {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 2000,
  });

  console.log("Connected to database!");
} catch (error) {
  console.log("Error connecting to database:", error);
}

export default mongoose.connection;
